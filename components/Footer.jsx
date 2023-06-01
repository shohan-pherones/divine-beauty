import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-gray-500 pt-20 px-4 sm:px-0">
      <div className="wrapper mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 border-b border-gray-400/50 pb-10">
        <div className="footer-col-1 col-span-2 gap-3 sm:gap-5 flex flex-col">
          <p className="text-xl text-gray-600 font-medium hover:text-green-500 duration-300">
            Divine Beauty
          </p>
          <p>
            Our beauty parlor offers exceptional services tailored to your
            needs. Our skilled professionals use top-quality products and
            techniques to deliver a unique and personalized experience.
          </p>
          <Link
            href=""
            className="text-rose-500 font-medium hover:text-rose-600 duration-300"
          >
            divinebeauty@gmail.com
          </Link>
        </div>
        <div className="footer-col-2 col-span-1 gap-1 sm:gap-3 flex flex-col">
          <p className="text-lg text-gray-600 font-medium">About</p>
          <Link href="" className="hover:text-green-500 duration-300">
            About Us
          </Link>
          <Link href="" className="hover:text-green-500 duration-300">
            Packages
          </Link>
          <Link href="" className="hover:text-green-500 duration-300">
            Contact
          </Link>
        </div>

        <div className="footer-col-3 col-span-1 gap-1 sm:gap-3 flex flex-col">
          <p className="text-lg text-gray-600 font-medium">Product</p>
          <Link href="" className="hover:text-green-500 duration-300">
            New arrival
          </Link>
          <Link href="" className="hover:text-green-500 duration-300">
            Discount
          </Link>
          <Link href="" className="hover:text-green-500 duration-300">
            Customize
          </Link>
        </div>
        <div className="footer-col-4 col-span-1 gap-1 sm:gap-3 flex flex-col">
          <p className="text-lg text-gray-600 font-medium">Company</p>
          <Link href="" className="hover:text-green-500 duration-300">
            Our team
          </Link>
          <Link href="" className="hover:text-green-500 duration-300">
            Partner With Us
          </Link>
          <Link href="" className="hover:text-green-500 duration-300">
            Blog
          </Link>
          <Link href="" className="hover:text-green-500 duration-300">
            Article
          </Link>
        </div>
        <div className="footer-col-5 col-span-1 gap-3 flex flex-col">
          <p className="text-lg text-gray-600 font-medium">Social media</p>
          <div className="social-links flex gap-3">
            <div className="icon-circle  w-7 rounded-full h-7 items-center justify-center flex bg-gray-200 hover:bg-green-100 hover:text-green-500 duration-300">
              <FaFacebookF className="mx-auto" />
            </div>
            <div className="icon-circle  w-7 rounded-full h-7 items-center justify-center flex bg-gray-200 hover:bg-green-100 hover:text-green-500 duration-300">
              <FaInstagram className="mx-auto" />
            </div>
            <div className="icon-circle  w-7 rounded-full h-7 items-center justify-center flex bg-gray-200 hover:bg-green-100 hover:text-green-500 duration-300">
              <FaLinkedinIn className="mx-auto" />
            </div>
            <div className="icon-circle  w-7 rounded-full h-7 items-center justify-center flex bg-gray-200 hover:bg-green-100 hover:text-green-500 duration-300">
              <FaTwitter className="mx-auto" />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright container mx-auto text-sm sm:text-lg py-6 flex gap-5 justify-between">
        <p className="hover:text-green-500 duration-300">
          {" "}
          &copy; {new Date().getFullYear()} Divine-Beauty
        </p>
        <div className="flex gap-5">
          <Link href="" className="hover:text-green-500 duration-300">
            Privacy Policy
          </Link>

          <Link href="" className="hover:text-green-500 duration-300">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
