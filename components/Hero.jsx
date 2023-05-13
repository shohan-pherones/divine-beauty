import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-section mt-20 relative h-[calc(100vh-5rem)] overflow-hidden bg-[#ece8e0]">
      <div className="detals w-44 xl:w-[850px]  absolute left-[200px] top-28  md:top-40 xl:left-[580px] lg:w-[600px]  lg:left-[300px] md:w-[300px] md:left-72">
        <h1 className=" text-xl  xl:text-8xl font-[400]  leading-tight  lg:text-6xl lg:leading-tight md:text-4xl md:leading-tight ">
          Grow up your skin with the power of natural product.
        </h1>
      </div>

      <div className="hero-wraper h-full container mx-auto grid grid-cols-2">
        <div className="left col-span-1 flex flex-col h-full justify-between">
          <div className="img1 xl:w-[300px] xl:h-[400px] overflow-hidden lg:w-[250px] lg:h-[350px] md:w-[220px]">
            <Image
              priority
              src="https://res.cloudinary.com/dcvvwskjo/image/upload/v1682880388/divine-beauty/collection-natural-products_njrdws.jpg"
              alt="hero image 1"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="img2 xl:w-[300px] lg:w-[250px] md:w-[220px]  overflow-hidden">
            <Image
              priority
              src="https://res.cloudinary.com/dcvvwskjo/image/upload/v1682897905/divine-beauty/young-woman-with-cosmetic-mask-her-face-makes-selfie-smartphone_duygrf.jpg"
              alt="hero image 2"
              width={500}
              height={500}
              className="w-full h-full object-cover hidden sm:block"
            />
          </div>
        </div>

        <div className="right col-span-1  flex justify-end items-end">
          <div className="img3 xl:w-[600px] xl:h-[700px] lg:w-[350px] md:w-[330px] end-0 overflow-hidden">
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

      <div className="hidden sm:block">
        <div className="btn1 absolute top-60 left-[220px] xl:top-[450px] xl:left-72 sm:flex justify-center items-center cursor-pointer lg:top-[400px] lg:left-28 md:bottom-60 md:left-24 md:top-96">
          <div className="w-8 h-8 sm:w-16 sm:h-16 flex justify-center items-center bg-transparent absolute rounded-full border-2 border-r-transparent border-green-500/80  ">
            <span className="h-1 w-1 sm:h-3 sm:w-3 rounded-full bg-green-500 "></span>
          </div>
          <p className="absolute w-52 text-md sm:text-xl font-extralight left-4 z-10 ">
            Browse our craft
          </p>
        </div>
      </div>

      <div className="btn1 absolute bottom-28 left-8 xl:bottom-[100px] xl:left-[800px]  cursor-pointer  lg:bottom-[50px] lg:left-[450px] md:left-[280px] md:bottom-16  ">
        <p className=" w-32 text-md lg:w-48 py-3 px-2  text-center lg:text-2xl font-extralight  bg-transparent border border-green-500/80  rounded-2xl shadow-lg hover:shadow-none md:w-36 md:text-lg">
          Learn More ➟
        </p>
      </div>
    </div>
  );
};

export default Hero;
