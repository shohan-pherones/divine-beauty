import { getSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { BiLogOut } from "react-icons/bi";

const ProfilePage = ({ session }) => {
  const router = useRouter();
  const logOutWithGoogle = async () => {
    try {
      await signOut("google");
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    if (!session) {
      router.replace("/users/login");
    }
  }, [router, session]);

  if (!session) {
    return null;
  }
  return (
    <div className="wrapper mt-20 py-10 flex flex-col items-center gap-2 min-h-screen">
      <Image
        priority
        src={session.user.image}
        alt={session.user.name}
        width={110}
        height={110}
        className="h-20 w-20 rounded-full border-2 border-green-500"
      />
      <h2 className="text-xl md:text-3xl">welcome, {session.user.name}</h2>

      <button
        onClick={logOutWithGoogle}
        className="mt-5 flex gap-2 items-center border border-green-500/80 text-gray-500 py-3 px-6 rounded-lg hover:shadow-lg "
      >
        <span>
          <BiLogOut />
        </span>
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/users/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
