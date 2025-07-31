import Bgimg from "../../portfolio/src/assets/backgr.png";
import Seepng from "../../portfolio/src/assets/see.png";
import Dowlandpng from "../../portfolio/src/assets/dowland.png";
import Mypic from "../../portfolio/src/assets/me.jpg";
import Pointimg from "../../portfolio/src/assets/point.png";
import Foldericone from "../../portfolio/src/assets/folder.png";
import Img from "../../portfolio/src/assets/img.png";
import More from "../../portfolio/src/assets/More.png";
import Fram from "../../portfolio/src/assets/Frame.png";
import Views from "../../portfolio/src/assets/Mac Studio 1.png";
import Myphoto from "../src/assets/1741356507458 1.png";
import Linkdini from "../src/assets/Overlay+Shadow (1).png";
import Githubi from "../src/assets/Overlay+Shadow (4).png";
import Emaili from "../src/assets/Overlay+Shadow (5).png";
import Arrow from "../src/assets/Arrow 1.png";
import Switch from "../src/assets/switch.png";
import Me from "../src/assets/IMG_7000.jpg";
import TiltedCard from "./components/TiltedCard";
import SpotlightCard from "./components/SpotlightCard";
import Stack from "./components/Stack";
import testimonials from "./testemonial";
import Stack1 from "./components/Stack1";
import Ficone from "../src/assets/Icon (1).png";
import Sicone from "../src/assets/Icon (2).png";
import Video from "../src/assets/Rectangle 1927.png";
import CountUp from "../src/components/Countup";
import Gif from "../src/assets/téléchargement.gif";
import { useEffect, useState } from "react";
import OrbitingTools from "./components/OrbitingTools";
import Blur from "../src/assets/a.png";
import Bg from "../src/assets/Image.png";

const tags = ["Frontend Developer", "UI Designer", "Web Enthusiast", "React Lover"];

const AutoTagCarousel = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setIndex((prev) => (prev + 1) % tags.length), 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-row space-x-1.5 mt-2 transition-all duration-700 ease-in-out">
      <div className="bg-[#3F82FF1C] border border-[#A1CDFF14] p-2 rounded-2xl min-w-[200px] text-center">
        <p>{tags[index]}</p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div style={{ backgroundImage: `url(${Bgimg})` }} className="text-white bg-[#0F0F0F] p-4 sm:p-6 md:p-8 overflow-x-hidden">
      <img src={Blur} alt="Blur effect" className="absolute top-0 left-0 w-full pointer-events-none -mt-[650px] z-0" />
      <hr className="text-[#A1CDFF1A] my-4" />

      <div className="flex flex-col md:flex-row">
        <div className="p-4 md:p-10 flex flex-col">
          <TiltedCard
            imageSrc={Me}
            altText="Aymen Berbiche"
            captionText="Aymen Berbiche - Software Engineer"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="345px"
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
          <div className="bg-[#EAF4FF08] p-4 md:p-8 pr-4 md:pr-16 rounded-2xl border-[#A1CDFF1A] border-[1px]">
            <p className="text-3xl font-semibold">About The Developer</p> <br />
            <p className="text-sm md:text-base">A dedicated developer with a solid foundation in both frontend and backend technologies. I specialize in building modern, responsive applications using React and Tailwind CSS on the frontend, and I work with Node.js, Express.js, and PHP on the backend as I continue to grow as a full-stack developer.<br /><br />

            I hold a Bachelor’s degree in Computer Science, and I’m currently pursuing a Master’s degree in Bioinformatics, where I aim to bridge the gap between technology and biological data analysis.<br /><br />

            I'm focused on writing clean, maintainable code and building scalable applications that solve real-world problems.</p>
            <p className="text-xl mt-4">Core Values:</p>
          </div>

          <div className='flex flex-col mt-6'>
            <p className="font-semibold text-3xl mb-4">Get In Touch</p>
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

      <hr className="text-[#A1CDFF1A] mt-10" />
      <div className="flex justify-center items-center mt-8">
        <p>Made By Aymen &copy; {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default About;
