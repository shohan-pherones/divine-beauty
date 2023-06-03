import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero-section mt-20 relative h-[calc(100vh-5rem)] overflow-hidden bg-[#ece8e0]">
      <div className="detals  w-44 sm:w-80 md:w-[32rem] xl:w-[850px] 2xl:w-[65rem] absolute top-[10%] -translate-x-1 left-1/2 translate-y-1 sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
        <h1 className="text-center text-3xl md:text-5xl   xl:text-7xl 2xl:text-8xl font-[400]  leading-tight  lg:text-6xl lg:leading-tight  md:leading-tight ">
          Grow up your skin with the power of natural product.
        </h1>
      </div>

      <div className="hero-wraper h-full container mx-auto grid grid-cols-2">
        <div className="">
          <div className="left col-span-1 flex flex-col h-full justify-between">
            <div className="img1 h-[23rem] xl:w-[300px] xl:h-[320px] overflow-hidden lg:w-[250px] lg:h-[350px] md:w-[220px] 2xl:h-[25rem]">
              <Image
                priority
                src="https://res.cloudinary.com/dcvvwskjo/image/upload/v1682880388/divine-beauty/collection-natural-products_njrdws.jpg"
                alt="hero image 1"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-[65%] sm:top-[58%] xl:top-[55%] left-[6%] 2xl:left-[15%] ">
              <div className="w-10 h-10 lg:w-16 lg:h-16 flex justify-center items-center  bg-transparent absolute rounded-full border-2 border-r-transparent border-green-500/80  ">
                <span className="h-1 w-1 sm:h-3 sm:w-3 rounded-full bg-green-500 "></span>
                <Link
                  href="/packages"
                  className="absolute w-40 lg:w-52 text-sm lg:text-md sm:text-xl font-extralight left-[90%] z-10 "
                >
                  Browse our craft
                </Link>
              </div>
            </div>

            <div className="img2 w-[8rem]  xl:w-[300px] xl:h-[200px] lg:w-[250px] md:w-[220px] 2xl:h-[18rem]  overflow-hidden">
              <Image
                priority
                src="https://res.cloudinary.com/dcvvwskjo/image/upload/v1682897905/divine-beauty/young-woman-with-cosmetic-mask-her-face-makes-selfie-smartphone_duygrf.jpg"
                alt="hero image 2"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="right col-span-1  flex justify-end items-end">
          <div className="img3 h-[25rem] lg:h-[40rem] xl:h-[35rem] 2xl:w-[40rem] 2xl:h-[45rem] end-0 overflow-hidden">
            <Image
              priority
              src="https://res.cloudinary.com/dcvvwskjo/image/upload/v1682883884/divine-beauty/girl-with-face-mask_2_s9b8jj.jpg"
              alt="hero image 3"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="btn1 absolute bottom-[12%] left-1/2 -translate-x-1/2 ">
        <Link
          href="/about"
          className=" w-32 text-md lg:w-48 py-3 px-2  text-center lg:text-2xl font-extralight  bg-transparent border border-green-500/80  rounded-2xl shadow-lg hover:shadow-none md:w-36 md:text-lg"
        >
          Learn More ➟
        </Link>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <div className="">
            <div className="btn1 absolute top-60 left-[220px] xl:top-[450px] xl:left-72 sm:flex justify-center items-center cursor-pointer lg:top-[400px] lg:left-28 md:bottom-60 md:left-24 md:top-96">
              <div className="w-8 h-8 sm:w-16 sm:h-16 flex justify-center items-center bg-transparent absolute rounded-full border-2 border-r-transparent border-green-500/80  ">
                <span className="h-1 w-1 sm:h-3 sm:w-3 rounded-full bg-green-500 "></span>
              </div>
              <Link
                href="/packages"
                className="absolute w-52 text-md sm:text-xl font-extralight left-4 z-10 "
              >
                Browse our craft
              </Link>
            </div>
          </div> */
}
