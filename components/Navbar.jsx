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
    <nav className="wrapper container mx-auto h-20 flex items-center justify-between">
      <div className="logo">
        <Link href="/" className="text-xl">
          Divine-Beauty
        </Link>
      </div>

      <nav onClick={handleToggle} className="nav-links">
        <ul
          className={`${
            toggleOpen
              ? "bg-white/20 flex flex-col gap-3 w-full absolute h-screen top-0 left-0 justify-center items-center backdrop-blur-sm lg:hidden text-gray-900/60"
              : "hidden lg:flex gap-5 text-gray-900/60"
          }`}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="">About</Link>
          </li>
          <li>
            <Link href="">Packages</Link>
          </li>
          <li>
            <Link href="">Contact</Link>
          </li>
          <li className="lg:hidden block">
            <Link href="">Sign in</Link>
          </li>
        </ul>
      </nav>

      <div className="nav-links-right flex gap-5">
        <Link href="" className="hidden lg:block lg:text-gray-900/60">
          Sign in
        </Link>

        <span className="z-[3]">
          <FiMenu
            onClick={handleToggle}
            className={`${
              !toggleOpen ? "block" : "hidden"
            } text-2xl lg:hidden cursor-pointer text-gray-900/60`}
          />
          <AiOutlineClose
            onClick={handleToggle}
            className={`${
              toggleOpen ? "block" : "hidden"
            } text-2xl lg:hidden cursor-pointer text-gray-900/60`}
          />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
