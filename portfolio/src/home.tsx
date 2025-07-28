import Bgimg from "../../portfolio/src/assets/backgr.png"
import Seepng from "../../portfolio/src/assets/see.png"
import Dowlandpng from "../../portfolio/src/assets/dowland.png"
import Mypic from "../../portfolio/src/assets/me.jpg"
import Pointimg from "../../portfolio/src/assets/Pulsating animation.gif"
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
import TextType from '../src/components/TextType';
import Blur from "../src/assets/a.png"
import Pic from "../src/assets/VideoCapture_20250725-194611.jpg"
import Bg from "../src/assets/Mask Group.png"
import { NavLink } from "react-router-dom";


const home = () => {
    return (
        <div
            className="text-white flex flex-col bg-[#0F0F0F] p-8 overflow-x-hidden md:flex md:flex-col">
            <img src={Blur} alt="Blur eefect " className="absolute scale-z-75 pointer-events-none top-0 right-0 left-0 mask-radial-from-0 -mt-[650px]"   />
            <hr className="text-[#A1CDFF1A] ml-8 mr-8" />
            <div className="md:flex md:flex-row flex flex-col ">
                <div className="p-10 flex flex-col ">
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

                    <div className='flex flex-row justify-center text-center mt-22  pb-4  bg-[#EAF4FF08] border-[1px] border-[#A1CDFF14] rounded-2xl'>
                        <div className="  mt-4  rounded-md flex flex-row text-center jusrtify-center items-center">
                            <img src={Pointimg} alt="icone" className="w-4 h-4   rounded-4xl  " />
                            <p className="text-xl pl-8 font-semibold">Available For work</p>
                            
                        </div>
                    </div>
                </div>
                <div className="pt-10 pl-4 flex flex-col ">
                    <div className="bg-[#EAF4FF08] p-8 pr-16  rounded-2xl border-[#A1CDFF1A] border-[1px]">
                        <p className="text-3xl font-semibold ">Introduction </p> <br />
                        <p>Hola amigos! Aymen here — Full-stack dev , CS graduate , and Bioinformatics Master’s Student. <br />
                            I dream in code, live in VS Code, and break stuff just to fix it better. <br />

                            Fun fact: I wanted to be a doctor… <br /> but turns out debugging is more fun than diagnosing.</p>
                        <TextType
                            text={["“ user-friendly web applications using the latest “"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                            className="inline-block whitespace-pre-wrap ml-1 opacity-100 text-[#55A4FF] mt-2"
                        />
                    </div>
                    <div className='flex flex-col   ' >
                        <div className='flex flex-row items-center justify-between pt-4'>
                            <p className="font-semibold text-3xl mb-4">Get In Touch</p>
                        </div>
                        <div className="flex flex-row space-x-10">
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
                                    <a className=" pl-4 pb-12 rounded-md"
                                        href="mailto:berbicheaymen@gmail.com" email >Follow On Email</a>
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
            </div>

            <hr className="text-[#A1CDFF1A] ml-8 mr-8" />
            <div className="md:flex md:flex-row flex flex-col w-full ">
                <div className="   m-10  items-center border-[#A1CDFF14] border-1  justify-center  bg-[#C2F6FF08] rounded-2xl w-[570px] ">
                    <p className="text-2xl text-center pt-4">View All Works</p>
                    <img src={Views} alt="img" className="h-[300px]" />
                </div>
                <div className=" flex flex-col p-6 mt-3  rounded-2xl md:w-[500px]">
                    <p className="text-3xl mb-2  ">Testimonial </p>
                    <p className="mb-3 text-[#CFCFCF] ">About 40% of what you do, day in and day <br /> out, is done purely out of ha</p>
                    <a href="https://www.linkedin.com/in/aymen-berbiche-772a13280/" className="text-[#55A4FF] mb-4 flex flex-row text-center gap-2 items-center border-b-[1px] w-[170px] "> More on my LinkedIn <img src={Arrow} alt="asset" className="w-[10px] h-[10px] " /></a>
                    <Stack
                        randomRotation={false}
                        sensitivity={10}
                        sendToBackOnClick={false}
                        cardDimensions={{ width: 500, height: 250 }}
                        cardsData={testimonials}
                    />
                </div>
            </div>
            <br />
            <hr className="text-[#A1CDFF1A] ml-8 mr-4" />
            <div className="flex flex-row justify-around  w-full  ">
                <div style={{
                    backgroundImage: `url(${Bg })`, 
                }} className=" bg-no-repeat flex flex-row p-6 mt-10 items-center justify-center space-x-8 border-[#A1CDFF14]   md:w-[680px] bg-[#EAF4FF08] border-[1px] rounded-2xl">
                    <img src={Pic} alt="My pic " className=" h-[220px] rounded-2xl" />
                    <div className="ml-4">
                        <p className="text-2xl mt-2 mb-2">What makes technology <br /> so habit-forming?</p>
                        <p className="text-[#CFCFCF]">Technology becomes habit-forming because it taps into core psychological triggers that affect how we think, feel, and behave.</p>
                        <div className="flex flex-row gap-3 mt-2">
                            <div className=" border-[1px] border-[#A1CDFF14] p-1.5 pl-2 pr-2  bg-[#3F82FF1C] text-[#55A4FF] rounded-xl">
                                <p>Go </p>
                            </div>
                            <div className=" border-[1px] border-[#A1CDFF14] p-1.5 pl-2 pr-2  bg-[#3F82FF1C] text-[#55A4FF] rounded-xl">
                                <p>Express js </p>
                            </div>
                            <div className=" border-[1px] border-[#A1CDFF14] p-1.5 pl-2 pr-2  bg-[#3F82FF1C] text-[#55A4FF] rounded-xl">
                                <p>Next Js </p>
                            </div> <div className=" border-[1px] border-[#A1CDFF14] p-1.5 pl-2 pr-2  bg-[#3F82FF1C] text-[#55A4FF] rounded-xl">
                                <p>Api </p>
                            </div>
                            <div className=" border-[1px] border-[#A1CDFF14] p-1.5 pl-2 pr-2  bg-[#3F82FF1C] text-[#55A4FF] rounded-xl">
                                <p>Django </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col p-6 mt-10 items-center justify-center text-center  md:w-[400px] border-[1px]  border-[#A1CDFF14]    bg-[#EAF4FF08] rounded-2xl">
                    <p className="text-3xl font-semibold pb-4">Let's Create Something <br /> Great Together !</p>
                    <p>Feel free to reach out anytime you <br /> have a project idea </p>
                    <NavLink 
                        to="/contact" 
                        className="hover:font-semibold hover:text-white mt-8 text-[#55A4FF] flex pb-1 flex-row space-x-3 items-center border-b-1 border-b-[#55A4FF]">
                        <p>Reach out</p>
                        <img src={Arrow} alt="Arrow icone" className="w-3 h-3" />
                    </NavLink>
                </div>
            </div>
            <hr className="text-[#A1CDFF1A] mt-10 ml-8 mr-8" />
            <div className="flex justify-center items-center mt-8  ">
                <p> Made By Aymen  &copy; {new Date().getFullYear()}   </p>
            </div>
        </div>
        
    )
}

export default home