import PackageItem from "@/components/PackageItem";
import { getAllPackages } from "@/prisma/packages";

const Packages = ({ packages }) => {
  return (
    <div className="packages mt-24 wrapper">
      <h1 className="text-4xl text-green-500/60 text-center font-semibold ">
        Browse all Packages
      </h1>
      <hr className="mt-5" />
      <div className="packages-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8 items-center">
        {packages &&
          packages?.map((pkg) => <PackageItem key={pkg.id} pkg={pkg} />)}
      </div>
    </div>
  );
};

export default Packages;

/* DO NOT TOUCH THESE CODES */
export const getStaticProps = async () => {
  const packages = await getAllPackages();

  const updatedPackages = packages.map((pkg) => ({
    ...pkg,
    updatedAt: pkg.updatedAt.toString(),
    createdAt: pkg.createdAt.toString(),
  }));

  return {
    props: {
      packages: updatedPackages,
    },
  };
};
/* DO NOT TOUCH THESE CODES */
