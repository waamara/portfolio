import Bgimg from "../../portfolio/src/assets/backgr.png"
import Seepng from "../../portfolio/src/assets/see.png"
import Dowlandpng from "../../portfolio/src/assets/dowland.png"
import Mypic from "../../portfolio/src/assets/me.jpg"
import Pointimg from "../../portfolio/src/assets/point.png"
import Foldericone from "../../portfolio/src/assets/folder.png"
import Img from "../../portfolio/src/assets/img.png"
import More from "../../portfolio/src/assets/More.png"
import Fram from "../../portfolio/src/assets/Frame.png"



import Emaili from "../src/assets/Overlay+Shadow (1).png"
import Githubi from "../src/assets/Overlay+Shadow (4).png"
import Instagrami from "../src/assets/Overlay+Shadow (5).png"


const home = () => {
    return (
        <div style={{
            backgroundImage: `url($Bgimg)`,
        }}
            className="text-white bg-gray-950 opacity-100  p-8 md:flex md:flex-col">
            <div className="md:flex md:flex-row ">
                <div className="p-10">
                    <div className=" w-[300px] ">
                        <img src={Mypic} alt="My-img " className="rounded-xl" />
                    </div>
                    <div className='flex flex-row justify-center text-center mt-4 pt-2 pb-4  bg-gray-800 rounded-2xl'>
                        <div className="  mt-4  rounded-md flex flex-row">
                            <img src={Pointimg} alt="icone" className="w-8 h-8" />
                            <p className="text-xl pl-8 font-bold">Available For work</p>
                        </div>
                    </div>
                </div>
                <div className="pt-10">
                    <div className="bg-gray-800 p-4 rounded-2xl">
                        <p className="text-3xl font-semibold ">Introduction </p> <br />
                        <p>I'm Aymen, a passionate frontend developer and a computer science <br />student at USTHBI'm Aymen, a passionate frontend developer and a <br /> computer science student at USTHB</p>
                        <p className="text-blue-600 mt-3">“ user-friendly web applications using the latest “</p>
                    </div>
                    <div className='flex flex-col  pt-4'>
                        <div className='flex flex-row items-center justify-between pt-4'>
                            <p className="font-semibold text-3xl">Get In Touch</p>
                        </div>
                        <div className="flex flex-row">
                            <div className="bg-amber-200 w-[200px] h-[200px] rounded ">
                                <img src={Githubi} alt="instagram-icone" />
                                <a className="bg-[#C2F6FF08] p-2 rounded-md"
                                    href="linkedin.com/in/aymen-berbiche-772a13280">Follow on Linkedin</a>
                            </div>
                            <div>
                                <a className="bg-[#C2F6FF08] p-2 rounded-md"
                                    href="">Follow on Email</a>
                            </div>
                            <div>
                                <a className="bg-[#C2F6FF08] p-2 rounded-md"
                                    href="https://github.com/waamara">Follow on Github</a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <br />
            <hr />
            <div className="flex flex-row">
                <div className=" flex flex-col p-10  items-center justify-center bg-[#C2F6FF08] rounded-2xl  md:w-[200px] md:h-[150px]">
                    <img src={Img} alt="img" />
                    <button className="bg-[#38ACFF40] p-2 rounded-md flex flex-row">
                        <p>view works</p>
                        <img src={Foldericone} alt="folder-icone" />
                    </button>
                </div>
                <div className=" flex flex-col p-6 mt-10 bg-[#C2F6FF08] rounded-2xl md:w-[650px]">
                    <div className="flex flex-row  pb-6">
                        <p className="text-2xl font-semibold">Testamonial </p>

                    </div>
                    <div className="flex flex-col rounded-xl bg-[#101526] p-4 ">
                        <div className="flex flex-row  pb-4 ">
                            <div className="pr-6">
                                <img src={Mypic} alt="picture-of-the-talker"
                                    className="w-14 rounded-xl" />
                            </div>
                            <div>
                                <p className="text-xl">Full Name</p>
                                <p>role lorem ipsum</p>
                            </div>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod tempor incididunt ut labore elit, </p>
                            <p className="pt-2 text-[#FFFFFFCC]">17 oct 2024</p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <hr />
            <div className=" flex flex-col p-6 mt-10 items-center justify-center text-center  md:w-[500px] bg-[#C2F6FF08] rounded-2xl">
                <p className="text-3xl font-semibold pb-4">Let's Create Something <br /> Great Together !</p>
                <p>Feel free to reach out anytime you <br /> have a project idea – I’d love to <br /> collaborate!</p>
                <div>
                    <div className="flex flex-row pt-4 border-b-2 border-gray">

                        <p>berbicheaymen@gmail.com</p>
                    </div>
                    <div className="flex flex-row pt-4 border-b-2 border-gray">

                        <a href="linkedin.com/in/aymen-berbiche-772a13280">Reach me on LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default home