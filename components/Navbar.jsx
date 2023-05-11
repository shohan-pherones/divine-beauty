import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const navLilnks = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Packages", link: "/packages" },
  { id: 3, title: "About", link: "/about" },
  { id: 4, title: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };
  const handleOpen = () => {
    setOpen(false);
  };
  return (
    <div className="bg-white fixed top-0 left-0 right-0 z-[989]">
      <div className="wrapper">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl lg:text-xl font-medium text-green-500 hover:text-green-600/80 duration-300"
            >
              Divine-Beauty
            </Link>
          </div>
          {/* navlinks */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline gap-8">
              {navLilnks.map((link) => (
                <Link
                  key={link.id}
                  href={link.link}
                  className="text-gray-500 text-lg hover:text-green-500/80 duration-300"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href=""
            className="hidden md:block lg:text-lg py-3 px-7 rounded-2xl uppercase text-sm  text-green-500 bg-green-100 duration-300 hover:bg-green-500 hover:text-gray-50"
          >
            Sign in
          </Link>
          {/* hamburger button */}
          <div className=" -mr-2 flex md:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center justify-center focus:outline-none  text-green-500/80 p-2 z-[999]"
            >
              <span className="sr-only">Open Main Menu</span>
              {open == true ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu */}
      {open ? (
        <div className="md:hidden">
          <div
            onClick={handleOpen}
            className={`w-screen h-screen fixed z-[900] bg-green-100/50 backdrop-blur-lg top-0 left-0 right-0 bottom-0 flex justify-center items-center ${
              setOpen ? `` : "hidden"
            }`}
          >
            <div className="flex flex-col gap-5">
              {navLilnks.map((link) => (
                <Link
                  key={link.id}
                  href={link.link}
                  className="text-gray-500 text-lg text-center hover:text-green-500/80 duration-300"
                >
                  {link.title}
                </Link>
              ))}
              <Link
                href=""
                className="lg:text-lg py-3 px-7 rounded-2xl uppercase  text-green-500 bg-white duration-300 hover:bg-green-500 hover:text-gray-50 text-lg"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
