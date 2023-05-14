import { useState } from "react";
import emailjs from "emailjs-com";
import { MdLocationPin } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { BiEnvelope } from "react-icons/bi";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  function handleFromData(e) {
    e.preventDefault();

    emailjs.send(
      "service_vws1ni2",
      "template_c358gi7",
      {
        name,
        email,
        subject,
        message,
      },
      "zGEImd1SMam0-1Qc6"
    );
    setSuccess("Your message is sent !");
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }
  return (
    <div className="mt-20 mx-auto w-[80%]">
      <div>
        <h1 className="text-center py-10 text-5xl ">Contact us</h1>
      </div>
      <div className="form flex justify-around">
        <div className="flex-1 justify-center items-center">
          <form
            className="flex flex-col py-16 px-20 bg-green-100 gap-3 "
            onSubmit={handleFromData}
          >
            <label htmlFor="name">
              Your Name
              <span className="text-rose-600 font-semibold text-lg">*</span>
              <span className="text-rose-600 font-semibold text-lg">*</span>
            </label>
            <input
              required
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-green-600 rounded-sm py-2 px-2 focus:outline-1 focus:outline-green-600"
            />
            <label htmlFor="email">
              Your Email
              <span className="text-rose-600 font-semibold text-lg">*</span>
            </label>
            <input
              required
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-green-600 rounded-sm py-2 px-2 focus:outline-1 focus:outline-green-600"
            />
            <label htmlFor="subject">
              Subject
              <span className="text-rose-600 font-semibold text-lg">*</span>
            </label>
            <input
              required
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="border border-green-600 rounded-sm py-2 px-2 focus:outline-1 focus:outline-green-600"
            />
            <label htmlFor="message">Write Your Message</label>
            <textarea
              type="text"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-green-600 rounded-sm py-2 px-2 focus:outline-1 focus:outline-green-600"
            />
            <input
              type="submit"
              value="send"
              className="bg-green-500 text-green-50 uppercase py-2 mt-4 rounded-md "
            />
            <p className="h-8 flex items-center justify-end text-green-500">
              {success}
            </p>
          </form>
        </div>

        <div className="flex-1 flex justify-center bg-green-500">
          <div className=" text-green-50  flex flex-col justify-center gap-6 ">
            <div>
              <h1 className="text-3xl">Found us </h1>
              <p>Discover your beauty destination with Divine Beauty </p>
            </div>
            <div className="icons-section flex flex-col justify-between items-start gap-6">
              <div className="single-icon-div flex items-center gap-3">
                <MdLocationPin className="border-2 border-white rounded-full text-4xl p-1" />
                <p>
                  Mirpur-2, Dhaka <br /> Bangladesh
                </p>
              </div>
              <div className="single-icon-div flex items-center gap-3">
                <AiFillPhone className="border-2 border-white rounded-full text-4xl p-1" />
                <p>
                  <a href="tel:+8801512659875">+8801512659875</a> <br />
                  <a href="tel:+8801589236524">+8801589236524</a>
                </p>
              </div>
              <div className="single-icon-div flex items-center gap-3">
                <BiEnvelope className="border-2 border-white rounded-full text-4xl p-1" />
                <p>
                  <a href="mailto:divinebeauti@gmail.com">
                    divinebeauty@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
