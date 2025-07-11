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



const about = () => {
    const images = [
        { id: 1, img: Me },
        { id: 2, img: Me }
    ];
    return (
        <div style={{
            backgroundImage: `url($Bgimg)`,
        }}
            className="text-white bg-gray-950 opacity-100  p-8 md:flex md:flex-col">
            <hr className="text-[#A1CDFF1A] ml-8 mr-8" />
            <div className="md:flex md:flex-row ">
                <div className="pt-10 pl-4">
                    <div className="bg-[#EAF4FF08] p-4 rounded-2xl border-[#A1CDFF1A] border-[1px]">
                        <p className="text-3xl font-semibold ">Introduction </p> <br />
                        <p>Hola amigos! Aymen here — full-stack dev, CS graduate, and bioinformatics master’s student. <br />
                            I dream in code, live in VS Code, and break stuff just to fix it better. <br />

                            Fun fact: I wanted to be a doctor… <br /> but turns out debugging is more fun than diagnosing.</p>
                        <p className="text-[#55A4FF] mt-2">“ user-friendly web applications using the latest “</p>
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
                <div className="   m-10  items-center justify-center bg-[#C2F6FF08] rounded-2xl w-[570px] ">
                    <p className="text-2xl text-center pt-4">View All Works</p>
                    <img src={Views} alt="img" className="h-[300px]" />
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
                    <div className="flex p-3 text-center mt-6  bg-[#EAF4FF08] border-[1px] border-[#A1CDFF14] rounded-2xl">
                        <p>Behind every great website is a <br /> developer running on coffee, <br /> stubbornness, and pure creative <br /> energy. <br />
                            so Don’t worry  your code is in safe <br /> hands :)
                        </p>
                    </div>
                </div>
            </div>
            <br />       
        </div>
    )
}

export default about