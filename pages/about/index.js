import Image from "next/image";
import { BsClock } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";

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

const whyDivineBeautyImg =
  "https://res.cloudinary.com/doo2ywmrb/image/upload/v1685351866/divine-beauty/800x700_1_vllysa.jpg";

const sliderImages = [
  {
    id: 1,
    src: "https://res.cloudinary.com/doo2ywmrb/image/upload/v1685469440/divine-beauty/brand-9_anuolf.png",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/doo2ywmrb/image/upload/v1685469428/divine-beauty/brand-8_p1hnma.png",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/doo2ywmrb/image/upload/v1685469429/divine-beauty/brand-7_jxdhjk.png",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/doo2ywmrb/image/upload/v1685469428/divine-beauty/brand-3_1_i3kkus.png",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/doo2ywmrb/image/upload/v1685469428/divine-beauty/brand-5_1_dhede4.png",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/doo2ywmrb/image/upload/v1685469428/divine-beauty/brand-1_tx7th9.png",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/doo2ywmrb/image/upload/v1685469428/divine-beauty/brand-2_nl4dt1.png",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/doo2ywmrb/image/upload/v1685469428/divine-beauty/brand-6_t1x7xx.png",
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/doo2ywmrb/image/upload/v1685469428/divine-beauty/brand-3_oh2ymu.png",
  },
];

const AboutPage = () => {
  return (
    <div className="mt-20 space-y-5 bg-[#f5f0ef]">
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

        <div className="space-x-3 lg:space-y-5 lg:justify-self-end row-start-1 md:row-auto">
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
      <div className="whyDivineBeauty relative z-10">
        <div className=" grid grid-cols-1 md:grid-cols-2 px-10 lg:px-32 xl:pb-20 gap-10 md:pt-24 pb-10">
          <div className="space-y-3 col-span-1">
            <p className="text-[#8e8987] tracking-widest">EMBELLISH YOUR DAY</p>
            <h1 className="text-5xl text-gray-700">Shining Feminine</h1>
            <p className="text-[#8e8987]  text-lg pr-8">
              Our beauty parlor stands out as the best choice for your beauty
              needs due to several key reasons.
            </p>
            <h3 className="text-3xl text-gray-700">Elegance in Every Stroke</h3>
            <ul className="space-y-2 ps-5 text-lg text-[#8e8987] ">
              <li className="list-disc">
                Skilled Artistry: Our beauty professionals possess exceptional
                skills and expertise in their craft.
              </li>
              <li className="list-disc">
                Hygiene and Cleanliness: We prioritize hygiene and cleanliness
                in our beauty parlor. We adhere to strict sanitization protocols
                and maintain a clean and safe environment for our customers.
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <Image
              priority
              unoptimized
              src={whyDivineBeautyImg}
              loader={() => whyDivineBeautyImg}
              alt={"whyDivineBeauty"}
              height={500}
              width={500}
              className="object-cover object-center h-[27rem] w-full"
            />
          </div>
        </div>
      </div>

      <div className="pb-10 sm:py-16">
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          parallax={true}
          className="mySwiper"
        >
          {sliderImages.map((image) => (
            <SwiperSlide key={image.id}>
              <div>
                <Image
                  priority
                  unoptimized
                  src={image.src}
                  loader={() => image.src}
                  alt={"Background img"}
                  height={200}
                  width={200}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AboutPage;
