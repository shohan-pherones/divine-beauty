import Hero from "@/components/Hero";

import { getAllPackages } from "@/prisma/packages";
import PackageItem from "@/components/PackageItem";
import PackagesSection from "@/components/PackagesSection";

const HomePage = ({ packages }) => {
  return (
    <div>
      <Hero />
      <PackagesSection packages={packages} />
    </div>
  );
};

export default HomePage;

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
