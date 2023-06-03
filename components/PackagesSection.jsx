import Link from "next/link";
import PackageItem from "./PackageItem";

const PackagesSection = ({ packages }) => {
  const slicePackages = packages.slice(0, 6);
  return (
    <div className="wrapper  flex flex-col items-center ">
      <h1 className=" mt-10 text-5xl text-green-500/60 text-center font-semibold uppercase">
        Popular packages
      </h1>

      <div className="packages-wrapper container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8 items-center">
        {slicePackages &&
          slicePackages?.map((pkg) => <PackageItem key={pkg.id} pkg={pkg} />)}
      </div>
      <Link
        href="/packages"
        className="mt-7 text-xl py-3 px-4 font-normal rounded-xl bg-green-500/80 text-white shadow-md hover:bg-green-600"
      >
        View all packages
      </Link>
    </div>
  );
};

export default PackagesSection;
