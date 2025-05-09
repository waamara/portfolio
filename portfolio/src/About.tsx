import Bgimg from "../../portfolio/src/assets/backgr.png"
import Mypic from "../../portfolio/src/assets/me.jpg"
import Star from "../../portfolio/src/assets/star.png"
import Logo from "../../portfolio/src/assets/logo.png"
import Experience from "../../portfolio/src/assets/experience.png"
import Linkedin from "../../portfolio/src/assets/email (7).png"
import Email from "../../portfolio/src/assets/email (1).png"
import Icone from "../../portfolio/src/assets/good.png"


const About = () => {
    return (


        <div style={{
            backgroundImage: `url($Bgimg)`,
        }}
            className="text-white bg-gray-950 opacity-100 md:flex md:flex-col  p-8">
            <div className="md:flex md:flex-row md:justify-evenly">
                <div className="p-12">
                    <img src={Mypic} alt="" className="w-[300px]" />
                </div>
                <div className="w-[420px]  ">
                    <p className="text-3xl">I Am Aymen </p> <br />
                    <p>I'm Aymen, a passionate frontend developer and a computer science student at USTHB. I specialize in building modern, responsive, and user-friendly web applications using the latest technologies.</p>
                    <br />
                    <p>Currently, I’m the Web Development Team Lead at Open Minds Club, where I collaborate with talented developers to create impactful digital experiences.</p>
                    <br />
                </div>
                <div className=" flex flex-col p-6 mt-10 items-center h-[200px]  bg-[#C2F6FF08] rounded-2xl">
                    <div className="flex flex-row">
                        <p className="font-semibold text-xl">Interests</p>
                        <img src={Star} alt="star-icone" />
                    </div>
                    <div>
                        <div className="bg-[#C2F6FF0F] p-3 rounded-3xl">Branding</div>
                    </div>
                </div>
            </div>
            <div className="md:flex md:flex-row md:justify-around">
                <div className=" flex flex-col p-6 mt-10 items-center h-[200px] md:w-[500px]  md:h-[400px]  bg-[#C2F6FF08] rounded-2xl">
                    <div className="flex flex-row ">
                        <p className="font-semibold text-xl">My Skills</p>
                        <img src={Logo} alt="Logo-icone" />
                    </div>
                    <p className="pt-4">The Advanced Technologies I Use ✨ </p>
                </div>
                <div className=" flex flex-col p-6 mt-10 bg-[#C2F6FF08] md:h-[400px] md:w-[650px] rounded-2xl">
                    <div className="flex flex-row  pb-6">
                        <p className="text-2xl font-semibold">Experience</p>
                        <img src={Experience} alt="Experience-icone" />
                    </div>
                    <div className="flex flex-col gap-4 overflow-scroll h-[400px] ">
                        <div className="flex-flex-col p-3 bg-[#C2F6FF0F] rounded-2xl">
                            <div className="flex flex-row justify-between">
                                <p>Jul. 2023 - Ago. 2023</p>
                                <div className="bg-[#38ACFF40] rounded-2xl p-1 text-[#76C6FF] text-[#63ACF1]">most recent</div>
                            </div>
                            <div className="md:flex md:flew-row w-[600px]">
                                <div className="pt-3">
                                    <p className="text-xl font-semibold pb-3">Senior Graphic Designer</p>
                                    <p>Double Square | Full-time</p>
                                </div>
                                <div className="p-3">
                                    <p>Development of internal projects from scratch, product design of brands...</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-flex-col p-3 bg-[#C2F6FF0F] rounded-2xl">
                            <div className="flex flex-row justify-between">
                                <p>Jul. 2023 - Ago. 2023</p>
                                <div className="bg-[#38ACFF40] rounded-2xl p-1 text-[#76C6FF] text-[#63ACF1]">most recent</div>
                            </div>
                            <div className="md:flex md:flew-row w-[600px]">
                                <div className="pt-3">
                                    <p className="text-xl font-semibold pb-3">Senior Graphic Designer</p>
                                    <p>Double Square | Full-time</p>
                                </div>
                                <div className="p-3">
                                    <p>Development of internal projects from scratch, product design of brands...</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-flex-col p-3 bg-[#C2F6FF0F] rounded-2xl">
                            <div className="flex flex-row justify-between">
                                <p>Jul. 2023 - Ago. 2023</p>
                                <div className="bg-[#38ACFF40] rounded-2xl p-1 text-[#76C6FF] text-[#63ACF1]">most recent</div>
                            </div>
                            <div className="md:flex md:flew-row w-[600px]">
                                <div className="pt-3">
                                    <p className="text-xl font-semibold pb-3">Senior Graphic Designer</p>
                                    <p>Double Square | Full-time</p>
                                </div>
                                <div className="p-3">
                                    <p>Development of internal projects from scratch, product design of brands...</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-flex-col p-3 bg-[#C2F6FF0F] rounded-2xl">
                            <div className="flex flex-row justify-between">
                                <p>Jul. 2023 - Ago. 2023</p>
                                <div className="bg-[#38ACFF40] rounded-2xl p-1 text-[#76C6FF] text-[#63ACF1]">most recent</div>
                            </div>
                            <div className="md:flex md:flew-row w-[600px]">
                                <div className="pt-3">
                                    <p className="text-xl font-semibold pb-3">Senior Graphic Designer</p>
                                    <p>Double Square | Full-time</p>
                                </div>
                                <div className="p-3">
                                    <p>Development of internal projects from scratch, product design of brands...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:flex md:flex-row  md:justify-evenly">
                <div className=" flex flex-col p-6 mt-10 bg-[#C2F6FF08] rounded-2xl md:w-[650px]">
                    <div className="flex flex-row  pb-6">
                        <p className="text-2xl font-semibold">Testamonial </p>
                        <img src={Icone} alt="icone" />
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
                <div className=" flex flex-col p-6 mt-10 items-center justify-center text-center  md:w-[500px] bg-[#C2F6FF08] rounded-2xl">
                    <p className="text-3xl font-semibold pb-4">Let's Create Something <br /> Great Together !</p>
                    <p>Feel free to reach out anytime you <br /> have a project idea – I’d love to <br /> collaborate!</p>
                    <div>
                        <div className="flex flex-row pt-4 border-b-2 border-gray">
                            <img src={Email} alt="email-icone" />
                            <p>berbicheaymen@gmail.com</p>
                        </div>
                        <div className="flex flex-row pt-4 border-b-2 border-gray">
                            <img src={Linkedin} alt="email-icone" />
                            <a href="linkedin.com/in/aymen-berbiche-772a13280">Reach me on LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About