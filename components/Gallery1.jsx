import Image from "next/image";

const Gallery1 = ({ item }) => {
  console.log(item);
  return (
    <div className="">
      <Image
        src={item.link}
        alt={item.alt}
        width={400}
        height={200}
        className="w-50 h-50 grayscale hover:grayscale-0 duration-300"
      />
      <p className="text-center mt-2 text-xl cursor-pointer">{item.title}</p>
    </div>
  );
};

export default Gallery1;
