import Location from "../src/assets/Cash Pin Map--Streamline-Ultimate (1).png";
import Phone from "../src/assets/Phone Actions Receive--Streamline-Ultimate.png";
import Email from "../src/assets/Envelope--Streamline-Ultimate.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Blur from "../src/assets/a.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rrzocqx",
        "template_qa7kdo1",
        form.current,
        "RpLOrBViuVoEGKlBL"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("An error occurred. Please try again.");
        }
      );
  };

  return (
   <div className="text-white bg-[#0F0F0F] p-8 min-h-screen">
  <img
    src={Blur}
    alt="Blur effect"
    className="absolute scale-z-75 pointer-events-none top-0 right-0 left-0 mask-radial-from-0 -mt-[650px]"
  />

  <hr className="text-[#A1CDFF1A] ml-8 mr-8" />

  <div className="flex flex-col lg:flex-row pt-16 justify-around gap-10">
    {/* FORM SIDE */}
    <div className="bg-[#EAF4FF08] p-12 border-1 rounded-2xl border-[#A1CDFF14] w-full lg:w-[700px]">
      <form ref={form} onSubmit={sendEmail}>
        <p className="text-3xl font-semibold pb-3">Let's Connect !</p>
        <p className="pb-4">
          Have a question, collaboration idea, or just want to say hello? <br />
          Feel free to reach out and I’ll get back to you as soon as possible.
        </p>
        <div className="flex flex-col mt-12">
          <div className="flex flex-col md:flex-row md:space-x-20">
            <input
              required
              name="from_name"
              type="text"
              placeholder="Full Name"
              className="border-[#A1CDFF1A] border-b-1 pt-5 pb-5 pl-2 mb-4 w-full md:w-[250px]"
            />
            <input
              required
              name="reply_to"
              type="email"
              placeholder="Email"
              className="border-[#A1CDFF1A] border-b-1 pt-5 pb-5 pl-2 mb-4 w-full md:w-[250px]"
            />
          </div>
          <input
            required
            name="message"
            placeholder="Message"
            className="border-[#A1CDFF1A] border-b-1 pt-5 pb-5 pl-2 mb-4 w-full"
          />
          <button
            type="submit"
            className="bg-[#1E8BF2] mt-4 rounded-xl w-[180px] h-[40px] font-semibold"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>

    {/* CONTACT INFO SIDE */}
    <div className="w-full lg:w-auto">
      <p className="text-2xl font-semibold pb-4">Ways to Reach Me</p>
      <p>
        I'm available across multiple channels. Feel <br />
        free to connect however it suits you best.
      </p>
      <div className="mt-4 border-b border-b-[#55A4FF] p-2">
        <a
          href="https://maps.app.goo.gl/gDqYRgsN18RdwNTS9"
          className="hover:font-semibold hover:text-blue-300 flex flex-row space-x-4"
        >
          <p>Location</p>
          <img src={Location} alt="Location Icone" />
          <p>Algiers, Algeria</p>
        </a>
      </div>
      <div className="mt-4 border-b border-b-[#55A4FF] p-2">
        <a
          href="mailto:berbicheaymen@gmail.com"
          className="flex flex-row space-x-3 hover:font-semibold hover:text-blue-300"
        >
          <p>Email</p>
          <img src={Email} alt="Email Icone" />
          <p>berbicheaymen@gmail.com</p>
        </a>
      </div>
      <div className="mt-4 border-b border-b-[#55A4FF] p-2 hover:text-blue-300 hover:font-semibold">
        <a href="tel:+2130658830028" className="flex flex-row space-x-3">
          <p>Phone</p>
          <img src={Phone} alt="Phone Icone" />
          <p>+2136588300028</p>
        </a>
      </div>
    </div>
  </div>

  <hr className="text-[#A1CDFF1A] mt-10 ml-8 mr-8" />
  <div className="flex justify-center items-center mt-8">
    <p>Made By Aymen &copy; {new Date().getFullYear()}</p>
  </div>
</div>

  );
};

export default Contact;
