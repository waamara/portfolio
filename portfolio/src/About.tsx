import Bgimg from "../../portfolio/src/assets/backgr.png"
import Mypic from "../../portfolio/src/assets/me.jpg"
import Star from "../../portfolio/src/assets/star.png"
import Logo from "../../portfolio/src/assets/logo.png"
import Experience from "../../portfolio/src/assets/experience.png"
import Linkedin from "../../portfolio/src/assets/email (7).png"
import Email from "../../portfolio/src/assets/email (1).png"



const About = () => {
    return (


        <div style={{
            backgroundImage: `url($Bgimg)`,
        }}
            className="text-white bg-gray-950 opacity-100  p-8">
            <p className="text-3xl">I Am Aymen </p> <br />
            <p>I'm Aymen, a passionate frontend developer and a computer science student at USTHB. I specialize in building modern, responsive, and user-friendly web applications using the latest technologies.</p>
            <br />
            <p>Currently, I’m the Web Development Team Lead at Open Minds Club, where I collaborate with talented developers to create impactful digital experiences.</p>
            <br />
            <div className="p-12">
                <img src={Mypic} alt="My-img " />
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
            <div className=" flex flex-col p-6 mt-10 items-center h-[200px]  bg-[#C2F6FF08] rounded-2xl">
                <div className="flex flex-row">
                    <p className="font-semibold text-xl">My Skills</p>
                    <img src={Logo} alt="Logo-icone" />
                </div>
                <p className="pt-4">The Advanced Technologies I Use ✨ </p>
            </div>
            <div className=" flex flex-col p-6 mt-10 bg-[#C2F6FF08] rounded-2xl">
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
                        <div className="pt-3">
                            <p className="text-xl font-semibold pb-3">Senior Graphic Designer</p>
                            <p>Double Square | Full-time</p>
                        </div>
                        <div className="p-3">
                            <p>Development of internal projects from scratch, product design of brands...</p>
                        </div>
                    </div>
                    <div className="flex-flex-col p-3 bg-[#C2F6FF0F] rounded-2xl">
                        <div className="flex flex-row justify-between">
                            <p>Jul. 2023 - Ago. 2023</p>
                            <div className="bg-[#38ACFF40] rounded-2xl p-1 text-[#76C6FF] text-[#63ACF1]">most recent</div>
                        </div>
                        <div className="pt-3">
                            <p className="text-xl font-semibold pb-3">Senior Graphic Designer</p>
                            <p>Double Square | Full-time</p>
                        </div>
                        <div className="p-3">
                            <p>Development of internal projects from scratch, product design of brands...</p>
                        </div>
                    </div>
                    <div className="flex-flex-col p-3 bg-[#C2F6FF0F] rounded-2xl">
                        <div className="flex flex-row justify-between">
                            <p>Jul. 2023 - Ago. 2023</p>
                            <div className="bg-[#38ACFF40] rounded-2xl p-1 text-[#76C6FF] text-[#63ACF1]">most recent</div>
                        </div>
                        <div className="pt-3">
                            <p className="text-xl font-semibold pb-3">Senior Graphic Designer</p>
                            <p>Double Square | Full-time</p>
                        </div>
                        <div className="p-3">
                            <p>Development of internal projects from scratch, product design of brands...</p>
                        </div>
                    </div>
                    <div className="flex-flex-col p-3 bg-[#C2F6FF0F] rounded-2xl">
                        <div className="flex flex-row justify-between">
                            <p>Jul. 2023 - Ago. 2023</p>
                            <div className="bg-[#38ACFF40] rounded-2xl p-1 text-[#76C6FF] text-[#63ACF1]">most recent</div>
                        </div>
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
            <div className=" flex flex-col p-6 mt-10 items-center justify-center text-center  bg-[#C2F6FF08] rounded-2xl">
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
    )
}


export default About