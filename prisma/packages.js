import prisma from "./prisma";

// GET ALL PACKAGES
export const getAllPackages = async () => {
  const packages = await prisma.package.findMany({});
  return packages;
};

// GET A SINGLE PACKAGE
export const getAPackage = async (id) => {
  const singlePackage = await prisma.package.findUnique({
    where: { id },
  });
  return singlePackage;
};
