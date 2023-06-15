import Link from "next/link";
import Gallery1 from "./Gallery1";
import Gallery2 from "./Gallery2";
import Gallery3 from "./gallery3";

const Case = () => {
  const image1 = [
    {
      id: "1",
      link: "https://res.cloudinary.com/dcvvwskjo/image/upload/v1686765595/divine-beauty/gallery/pexels-photo-3993324_eggwfw.jpg",
      title: "Elegant Evening Gown",
      alt: "Elegant Evening Gown",
    },
    {
      id: "2",
      link: "https://res.cloudinary.com/dcvvwskjo/image/upload/v1686765595/divine-beauty/gallery/pexels-photo-3985344_frkcrx.jpg",
      title: "Designer Handbag",
      alt: "Designer Handbag",
    },
    {
      id: "3",
      link: "https://res.cloudinary.com/dcvvwskjo/image/upload/v1686765594/divine-beauty/gallery/pexels-photo-3757942_mtyjjt.jpg",
      title: "Statement Necklace",
      alt: "Statement Necklace",
    },
    {
      id: "4",
      link: "https://res.cloudinary.com/dcvvwskjo/image/upload/v1686765594/divine-beauty/gallery/pexels-photo-5069407_vhfjaa.jpg",
      title: "Stiletto Heels",
      alt: "Stiletto Heels",
    },
  ];

  const image2 = [
    {
      id: "5",
      link: "https://res.cloudinary.com/dcvvwskjo/image/upload/v1686765594/divine-beauty/gallery/pexels-photo-6560277_jyodkt.jpg",
      title: "Chic Sunglasses",
      alt: "Chic Sunglasses",
    },
    {
      id: "6",
      link: "https://res.cloudinary.com/dcvvwskjo/image/upload/v1686765594/divine-beauty/gallery/pexels-photo-7984818_vpi3on.jpg",
      title: "Classic Red Lipstick",
      alt: "Classic Red Lipstick",
    },
    {
      id: "7",
      link: "https://res.cloudinary.com/dcvvwskjo/image/upload/v1686765594/divine-beauty/gallery/pexels-photo-5240341_y2qd82.jpg",
      title: "Bohemian Maxi Dress",
      alt: "Bohemian Maxi Dress",
    },
    {
      id: "8",
      link: "https://res.cloudinary.com/dcvvwskjo/image/upload/v1686765822/divine-beauty/gallery/pexels-borko-manigoda-1778412_zugxjp.jpg",
      title: "Elegant Pearl Earrings",
      alt: "Elegant Pearl Earrings",
    },
  ];

  const image3 = [
    {
      id: "9",
      link: "https://res.cloudinary.com/dcvvwskjo/image/upload/v1686765595/divine-beauty/gallery/pexels-photo-3865827_hf1rh2.jpg",
      title: "Luxurious Silk Scarf",
      alt: "Luxurious Silk Scarf",
    },
    {
      id: "10",
      link: "https://res.cloudinary.com/dcvvwskjo/image/upload/v1686765594/divine-beauty/gallery/pexels-photo-6560277_jyodkt.jpg",
      title: "Designer Watch",
      alt: "Designer Watch",
    },
    {
      id: "11",
      link: "https://res.cloudinary.com/dcvvwskjo/image/upload/v1686765822/divine-beauty/gallery/pexels-borko-manigoda-1778412_zugxjp.jpg",
      title: "Luxurious Silk Scarf",
      alt: "Luxurious Silk Scarf",
    },
    {
      id: "12",
      link: "https://res.cloudinary.com/dcvvwskjo/image/upload/v1686765595/divine-beauty/gallery/pexels-photo-3993324_eggwfw.jpg",
      title: "Designer Watch",
      alt: "Designer Watch",
    },
  ];

  return (
    <div className="mt-20">
      <div className="section-title flex flex-col items-center">
        <h2 className=" text-lg uppercase text-green-500/80 font-normal tracking-widest">
          {"LET'S SEE"}
        </h2>
        <p className=" mt-1 text-5xl font-extralight text-gray-500">
          Case Study of divine beauty
        </p>
        <Link
          href="/packages"
          className="uppercase mt-2 tracking-widest cursor-pointer text-lg text-green-500/80"
        >
          Shop Now ►
        </Link>
      </div>
      <div className="image-wraper">
        <div className="image1 container mx-auto flex justify-between items-center sm:gap-12 gap-2">
          {image1.map((item) => (
            <Gallery1 key={item.id} item={item} className="" />
          ))}
        </div>
        <div className="image2 container mx-auto flex justify-between items-center sm:gap-12 gap-2">
          {image2.map((item) => (
            <Gallery2 key={item.id} item={item} />
          ))}
        </div>
        <div className="image3 container mx-auto flex justify-between items-center sm:gap-12 gap-2">
          {image3.map((item) => (
            <Gallery3 key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Case;
