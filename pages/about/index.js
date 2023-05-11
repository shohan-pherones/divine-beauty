import Image from "next/image";
import { BsClock } from "react-icons/bs";

const bgImg =
  "https://res.cloudinary.com/doo2ywmrb/image/upload/v1683796892/divine-beauty/page-title-3-1920x305_edkdia.jpg";

const image1 =
  "https://res.cloudinary.com/doo2ywmrb/image/upload/v1683794565/divine-beauty/about-us-3_wv71ln.jpg";

const image2 =
  "https://res.cloudinary.com/doo2ywmrb/image/upload/v1683794564/divine-beauty/about-us-1_ehvcob.jpg";

const cardImg1 =
  "https://res.cloudinary.com/doo2ywmrb/image/upload/v1683809841/divine-beauty/team-3-370x370_su3gw8.jpg";
const cardImg2 =
  "https://res.cloudinary.com/doo2ywmrb/image/upload/v1683809941/divine-beauty/gallery-8-1200x800_original_grrmvn.jpg";
const cardImg3 =
  "https://res.cloudinary.com/doo2ywmrb/image/upload/v1683809834/divine-beauty/team-1-370x370_l43kgg.jpg";
const AboutPage = () => {
  return (
    <div className="mt-20 space-y-5">
      <div className="img relative mb-20">
        <h1 className="absolute left-10 top-12 px-5 text-6xl lg:text-8xl font-semibold text-gray-700/20">
          About us
        </h1>
        <Image
          priority
          unoptimized
          src={bgImg}
          loader={() => bgImg}
          alt={"Background img"}
          height={50}
          width={50}
          className="h-[17rem]  w-full object-cover object-center"
        />
      </div>
      <div className="wrapper grid md:grid-cols-2 gap-10">
        <div className="relative mb- lg:mb-36">
          <Image
            priority
            unoptimized
            src={image1}
            loader={() => image1}
            alt={"Background img"}
            height={50}
            width={50}
            className="object-cover object-center h-[17rem] w-full lg:w-[23rem]"
          />

          <Image
            priority
            unoptimized
            src={image2}
            loader={() => image2}
            alt={"Background img"}
            height={50}
            width={50}
            className="h-[17rem]  w-[23rem] object-cover object-center absolute top-36  right-0 hidden lg:block hover:scale-105 duration-300"
          />
        </div>

        <div className="space-x-3 lg:space-y-5 lg:justify-self-end row-start-1 xl:row-auto">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-700">
            Who We Are
          </h1>
          <div className="line mb-4"></div>
          <p>
            Cras ut vestibulum tortor. In in nisi sit amet metus varius pulvinar
            in vitae ipsum nec mi sollicitudin Fusce turpis massa,
          </p>
          <p className="text-gray-400 pb-3">
            In ante sapien, dapibus luctus aliquet a, accumsan sit amet dolor.
            Mauris id facilisis dolor. Donec malesuada, est eu dignissim
            eleifend, est nulla dignissim nisl. Fusce turpis massa, mattis sit.
          </p>
          <div className="flex items-start gap-1">
            <BsClock className="text-green-500/70 text-2xl pt-1" />
            <div>
              <h1 className="text-2xl font-medium text-gray-700">
                Opening Hours
              </h1>
              <p>
                Monday-Friday:
                <span className="text-gray-400"> 8:00am–8:00pm</span>
              </p>
              <p>
                Saturday: <span className="text-gray-400">8:00am–6:00pm</span>
              </p>
              <p>
                Sunday: <span className="text-gray-400">Closed</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 wrapper">
        <div className="titles">
          <h1 className="text-4xl md:text-6xl font-semibold text-gray-700 text-center">
            Our Professional Team
          </h1>
          <div className="w-full flex justify-center py-5">
            <div className="line"></div>
          </div>
          <p className="lg:w-3/5 mx-auto text-gray-400 text-center">
            At our beauty parlor, we take great pride in the quality of service
            that we provide. Our team of beauty professionals is the best in the
            business, and we are dedicated to helping our clients look and feel
            their best.
          </p>
        </div>
        <div className="cards pt-10">
          <div className="grid grid-cols-3 gap-10">
            <div>
              <Image
                priority
                unoptimized
                src={cardImg1}
                loader={() => cardImg1}
                alt={"Background img"}
                height={50}
                width={50}
                className="object-cover object-center h-[22rem] w-full hover:scale-105 duration-300"
              />
              <p className="text-2xl text-center pt-3 text-gray-700 font-medium">
                Candice Marshall
              </p>
              <p className="text-gray-400 text-center">Cosmetologist</p>
            </div>
            <div>
              <Image
                priority
                unoptimized
                src={cardImg2}
                loader={() => cardImg2}
                alt={"Background img"}
                height={50}
                width={50}
                className="object-cover object-center h-[22rem] w-full hover:scale-105 duration-300"
              />
              <p className="text-2xl text-center pt-3 text-gray-700 font-medium">
                Ann Smith
              </p>
              <p className="text-gray-400 text-center">Visagiste</p>
            </div>
            <div>
              <Image
                priority
                unoptimized
                src={cardImg3}
                loader={() => cardImg3}
                alt={"Background img"}
                height={50}
                width={50}
                className="object-cover object-center h-[22rem] w-full hover:scale-105 duration-300"
              />
              <p className="text-2xl text-center pt-3 text-gray-700 font-medium">
                Mary Lucas
              </p>
              <p className="text-gray-400 text-center">
                Founder, Senior Hair Stylist
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
