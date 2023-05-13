import Image from "next/image";
import Link from "next/link";

const PackageItem = ({ pkg }) => {
  return (
    <div className="package w-full flex flex-col gap-5 shadow rounded-md overflow-hidden">
      <div className="img">
        <Image
          priority
          unoptimized
          src={pkg.image}
          alt={pkg.title}
          height={50}
          width={50}
          className="w-full object-cover h-[25rem] rounded-b-md "
        />
        <div className="texts py-3 pb-6 px-5 grid grid-cols-">
          <div className="text grid grid-cols-3 ">
            <h3 className="text-2xl w-full h-16 font-semibold col-span-2">
              {pkg.title}
            </h3>
            <span className="price text-green-500/80 font-semibold text-2xl flex justify-end ">
              {pkg.price?.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </span>
          </div>
          <div className="">
            <p className="text-lg mb-2">
              {pkg.description.substring(0, 120)}...
            </p>
            <span className="text-green-500/60 cursor-pointer">{pkg.tags}</span>
          </div>
          <Link
            href={`/packages/${pkg.id}`}
            className="bg-green-500/80 text-green-50 text-center py-3 rounded uppercase font-medium mt-3 hover:bg-green-600 duration-300 "
          >
            Explore Package
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageItem;
