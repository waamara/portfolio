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


const home = () => {
    return (
        <div style={{
            backgroundImage: `url($Bgimg)`,
        }}
            className="text-white bg-gray-950 opacity-100  p-8 md:flex md:flex-col">
            <hr className="text-[#A1CDFF1A] ml-8 mr-8" />
            <div className="md:flex md:flex-row ">
                <div className="p-10">
                    <div className=" w-[300px] ">
                        <img src={Me} alt="Me " className="rounded-xl h-[300px] w-[400px]" />
                    </div>
                    <div className='flex flex-row justify-center text-center mt-4  pb-4  bg-[#EAF4FF08] border-[1px] border-[#A1CDFF14] rounded-2xl'>
                        <div className="  mt-4  rounded-md flex flex-row text-center jusrtify-center items-center">
                            <img src={Pointimg} alt="icone" className="w-4 h-4 " />
                            <p className="text-xl pl-8 font-bold">Available For work</p>
                        </div>
                    </div>
                </div>
                <div className="pt-10 pl-4">
                    <div className="bg-[#EAF4FF08] p-4 rounded-2xl border-[#A1CDFF1A] border-[1px]">
                        <p className="text-3xl font-semibold ">Introduction </p> <br />
                        <p>I'm Aymen, a passionate frontend developer and a computer science <br />student at USTHBI'm Aymen, a passionate frontend developer and a <br /> computer science student at USTHB</p>
                        <p className="text-[#55A4FF] mt-2">“ user-friendly web applications using the latest “</p>
                    </div>
                    <div className='flex flex-col   ' >
                        <div className='flex flex-row items-center justify-between pt-4'>
                            <p className="font-semibold text-3xl mb-4">Get In Touch</p>
                        </div>
                        <div className="flex flex-row space-x-5">
                            <div className="bg-[#EAF4FF08] border-[1px] border-[#A1CDFF14] w-[230px] h-[130px] rounded-2xl ">
                                <img src={Githubi} alt="instagram-icone" className="flex -mt-3 -ml-2" />
                                <a className=" pl-4 pb-12 rounded-md"
                                    href="https://github.com/waamara">Follow On Github</a>
                            </div><div className="bg-[#EAF4FF08] border-[1px] border-[#A1CDFF14] w-[230px] h-[130px] rounded-2xl ">
                                <img src={Emaili} alt="instagram-icone" className="flex -mt-3 -ml-2" />
                                <a className=" pl-4 pb-12 rounded-md"
                                    href="berbicheaymen@gmail.com">Follow On Email</a>
                            </div><div className="bg-[#EAF4FF08] border-[1px] border-[#A1CDFF14] w-[230px] h-[130px] rounded-2xl ">
                                <img src={Linkdini} alt="instagram-icone" className="flex -mt-3 -ml-2" />
                                <a className=" pl-4 pb-12 rounded-md"
                                    href="linkedin.com/in/aymen-berbiche-772a13280">Follow On Linkedin</a>
                            </div>
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
                    <p className="text-3xl mb-2  ">Testimonial </p>
                    <p className="mb-3 text-[#CFCFCF] ">About 40% of what you do, day in and day <br /> out, is done purely out of ha</p>
                    <a href="https://www.linkedin.com/in/aymen-berbiche-772a13280" className="text-[#55A4FF] mb-4 flex flex-row text-center gap-2 items-center border-b-[1px] w-[170px] "> More on my LinkedIn <img src={Arrow} alt="asset" className="w-[10px] h-[10px] " /></a>
                    <div className="flex flex-col rounded-xl bg-[#131314] border-[1px] border-[#A1CDFF14]  p-4 ">
                        <div className="flex flex-row  pb-4 ">
                            <div className="pr-6 ">
                                <img src={Mypic} alt="picture-of-the-talker"
                                    className="w-14 rounded-xl" />
                            </div>
                            <div>
                                <p className="text-xl">Full Name</p>
                                <p>role lorem ipsum</p>
                            </div>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur iscing <br /> elit, sed do eiusmod tempor incididunt ut <br /> labore elit, tempor incididunt ut labore . </p>
                            <div className="flex justify-end -mt-5">
                            <button >
                                <img src={Switch} alt="Switch" />
                            </button>
                            </div>            
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <hr className="text-[#A1CDFF1A] ml-8 mr-4" />
            <div className="flex flex-row justify-around  ">
                <div className=" flex flex-row p-6 mt-10 items-center justify-center border-[#A1CDFF14]   md:w-[680px] bg-[#EAF4FF08] border-[1px] rounded-2xl">
                    <div>
                        <img src={Myphoto} alt="Mypicture" />
                    </div>
                    <div className="ml-4">
                        <p className="text-2xl mt-2 mb-2">What makes technology <br /> so habit-forming?</p>
                        <p className="text-[#CFCFCF]">About 40% of what you do, day in and <br /> day out, is done  Nir Eyal decodes <br /> how technology ...</p>
                        <div className="flex flex-row gap-3 mt-2">
                          
                            <div className=" border-[1px] border-[#A1CDFF14] p-1.5 pl-2 pr-2  bg-[#3F82FF1C] text-[#55A4FF] rounded-xl">
                                <p>Backend </p>
                            </div>
                        
                        
                            <div className=" border-[1px] border-[#A1CDFF14] p-1.5 pl-2 pr-2  bg-[#3F82FF1C] text-[#55A4FF] rounded-xl">
                                <p>Open Mindes Club </p>
                            </div> <div className=" border-[1px] border-[#A1CDFF14] p-1.5 pl-2 pr-2  bg-[#3F82FF1C] text-[#55A4FF] rounded-xl">
                                <p>Ai </p>
                            </div>
                        </div>
                        
                            
                       
                    </div>
                </div>
                <div className=" flex flex-col p-6 mt-10 items-center justify-center text-center  md:w-[400px] border-[1px]  border-[#A1CDFF14]    bg-[#EAF4FF08] rounded-2xl">
                    <p className="text-3xl font-semibold pb-4">Let's Create Something <br /> Great Together !</p>
                    <p>Feel free to reach out anytime you <br /> have a project idea </p>
                    <p className="mt-8 text-[#55A4FF]">Come say hii :)</p>
                </div>
            </div>
        </div>
    )
}

export default home