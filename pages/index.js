import { EcoFriendly } from "@/components/EcoFriendly";
import Hero from "@/components/Hero";

import { getAllPackages } from "@/prisma/packages";

import PackagesSection from "@/components/PackagesSection";

import Case from "@/components/Case";

const HomePage = ({ packages }) => {
  return (
    <div>
      <Hero />
      <PackagesSection packages={packages} />
      <EcoFriendly />
      <Case />
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
