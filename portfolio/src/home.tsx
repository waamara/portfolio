import React from 'react';
import Blur from "../src/assets/a.png";
import Pic from "../src/assets/VideoCapture_20250725-194611.jpg";
import Bg from "../src/assets/Mask Group.png";
import Me from "../src/assets/IMG_7000.jpg";
import Pointimg from "../../portfolio/src/assets/Pulsating animation.gif";
import Githubi from "../src/assets/Overlay+Shadow (4).png";
import Emaili from "../src/assets/Overlay+Shadow (5).png";
import Linkdini from "../src/assets/Overlay+Shadow (1).png";
import Views from "../../portfolio/src/assets/Mac Studio 1.png";
import Arrow from "../src/assets/Arrow 1.png";
import TiltedCard from "./components/TiltedCard";
import Stack from "./components/Stack";
import testimonials from "./testemonial";
import TextType from '../src/components/TextType';
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-white flex flex-col bg-[#0F0F0F] p-4 sm:p-6 md:p-8 overflow-x-hidden">
      <img
        src={Blur}
        alt="Blur effect"
        className="absolute top-0 left-0 w-full pointer-events-none -mt-[650px] z-0"
      />

      <hr className="text-[#A1CDFF1A] my-4" />

      <div className="flex flex-col md:flex-row">
        <div className="p-10 flex flex-col">
          <TiltedCard
            imageSrc={Me}
            altText="Aymen Berbiche"
            captionText="Aymen Berbiche - Software Engineer"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="365px"
            imageWidth="300px"
            rotateAmplitude={15}
            scaleOnHover={1.05}
            showTooltip={true}
            displayOverlayContent={false}
          />

          <div className='flex flex-row justify-center text-center mt-8 pb-4 bg-[#EAF4FF08] border-[1px] border-[#A1CDFF14] rounded-2xl'>
            <div className="mt-4 rounded-md flex flex-row text-center justify-center items-center">
              <img src={Pointimg} alt="icone" className="w-4 h-4 rounded-full" />
              <p className="text-xl pl-8 font-semibold">Available For Work</p>
            </div>
          </div>
        </div>

        <div className="pt-10 pl-4 flex flex-col">
          <div className="bg-[#EAF4FF08] p-8 pr-16 rounded-2xl border-[#A1CDFF1A] border-[1px]">
            <p className="text-3xl font-semibold">Introduction</p> <br />
            <p>Hola amigos! Aymen here — Full-stack dev, CS graduate, and Bioinformatics Master’s Student. <br />
              I dream in code, live in VS Code, and break stuff just to fix it better. <br />
              Fun fact: I wanted to be a doctor… <br /> but turns out debugging is more fun than diagnosing.
            </p>
            <TextType
              text={["“ user-friendly web applications using the latest “"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="inline-block whitespace-pre-wrap ml-1 opacity-100 text-[#55A4FF] mt-2"
            />
          </div>

          <div className='flex flex-col'>
            <div className='flex flex-row items-center justify-between pt-4'>
              <p className="font-semibold text-3xl mb-4">Get In Touch</p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="https://github.com/waamara" className="w-full md:w-[230px] h-[130px] rounded-2xl bg-[#EAF4FF08] border-[1px] hover:bg-transparent hover:pl-6 border-[#A1CDFF14] transition-all">
                <img src={Githubi} alt="Github icon" className="-mt-3 -ml-2" />
                <p className="pl-4 pt-2">Follow On Github</p>
              </a>
              <a href="mailto:berbicheaymen@gmail.com" className="w-full md:w-[230px] h-[130px] rounded-2xl bg-[#EAF4FF08] border-[1px] hover:bg-transparent hover:pl-6 border-[#A1CDFF14] transition-all">
                <img src={Emaili} alt="Email icon" className="-mt-3 -ml-2" />
                <p className="pl-4 pt-2">Follow On Email</p>
              </a>
              <a href="https://www.linkedin.com/in/aymen-berbiche-772a13280/" className="w-full md:w-[230px] h-[130px] rounded-2xl bg-[#EAF4FF08] border-[1px] hover:bg-transparent hover:pl-6 border-[#A1CDFF14] transition-all">
                <img src={Linkdini} alt="Linkedin icon" className="-mt-3 -ml-2" />
                <p className="pl-4 pt-2">Follow On Linkedin</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="text-[#A1CDFF1A] my-6" />

      <div className="flex flex-col md:flex-row w-full">
        <div className="m-4 md:m-10 items-center justify-center bg-[#C2F6FF08] border border-[#A1CDFF14] rounded-2xl w-full md:w-[570px]">
          <p className="text-2xl text-center pt-4">View All Works</p>
          <img src={Views} alt="Works preview" className="h-[300px] mx-auto" />
        </div>

        <div className="flex flex-col p-6 mt-3 rounded-2xl w-full md:w-[500px]">
          <p className="text-3xl mb-2">Testimonial</p>
          <p className="mb-3 text-[#CFCFCF]">About 40% of what you do, day in and day out, is done purely out of ha</p>
          <a href="https://www.linkedin.com/in/aymen-berbiche-772a13280/" className="text-[#55A4FF] mb-4 flex flex-row text-center gap-2 items-center border-b-[1px] w-[170px]">More on my LinkedIn <img src={Arrow} alt="arrow" className="w-[10px] h-[10px]" /></a>
          <Stack
            randomRotation={false}
            sensitivity={10}
            sendToBackOnClick={false}
            cardDimensions={{ width: 500, height: 250 }}
            cardsData={testimonials}
          />
        </div>
      </div>

      <hr className="text-[#A1CDFF1A] my-6" />

      <div className="flex flex-col md:flex-row justify-around gap-6 w-full">
        <div
          style={{ backgroundImage: `url(${Bg})` }}
          className="bg-no-repeat flex flex-col md:flex-row p-6 mt-10 items-center justify-center space-x-0 md:space-x-8 border-[#A1CDFF14] bg-[#EAF4FF08] border-[1px] rounded-2xl w-full md:w-[680px]"
        >
          <img src={Pic} alt="My pic" className="h-[220px] rounded-2xl mb-4 md:mb-0" />
          <div className="ml-0 md:ml-4">
            <p className="text-2xl mt-2 mb-2 text-center md:text-left">What makes technology <br className="hidden md:block" /> so habit-forming?</p>
            <p className="text-[#CFCFCF] text-center md:text-left">Technology becomes habit-forming because it taps into core psychological triggers that affect how we think, feel, and behave.</p>
            <div className="flex flex-wrap gap-3 mt-2 justify-center md:justify-start">
              {['Go', 'Express js', 'Next Js', 'Api', 'Django'].map((tech, i) => (
                <div key={i} className="border border-[#A1CDFF14] p-1.5 px-2 bg-[#3F82FF1C] text-[#55A4FF] rounded-xl">
                  <p>{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col p-6 mt-10 items-center justify-center text-center w-full md:w-[400px] border border-[#A1CDFF14] bg-[#EAF4FF08] rounded-2xl">
          <p className="text-3xl font-semibold pb-4">Let's Create Something <br /> Great Together!</p>
          <p>Feel free to reach out anytime you have a project idea.</p>
          <NavLink to="/contact" className="hover:font-semibold hover:text-white mt-8 text-[#55A4FF] flex pb-1 flex-row space-x-3 items-center border-b border-[#55A4FF]">
            <p>Reach out</p>
            <img src={Arrow} alt="Arrow icon" className="w-3 h-3" />
          </NavLink>
        </div>
      </div>

      <hr className="text-[#A1CDFF1A] mt-10" />

      <div className="flex justify-center items-center mt-8">
        <p>Made By Aymen &copy; {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Home;
