import Bgimg from "../../portfolio/src/assets/backgr.png"
import Seepng from "../../portfolio/src/assets/see.png"
import Dowlandpng from "../../portfolio/src/assets/dowland.png"
import Mypic from "../../portfolio/src/assets/me.jpg"
import Pointimg from "../../portfolio/src/assets/point.png"
import Foldericone from "../../portfolio/src/assets/folder.png"
import Img from "../../portfolio/src/assets/img.png"
import More from "../../portfolio/src/assets/More.png"
import Fram from "../../portfolio/src/assets/Frame.png"
import Views from "../../portfolio/src/assets/Mac Studio 1.png"
import Myphoto from "../src/assets/1741356507458 1.png"
import Linkdini from "../src/assets/Overlay+Shadow (1).png"
import Githubi from "../src/assets/Overlay+Shadow (4).png"
import Emaili from "../src/assets/Overlay+Shadow (5).png"
import Arrow from "../src/assets/Arrow 1.png"
import Switch from "../src/assets/switch.png"
import Me from "../src/assets/IMG_7000.jpg"
import TiltedCard from "./components/TiltedCard"
import SpotlightCard from "./components/SpotlightCard"
import Stack from "./components/Stack"
import testimonials from "./testemonial"
import Stack1 from "./components/Stack1"

import Ficone from "../src/assets/Icon (1).png"
import Sicone from "../src/assets/Icon (2).png"
import Video from "../src/assets/Rectangle 1927.png"
import CountUp from "../src/components/Countup";
import Gif from "../src/assets/téléchargement.gif"

import { useEffect, useState } from "react";
import OrbitingTools from "./components/OrbitingTools"
import Blur from "../src/assets/a.png"
import Bg from "../src/assets/Image.png"

const tags = [
    "Frontend Developer",
    "UI Designer",
    "Web Enthusiast",
    "React Lover"
];

const AutoTagCarousel = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % tags.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-row space-x-1.5 mt-2 transition-all duration-700 ease-in-out">
            <div className="bg-[#3F82FF1C] border border-[#A1CDFF14] p-2 rounded-2xl min-w-[200px]
             text-center">
                <p>{tags[index]}</p>
            </div>
        </div>
    );
};


