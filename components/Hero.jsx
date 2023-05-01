import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-section relative h-[calc(100vh-5rem)] overflow-hidden bg-[#ece8e0]">
      <div className="detals w-[850px] absolute  z-10 top-40 left-[550px]">
        <h1 className="text-8xl font-[400]  leading-tight">
          Grow up your skin with the power of natural product.
        </h1>
      </div>

      <div className="hero-wraper h-full container mx-auto grid grid-cols-2">
        <div className="left col-span-1 flex flex-col h-full justify-between">
          <div className="img1 w-[300px] h-[400px] overflow-hidden">
            <Image
              priority
              src="https://res.cloudinary.com/dcvvwskjo/image/upload/v1682880388/divine-beauty/collection-natural-products_njrdws.jpg"
              alt="hero image 1"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="img2 w-[300px] overflow-hidden">
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

        <div className="right col-span-1  flex justify-end items-end">
          <div className="img3 w-[600px] h-[700px] end-0 overflow-hidden">
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

      <div className="btn1 absolute top-[510px] left-72 flex justify-center items-center cursor-pointer">
        <div className="w-16 h-16 flex justify-center items-center bg-transparent absolute rounded-full border-2 border-r-transparent border-green-500/80 ">
          <span className="h-3 w-3 rounded-full bg-green-500"></span>
        </div>
        <p className="absolute w-52 text-xl font-extralight left-4 z-10 ">
          Browse our craft
        </p>
      </div>

      <div className="btn1 absolute bottom-[100px] left-[800px]  cursor-pointer">
        <p className=" w-48 py-3 px-2  text-center text-2xl font-extralight  bg-transparent border border-green-500/80  rounded-2xl shadow-lg hover:shadow-none">
          Learn More ➟
        </p>
      </div>
    </div>
  );
};

export default Hero;
