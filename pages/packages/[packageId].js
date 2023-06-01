import AppoinmentForm from "@/components/AppoinmentForm";
import { getAPackage } from "@/prisma/packages";
import { formatCurrency } from "@/utils/formatCurrency";
import { useState } from "react";

const PackageDetails = ({ singlePackage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleAppointment = () => {
    setIsModalOpen(true);
    setIsOverlayOpen(true);
  };

  const handleOverlay = () => {
    setIsModalOpen(false);
    setIsOverlayOpen(false);
  };

  return (
    <div className="pt-20 grid grid-cols-1 md:grid-cols-2 gap-10 wrapper">
      <div className="flex flex-col gap-5 justify-center ">
        <p className="text-5xl">{singlePackage.title}</p>
        <p className="text-lg">{singlePackage.description}</p>
        <div className="flex gap-16 justify-between">
          <p className=" text-[#6dc9c9]  hover:text-[#60a5a5] duration-300">
            {singlePackage.tags}
          </p>
          <p className="text-red-400 hover:text-red-600 duration-300 font-medium text-lg">
            <span className="text-black">Price: </span>
            {formatCurrency(singlePackage.price)}
          </p>
        </div>

        <button
          onClick={handleAppointment}
          className="lg:text-lg py-2 px-4 rounded-2xl uppercase  text-green-500 bg-green-100 duration-300 hover:bg-green-500 hover:text-gray-50 text-lg mt-5"
        >
          get appointment
        </button>

        {/* overlay */}

        <div
          onClick={handleOverlay}
          className={`overlay fixed z-[1000] h-screen w-screen bg-gray-400/50 backdrop-blur-sm top-0 left-0 right-0 bottom-0 ${
            isOverlayOpen ? "" : "hidden"
          }`}
        ></div>

        {/* modal */}
        <div
          className={`modal w-full p-5 sm:w-[30rem] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white py-5 px-10 rounded-xl border h-[30rem]  z-[1001] ${
            isModalOpen ? "" : "hidden"
          }`}
        >
          <AppoinmentForm
            setIsModalOpen={setIsModalOpen}
            setIsOverlayOpen={setIsOverlayOpen}
          />
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${singlePackage.image})` }}
        className="h-[calc(100vh-5rem)] md:bg-contain bg-no-repeat  bg-cover bg-center row-start-1 md:row-auto"
      ></div>
    </div>
  );
};

export default PackageDetails;

export const getServerSideProps = async ({ query }) => {
  const singlePackage = await getAPackage(query.packageId);

  const updatedPackage = {
    ...singlePackage,
    updatedAt: singlePackage.updatedAt.toString(),
    createdAt: singlePackage.createdAt.toString(),
  };

  return {
    props: {
      singlePackage: updatedPackage,
    },
  };
};
