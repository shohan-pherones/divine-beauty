import { FcGoogle } from "react-icons/fc";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const LoginPage = ({ session }) => {
  const router = useRouter();
  const loginWithGoogle = async () => {
    try {
      await signIn("google");
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    if (session) {
      const destination = router.query.destination || "/users/profile";
      router.replace(destination);
    }
  }, [router, session]);

  if (session) {
    return null;
  }
  return (
    <div className="wrapper py-10 min-h-screen mt-10">
      <div className="flex flex-col gap-2">
        <p className="text-center text-lg font-medium">Login</p>
        <h1 className="text-4xl font-normal text-center">
          Get start with Google
        </h1>
        <h3 className="text-gray-600 text-center">
          Please login continue with our features!
        </h3>
      </div>

      <div className="flex justify-center">
        <button
          onClick={loginWithGoogle}
          className="flex gap-2 items-center border border-green-500/80 text-gray-500 py-3 px-6 rounded-lg hover:shadow-lg mt-5"
        >
          <span>
            <FcGoogle />
          </span>
          sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    const destination = context.query.destination || "/users/profile";

    return {
      redirect: {
        destination,
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
