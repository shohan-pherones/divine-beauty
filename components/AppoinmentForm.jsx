import React from "react";

const AppoinmentForm = ({ setIsModalOpen, setIsOverlayOpen }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    setIsOverlayOpen(false);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="space-y-3">
        <h2 className="text-xl pb-3">Get Appointment</h2>
        <div className="from-control">
          <label
            htmlFor="name"
            className="cursor-pointer hover:text-green-400/80 duration-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            className={
              "w-full text-black outline-none border-b border-gray-500 "
            }
            placeholder="inter your name"
          />
        </div>
        <div className="from-control">
          <label
            htmlFor="number"
            className="cursor-pointer hover:text-green-400/80 duration-300"
          >
            Number
          </label>
          <input
            type="tel"
            id="number"
            required
            className={
              "w-full text-black outline-none border-b border-gray-500 "
            }
            placeholder="017xxxxxxxx"
          />
        </div>
        <div className="from-control">
          <label
            htmlFor="email"
            className="cursor-pointer hover:text-green-400/80 duration-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className={
              "w-full text-black outline-none border-b border-gray-500 "
            }
            placeholder="inter your name"
          />
          <p className="text-xs text-gray-500">*valid email address required</p>
        </div>
        <div className="from-control">
          <label
            htmlFor="number"
            className="cursor-pointer hover:text-green-400/80 duration-300"
          >
            How can I help you?
          </label>
          <textarea
            type="text"
            id="message"
            required
            className={
              "w-full text-black outline-none border-b border-gray-500 mb-5 resize-none"
            }
            placeholder="I need help with the following:"
          />
        </div>
        <button className="py-2 px-6 rounded-2xl uppercase text-sm  text-green-500 bg-green-100 duration-300 hover:bg-green-500 hover:text-gray-50">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AppoinmentForm;
