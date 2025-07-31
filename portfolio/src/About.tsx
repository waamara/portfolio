import React from "react";
import Bgimg from "../../portfolio/src/assets/backgr.png";
import Blur from "../src/assets/a.png";
import Me from "../src/assets/IMG_7000.jpg";
import Pointimg from "../src/assets/point.png";
import Githubi from "../src/assets/Overlay+Shadow (4).png";
import Emaili from "../src/assets/Overlay+Shadow (5).png";
import Linkdini from "../src/assets/Overlay+Shadow (1).png";
import Sicone from "../src/assets/Icon (2).png";
import Ficone from "../src/assets/Icon (1).png";
import Gif from "../src/assets/téléchargement.gif";
import OrbitingTools from "./components/OrbitingTools";
import TiltedCard from "./components/TiltedCard";
import CountUp from "../src/components/Countup";

const About = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Bgimg})` }}
      className="relative text-white bg-[#0F0F0F] overflow-x-hidden px-4 sm:px-6 md:px-8 py-8"
    >
      <img
        src={Blur}
        alt="Blur effect"
        className="absolute top-0 left-0 w-full pointer-events-none -mt-[650px] scale-[0.75] z-0"
      />

      <hr className="border-[#A1CDFF1A] my-6" />

      {/* Section 1: Intro + Get in Touch */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="bg-[#EAF4FF08] p-6 rounded-2xl border border-[#A1CDFF14]">
            <p className="text-3xl font-semibold">About The Developer</p>
            <p className="mt-4 text-sm sm:text-base">
              A dedicated developer with a solid foundation in both frontend
              and backend technologies. I specialize in building modern,
              responsive applications using React and Tailwind CSS on the
              frontend, and I work with Node.js, Express.js, and PHP on the
              backend as I continue to grow as a full‑stack developer.<br /><br />
              I hold a Bachelor’s degree in Computer Science, and I’m currently
              pursuing a Master’s degree in Bioinformatics, where I aim to bridge
              the gap between technology and biological data analysis.<br /><br />
              I’m focused on writing clean, maintainable code and building
              scalable applications that solve real‑world problems.
            </p>
            <p className="text-xl mt-4">Core Values:</p>
          </div>

          <div>
            <p className="text-3xl font-semibold mb-4">Get In Touch</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-6">
              {[{
                href: "https://github.com/waamara",
                img: Githubi,
                label: "Follow On Github"
              },
              {
                href: "mailto:berbicheaymen@gmail.com",
                img: Emaili,
                label: "Follow On Email"
              },
              {
                href: "https://www.linkedin.com/in/aymen-berbiche-772a13280/",
                img: Linkdini,
                label: "Follow On Linkedin"
              }].map((item, i) => (
                <a key={i} href={item.href} className="w-full sm:w-[230px] h-[130px] bg-[#EAF4FF08] border border-[#A1CDFF14] rounded-2xl hover:bg-transparent hover:pl-6 transition p-4 flex items-center">
                  <img src={item.img} alt="" className="w-6 h-6 mr-3" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <TiltedCard
            imageSrc={Me}
            altText="Aymen Berbiche"
            captionText="Aymen Berbiche – Software Engineer"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="345px"
            imageWidth="300px"
            rotateAmplitude={15}
            scaleOnHover={1.05}
            showTooltip={true}
            displayOverlayContent={false}
          />
          <div className="mt-8 p-4 bg-[#EAF4FF08] border border-[#A1CDFF14] rounded-2xl flex justify-center w-full max-w-sm">
            <img src={Pointimg} alt="" className="w-4 h-4 mr-2" />
            <p className="text-xl font-semibold">Available For Work</p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="../src/assets/AYMEN BERBICHE.pdf" className="w-full sm:w-[140px] h-[100px] bg-[#EAF4FF08] border border-[#A1CDFF14] rounded-2xl flex flex-col items-center justify-center transition hover:bg-transparent p-4">
              <p className="text-center">See My <br /> Resume</p>
              <img src={Sicone} alt="" className="w-4 h-4 mt-2" />
            </a>
            <a href="../src/assets/AYMEN BERBICHE.pdf" download className="w-full sm:w-[140px] h-[100px] bg-[#EAF4FF08] border border-[#A1CDFF14] rounded-2xl flex flex-col items-center justify-center transition hover:bg-transparent p-4">
              <p className="text-center">Download <br /> Resume</p>
              <img src={Ficone} alt="" className="w-4 h-4 mt-2" />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-[#A1CDFF1A] my-8" />

      {/* Skills & Stats Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="bg-[#C2F6FF08] border border-[#A1CDFF14] rounded-2xl p-6 w-full lg:w-[470px] flex flex-col">
          <div className="space-y-4 text-center">
            <div className="flex justify-center flex-wrap gap-4">
              {["Frontend Developer", "Backend Developer", "Site Optimization", "Database Creation", "UI/UX Design"].map((skill, i) => (
                <div key={i} className="bg-[#3F82FF1C] border border-[#A1CDFF14] p-2 rounded-xl text-sm">
                  {skill}
                </div>
              ))}
            </div>
            <p className="text-4xl font-semibold">Tools & Skills</p>
            <p>Tools that I use to create my web applications</p>
            <div className="mt-4">
              <OrbitingTools />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <p className="text-3xl mb-6">Quick Stats</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{title: "Completed Projects", end: 12}, {title: "Years of Experience", end: 3}, {title: "Bugs Resolved", end: 267}].map((stat, i) => (
              <div key={i} className="bg-[#EAF4FF08] border border-[#A1CDFF14] rounded-2xl p-4 flex flex-col items-center">
                <p className="text-2xl font-semibold">+<CountUp end={stat.end} duration={2000} /></p>
                <p className="text-center">{stat.title}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-[#EAF4FF08] border border-[#A1CDFF14] rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-4">
            <p className="text-center sm:text-left flex-1">
              Behind every great website is a developer running on coffee,
              stubbornness, and pure creative energy. So don’t worry — your code
              is in safe hands :)
            </p>
            <img src={Gif} alt="Anime gif" className="w-full sm:w-[250px] rounded-2xl" />
          </div>
        </div>
      </div>

      <hr className="border-[#A1CDFF1A] my-8" />
      <div className="text-center text-sm sm:text-base">
        Made by Aymen &copy; {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default About;
