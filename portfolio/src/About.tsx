import Bgimg from "../../portfolio/src/assets/backgr.png"
import Mypic from "../../portfolio/src/assets/me.jpg"
import Star from "../../portfolio/src/assets/star.png" 
import Logo from "../../portfolio/src/assets/logo.png"

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
        </div>
    )
}


export default About