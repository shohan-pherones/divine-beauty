import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-gray-400 py-20 border-t border-gray-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pb-20 ps-10 lg:ps-0 w-full gap-16 md:gap-10 lg:gap-5 xl:gap-10 2xl:px-20 container mx-auto">
        <div className="footer-col-1 flex flex-col items-start">
          <Link
            href="/"
            className="text-2xl md:text-xl font-semibold text-green-500/80 hover:text-green-500/80 duration-300"
          >
            Divine-Beauty
          </Link>
        </div>
        <div className="footer-col-2 flex flex-col items-start">
          <p className="follow-text uppercase tracking-wider text-gray-500">{`Don't forget to follow us`}</p>
          <div className="social-icons flex pt-5 gap-5">
            <div className="icon-circle  w-7 rounded-full h-7 items-center justify-center flex bg-green-100">
              <FaFacebookF className="text-green-500 mx-auto" />
            </div>
            <div className="icon-circle  w-7 rounded-full h-7 items-center justify-center flex bg-green-100">
              <FaInstagram className="text-green-500 mx-auto" />
            </div>
            <div className="icon-circle  w-7 rounded-full h-7 items-center justify-center flex bg-green-100">
              <FaLinkedinIn className="text-green-500 mx-auto" />
            </div>
            <div className="icon-circle  w-7 rounded-full h-7 items-center justify-center flex bg-green-100">
              <FaTwitter className="text-green-500 mx-auto" />
            </div>
          </div>
        </div>
        <div className="footer-col-2 flex flex-col items-start">
          <p className="uppercase font-medium text-green-500 tracking-wider">
            Useful Links
          </p>
          <div className="nav-link flex flex-col-2 mt-3 gap-10 justify-start">
            <div className="link-col-left flex flex-col text-left gap-1 uppercase">
              <Link href="/" className="hover:text-green-500 duration-300">
                Home
              </Link>
              <Link href="" className="hover:text-green-500 duration-300">
                Packages
              </Link>

              <Link href="" className="hover:text-green-500 duration-300">
                About
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-col-4 flex flex-col items-start xl:items-center gap-3">
          <p className="uppercase tracking-wider text-gray-500">
            Need more informations?
          </p>
          <button className="footer-btn py-4 px-6 rounded-full uppercase text-sm font-medium text-green-500 bg-green-100 duration-300 hover:bg-green-500 hover:text-gray-50">
            + Contact Us
          </button>
        </div>
      </div>

      <p className="copyright  border-gray-500/40  text-gray-400  text-center uppercase">
        &copy; {new Date().getFullYear()} Divine-Beauty All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