const about = () => {

    return (
        <div style={{
            backgroundImage: `url($Bgimg)`,
        }}
            className="text-white bg-[#0F0F0F]  p-8 md:flex md:flex-col">
            <img src={Blur} alt="Blur eefect " className=" absolute scale-z-75  pointer-events-none top-0  right-0 left-0 mask-radial-from-0  -mt-[650px]   " />

            <hr className="text-[#A1CDFF1A] ml-8 mr-8" />
            <div className="md:flex md:flex-row ">
                <div className="pt-10 pl-8 ">
                    <div className="bg-[#EAF4FF08] h-[340px] p-4 rounded-2xl border-[#A1CDFF1A] border-[1px]">
                        <p className="text-3xl font-semibold ">About The Developer </p> <br />
                        <p>A dedicated developer with a solid foundation in both frontend and backend technologies. I specialize in building modern, responsive applications using React and Tailwind CSS on the frontend, and I work with Node.js, Express.js,  and PHP on the backend as I continue to grow as a full-stack developer.

                            I hold a Bachelor’s degree in Computer Science, and I’m currently pursuing a Master’s degree in Bioinformatics, where I aim to bridge the gap between technology and biological data analysis.

                            I'm focused on writing clean, maintainable code and building scalable applications that solve real-world problem.</p>
                        <p className="text-xl mt-2"> Core Values : </p>


                    </div>
                    <div className='flex flex-col   ' >
                        <div className='flex flex-row items-center justify-between pt-4'>
                            <p className="font-semibold text-3xl mb-4">Get In Touch</p>
                        </div>
                        <div className="flex flex-row space-x-12">
                            <a href="https://github.com/waamara">
                                <div className=" hover:text-bold bg-[#EAF4FF08] hover:bg-transparent border-[1px] hover:pl-6 hover:bg-opacity-100 border-[#A1CDFF14] cursor-pointer w-[230px] h-[130px] rounded-2xl ">
                                    <img src={Githubi} alt="instagram-icone" className="flex -mt-3 -ml-2" />
                                    <a className=" pl-4 pb-12 rounded-md"
                                        href="https://github.com/waamara">Follow On Github</a>
                                </div>
                            </a>
                            <a href="mailto:berbicheaymen@gmail.com">
                                <div className="bg-[#EAF4FF08] border-[1px]  hover:bg-transparent  hover:pl-6 cursor-pointer  border-[#A1CDFF14] w-[230px] h-[130px] rounded-2xl ">
                                    <img src={Emaili} alt="instagram-icone" className="flex -mt-3 -ml-2" />
                                    <a
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/aymen-berbiche-772a13280/">
                                <div className="bg-[#EAF4FF08] border-[1px] hover:bg-transparent border-[#A1CDFF14] cursor-pointer   hover:pl-6 w-[230px] h-[130px] rounded-2xl ">
                                    <img src={Linkdini} alt="instagram-icone" className="flex -mt-3 -ml-2" />
                                    <a className=" pl-4 pb-12 rounded-md  "
                                        href="https://www.linkedin.com/in/aymen-berbiche-772a13280/">Follow On Linkedin</a>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="p-10 ">
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

                    <div className='flex flex-row justify-center text-center mt-14  pb-4  bg-[#EAF4FF08] border-[1px] border-[#A1CDFF14] rounded-2xl'>
                        <div className="  mt-4  rounded-md flex flex-row text-center jusrtify-center items-center">
                            <img src={Pointimg} alt="icone" className="w-4 h-4 " />
                            <p className="text-xl pl-8 font-semibold">Available For work</p>
                        </div>
                    </div>
                    <div className="flex flex-row  pt-4 space-x-4">
                        <a href="../src/assets/AYMEN BERBICHE.pdf">
                            <div className=" p-5 w-[140px] h-[100px] hover:bg-transparent flex flex-col  items-center bg-[#EAF4FF08] border-[1px]   border-[#A1CDFF14]  rounded-2xl ">
                                <p>See My <br /> Resume</p>
                                <img src={Sicone} alt="icone" className="flex h-4 w-4 mt-2" />
                            </div>
                        </a>
                        <a href="../src/assets/AYMEN BERBICHE.pdf" download>
                            <div className=" hover:bg-transparent p-5 w-[140px] h-[100px] flex flex-col  items-center bg-[#EAF4FF08] border-[1px]  border-[#A1CDFF14]  rounded-2xl ">
                                <p>Dowland <br /> Resume</p>
                                <img src={Ficone} alt="icone" className="flex h-4 w-4 mt-2 " />
                            </div>
                        </a>

                    </div>
                </div>

            </div>
            <br />
            <hr className="text-[#A1CDFF1A] ml-8 mr-8" />
            <div className="flex flex-row ">
                <div 
                style={{
                    backgroundImage: `url(${Bg })`, 
                }}
                    className=" bg-no-repeat bg-bottom bg-blend-luminosity flex flex-col m-10  place-items-center border-1 border-[#A1CDFF14] bg-[#C2F6FF08] rounded-2xl h-[470px] w-[470px] ">
                    <div className="items-center space-y-3 mb-6 mt-8 justify-center flex flex-col">
                        <div className="flex-row flex space-x-7 ">
                            <div className="bg-[#3F82FF1C] border-1 border-[#A1CDFF14] p-2 rounded-xl  text-sm">
                                <p>Frontend Developer </p>
                            </div>
                            <div className="bg-[#3F82FF1C] border-1 border-[#A1CDFF14] p-2 rounded-xl text-sm">
                                <p>Backend Developer </p>
                            </div>
                        </div>
                        <div className="flex-row flex space-x-5">
                            <div className="bg-[#3F82FF1C] border-1 border-[#A1CDFF14] p-2 rounded-xl text-sm">
                                <p>Site Optimization </p>
                            </div>
                            <div className="bg-[#3F82FF1C] border-1 border-[#A1CDFF14] p-2 rounded-xl text-sm">
                                <p>Database Creation  </p>
                            </div>
                        </div>
                        <div className="bg-[#3F82FF1C] border-1 border-[#A1CDFF14] p-2 rounded-xl text-sm">
                            <p>Ui Ux Design </p>
                        </div>

                    </div>
                    <div>
                        <div className="flex flex-col items-center text-center ">
                            <p className="text-4xl mb-2">Tools & Skills</p>
                            <p>Tools that i use to create  My web  <br /> Applications </p>
                            <main className="flex  flex-col items-center justify-center ">
                                <OrbitingTools />
                            </main>
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col p-6 mt-12  rounded-2xl md:w-[]">
                    <p className="text-3xl mb-6  ">Quick Stats </p>
                    <div className="flex mb-4 flex-row pt-4 space-x-12">
                        <div className="p-2 w-[160px] h-[120px] flex flex-col items-center text-center bg-[#EAF4FF08] border-[1px]  border-[#A1CDFF14] rounded-2xl">
                            <p className="text-2xl font-semibold pb-1 pt-2">
                                + <CountUp end={12} duration={2000} />
                            </p>
                            <p>Completed <br /> Projects</p>
                        </div>

                        <div className="p-2 w-[160px] h-[120px] flex flex-col pt-4 items-center text-center bg-[#EAF4FF08] border-[1px]  border-[#A1CDFF14] rounded-2xl">
                            <p className="text-2xl font-semibold pb-1">
                                + <CountUp end={3} duration={1500} />
                            </p>
                            <p>Years of <br /> Experience</p>
                        </div>

                        <div className="p-2 w-[160px] h-[120px] flex flex-col pt-4 items-center text-center bg-[#EAF4FF08] border-[1px]  border-[#A1CDFF14] rounded-2xl">
                            <p className="text-2xl font-semibold pb-1">
                                + <CountUp end={267} duration={2500} />
                            </p>
                            <p>
                                Bugs <br /> Resolved
                            </p>
                        </div>
                    </div>
                    <div className="flex  p-3 text-center mt-6 space-x-6  bg-[#EAF4FF08] border-[1px] border-[#A1CDFF14] rounded-2xl">
                        <p className="p-4">Behind every great website is a <br /> developer running on coffee, <br /> stubbornness, and pure creative <br /> energy. <br />
                            so Don’t worry  your code is in safe <br /> hands :)
                        </p>
                        <img
                            src={Gif}
                            alt="Anime video"
                            className=" w-[250px] rounded-2xl "
                        />
                    </div>
                </div>
            </div>
            <br />
            <hr className="text-[#A1CDFF1A] mt-10 ml-8 mr-8" />
            <div className="flex justify-center items-center mt-8  ">
                <p> Made By Aymen  &copy; {new Date().getFullYear()}   </p>
            </div>
        </div>
    )
}

export default about