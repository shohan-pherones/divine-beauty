import Link from "next/link";
import { useCallback, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggleOpen, setToggleOpen] = useState(false);

  const handleToggle = useCallback(() => {
    if (window.innerWidth > 1023) {
      return;
    }

    setToggleOpen(!toggleOpen);
    document.body.classList.toggle("lock-scroll");
  }, [toggleOpen]);

  return (
    <div className="">
      <header className="wrapper container mx-auto h-20 flex items-center justify-between ">
        <div className="logo">
          <Link
            href="/"
            className="text-xl lg:text-xl text-green-500 hover:text-green-500/80 duration-300"
          >
            Divine-Beauty
          </Link>
        </div>

        <nav onClick={handleToggle} className="nav-links lg:text-lg">
          <ul
            className={`${
              toggleOpen
                ? "bg-white/20 flex flex-col gap-3 w-full  h-screen top-0 left-0 justify-center items-center backdrop-blur-xl lg:hidden text-gray-900/60 z-[9999] fixed"
                : "hidden lg:flex gap-8 text-gray-900/60"
            }`}
          >
            <li>
              <Link href="/" className="hover:text-green-500/80 duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-green-500/80 duration-300">
                About
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-green-500/80 duration-300">
                Packages
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-green-500/80 duration-300">
                Contact
              </Link>
            </li>
            <li className="lg:hidden block">
              <Link
                href=""
                className=" lg:text-lg py-3 px-6 rounded-full uppercase text-sm  text-green-500 bg-green-100 duration-300 hover:bg-green-500 hover:text-gray-50"
              >
                Sign in
              </Link>
            </li>
          </ul>
        </nav>

        <div className="nav-links-right flex gap-5">
          <Link
            href=""
            className="hidden lg:block py-3 px-6 rounded-full uppercase  text-green-500 bg-green-200 duration-300 hover:bg-green-500 hover:text-gray-50"
          >
            Sign in
          </Link>

          <span className="z-[3000]">
            <FiMenu
              onClick={handleToggle}
              className={`${
                !toggleOpen ? "block" : "hidden"
              } text-2xl lg:hidden cursor-pointer text-gray-900/60 hover:text-green-500/80 duration-300`}
            />
            <AiOutlineClose
              onClick={handleToggle}
              className={`${
                toggleOpen ? "block" : "hidden"
              } text-2xl lg:hidden cursor-pointer text-gray-900/60 hover:text-green-500/80 duration-300`}
            />
          </span>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
