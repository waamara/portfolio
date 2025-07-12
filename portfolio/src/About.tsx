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



const about = () => {
    return (
        <div style={{
            backgroundImage: `url($Bgimg)`,
        }}
            className="text-white bg-gray-950 opacity-100  p-8 md:flex md:flex-col">
            <hr className="text-[#A1CDFF1A] ml-8 mr-8" />
            <div className="md:flex md:flex-row ">
                <div className="pt-10 pl-4">
                    <div className="bg-[#EAF4FF08] p-4 rounded-2xl border-[#A1CDFF1A] border-[1px]">
                        <p className="text-3xl font-semibold ">About The Developer </p> <br />
                        <p>I'm Aymen, a passionate frontend developer and a computer science <br /> student at USTHBI'm Aymen, a passionate frontend developer and a <br />computer science  student at USTHB</p>
                        <p className="mt-1">I'm Aymen, a passionate frontend developer and a computer science <br /> student at USTHBI'm Aymen, a passionate frontend developer and a <br />computer science  student at USTHB</p>
                        <p className="text-xl mt-1"> Core Values : </p>
                        
                            <div className="flex flex-row space-x-1.5">
                                 <div className="bg-[#3F82FF1C] border-1 border-[#A1CDFF14] p-2 rounded-2xl">
                        <p>Frontend Developer </p>
                    </div>
                    <div className="bg-[#3F82FF1C] border-1 border-[#A1CDFF14] p-2 rounded-2xl">
                        <p>Frontend Developer </p>
                    </div>
                    <div className="bg-[#3F82FF1C] border-1 border-[#A1CDFF14] p-2 rounded-2xl">
                        <p>Frontend Developer </p>
                    </div>
                            </div>
                    </div>
                    <div className='flex flex-col   ' >
                        <div className='flex flex-row items-center justify-between pt-4'>
                            <p className="font-semibold text-3xl mb-4">Get In Touch</p>
                        </div>
                        <div className="flex flex-row space-x-5">

                            <div className="bg-[#EAF4FF08] border-[1px] hover:bg-gray-950 border-[#A1CDFF14] w-[230px] h-[130px] rounded-2xl ">
                                <img src={Githubi} alt="instagram-icone" className="flex -mt-3 -ml-2" />
                                <a className=" pl-4 pb-12 rounded-md"
                                    href="https://github.com/waamara">Follow On Github</a>
                            </div><div className="bg-[#EAF4FF08] border-[1px]  hover:bg-gray-950 border-[#A1CDFF14] w-[230px] h-[130px] rounded-2xl ">
                                <img src={Emaili} alt="instagram-icone" className="flex -mt-3 -ml-2" />
                                <a className=" pl-4 pb-12 rounded-md"
                                    href="mailto:berbicheaymen@gmail.com" email>Follow On Email</a>
                            </div><div className="bg-[#EAF4FF08] border-[1px] border-[#A1CDFF14]  hover:bg-gray-950 w-[230px] h-[130px] rounded-2xl ">
                                <img src={Linkdini} alt="instagram-icone" className="flex -mt-3 -ml-2" />
                                <a className=" pl-4 pb-12 rounded-md  "
                                    href="https://www.linkedin.com/in/aymen-berbiche-772a13280/">Follow On Linkedin</a>
                            </div>
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
                        <div className=" p-5 w-[140px] h-[100px] flex flex-col  items-center bg-[#EAF4FF08] border-[1px]  hover:bg-gray-950 border-[#A1CDFF14]  rounded-2xl ">
                            <p>See My <br /> Resume</p>
                            <img src={Sicone} alt="icone" className="flex h-3 w-3 " />
                        </div>
                        <div className=" p-5 w-[140px] h-[100px] flex flex-col  items-center bg-[#EAF4FF08] border-[1px]  hover:bg-gray-950 border-[#A1CDFF14]  rounded-2xl ">
                            <p>Dowland <br /> Resume</p>
                            <img src={Ficone} alt="icone" className="flex h-3 w-3 " />
                        </div>
                    </div>
                </div>

            </div>
            <br />
            <hr className="text-[#A1CDFF1A] ml-8 mr-8" />
            <div className="flex flex-row">
                <div className="  grid grid-cols-2 m-10  place-items-center   justify-items-center bg-[#C2F6FF08] rounded-2xl w-[520px] ">
                    <div className="bg-[#3F82FF1C] border-1 border-[#A1CDFF14] p-2 rounded-2xl">
                        <p>Frontend Developer </p>
                    </div>
                    <div className="bg-[#3F82FF1C] border-1 border-[#A1CDFF14] p-2 rounded-2xl">
                        <p>Frontend Developer </p>
                    </div>
                    <div className="bg-[#3F82FF1C] border-1 border-[#A1CDFF14] p-2 rounded-2xl">
                        <p>Frontend Developer </p>
                    </div>
                    <div className="bg-[#3F82FF1C] border-1 border-[#A1CDFF14] p-2 rounded-2xl">
                        <p>Frontend Developer </p>
                    </div>
                    <div className="bg-[#3F82FF1C] border-1 border-[#A1CDFF14] p-2 rounded-2xl">
                        <p>Frontend Developer </p>
                    </div>
                    <div>
                        <p>tools & skills</p>
                        <p>tempor incididunt ut labore elit, tempor incididunt ut labore elit,  </p>
                    </div>
                </div>
                <div className=" flex flex-col p-6 mt-3  rounded-2xl md:w-[500px]">
                    <p className="text-3xl mb-2  ">Quick Stats </p>
                    <div className="flex flex-row  pt-4 space-x-4">
                        <div className=" p-2 w-[140px] h-[110px] flex flex-col  items-center text-center bg-[#EAF4FF08] border-[1px]  hover:bg-gray-950 border-[#A1CDFF14]  rounded-2xl ">
                            <p  className="text-2xl font-semibold pb-1">+ 12  </p>
                            <p>Completed  Projects </p>
                        </div>
                        <div className=" p-2 w-[140px] h-[110px] flex flex-col  items-center text-center bg-[#EAF4FF08] border-[1px]  hover:bg-gray-950 border-[#A1CDFF14]  rounded-2xl ">
                            <p  className="text-2xl font-semibold pb-1">+ 3  </p>
                            <p>Years of Experience </p>
                        </div>
                        <div className=" p-2 w-[140px] h-[110px] flex flex-col  items-center text-center bg-[#EAF4FF08] border-[1px]  hover:bg-gray-950 border-[#A1CDFF14]  rounded-2xl ">
                            <p  className="text-2xl font-semibold pb-1">+ 267 </p>
                            <p>Bugs <br /> Resolved </p>
                        </div>
                    </div>
                    <div className="flex p-3 text-center mt-6 space-x-6  bg-[#EAF4FF08] border-[1px] border-[#A1CDFF14] rounded-2xl">
                        <p>Behind every great website is a <br /> developer running on coffee, <br /> stubbornness, and pure creative <br /> energy. <br />
                            so Don’t worry  your code is in safe <br /> hands :)
                        </p>
                        <img 
                            src={Video}
                            alt="Anime video"
                            className=" w-[150px] "  
                        />
                    </div>
                </div>
            </div>
            <br />       
        </div>
    )
}

export default about