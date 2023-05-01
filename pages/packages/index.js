import { getAllPackages } from "@/prisma/packages";

const Packages = ({ packages }) => {
  return <div>Packages</div>;
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
