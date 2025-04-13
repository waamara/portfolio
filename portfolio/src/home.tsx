import Bgimg from "../../portfolio/src/assets/backgr.png"
import Seepng from "../../portfolio/src/assets/see.png"
import Dowlandpng from "../../portfolio/src/assets/dowland.png"
import Mypic from "../../portfolio/src/assets/me.jpg"
import Pointimg from "../../portfolio/src/assets/point.png"
import Foldericone from "../../portfolio/src/assets/folder.png"
import Img from "../../portfolio/src/assets/img.png"
import More from "../../portfolio/src/assets/More.png"
import Fram from "../../portfolio/src/assets/Frame.png"

const home = () => {
    return (
        <div style={{
            backgroundImage: `url($Bgimg)`,
        }}
            className="text-white bg-gray-950 opacity-100  p-8">
            <p className="text-2xl font-semibold">Hello it's Aymen </p> <br />
            <p>I'm a frontend developer with a passion for crafting pixel-perfect, user-friendly interfaces. I believe in clean, efficient code and building responsive websites that provide the best user experience, no matter the device.</p>
            <div className='flex flex-col pt-4'>
                <div className='flex flex-row items-center justify-between '>
                    <p className="font-semibold">Resume</p>
                    <button className="flex flex-row bg-[#C2F6FF08] p-2 rounded-md">
                        <p>See cv </p>
                        <img src={Seepng} alt="icone" />
                    </button>
                    <button className="flex flex-row bg-[#C2F6FF08] p-2 rounded-md">
                        <p>Dowland Cv </p>
                        <img src={Dowlandpng} alt="icone" />
                    </button>
                </div>
                <div className='flex flex-row items-center justify-between pt-4'>
                    <p className="font-semibold">Follow On</p>
                    <a className="bg-[#C2F6FF08] p-2 rounded-md"
                        href="linkedin.com/in/aymen-berbiche-772a13280">Linkedin</a>
                    <a className="bg-[#C2F6FF08] p-2 rounded-md"
                        href="">Instagram</a>
                    <a className="bg-[#C2F6FF08] p-2 rounded-md"
                        href="https://github.com/waamara">Github</a>
                </div>
            </div>
            <div className="p-12">
                <img src={Mypic} alt="My-img " />
            </div>
            <div className='flex flex-row justify-evenly'>
                <div className=" bg-[#C2F6FF08] p-2 rounded-md flex flex-row">
                    <img src={Pointimg} alt="icone" />
                    <p className="text-2xl">Available For work</p>
                </div>
                <div className=" bg-[#C2F6FF08] p-2 rounded-md flex flex-row">
                    <img src={Pointimg} alt="icone" />
                    <p className="text-2xl">Algeria</p>
                </div>
            </div>
            <div className=" flex flex-col p-10 mt-10 items-center justify-center bg-[#C2F6FF08] rounded-2xl">
                <img src={Img} alt="img" />
                <button className="bg-[#38ACFF40] p-2 rounded-md flex flex-row">
                    <p>view works</p>
                    <img src={Foldericone} alt="folder-icone" />
                </button>
            </div>
            <div className=" flex flex-col p-6 mt-10 items-center h-[200px]  bg-[#C2F6FF08] rounded-2xl">
                <p className="font-semibold">My Skills</p>
                <button className="bg-[#38ACFF40] p-2 rounded-md flex flex-row">
                    <p>More About Me</p>
                    <img src={More} alt="folder-icone" />
                </button>
            </div>
            <p className="text-2xl pt-8">Popular Repo</p>
            <div className=" flex flex-col p-10 mt-10 items-center justify-center bg-[#C2F6FF08] rounded-2xl">
                <div>
                    <p>project-name-from-yr-repo</p>
                    <p>Public</p>
                </div>
                <div>
                    <p>simple note app using Javascript...</p>
                </div>
                <div>
                    <p>Javascript </p>
                    <p>4 </p>
                </div>
            </div>
            <div className=" flex flex-col p-4 mt-10 bg-[#C2F6FF08] rounded-2xl">
                <div className="flex flex-row justify-between pb-6">
                    <p className="text-xl">My Github Contribution</p>
                    <div className=" bg-[#38ACFF40] rounded-2xl p-2"><p className="text-[#76C6FF]">2024</p></div>
                </div>
                <img src={Fram} alt="Github-contribution-img" />
            </div>

        </div>
    )
}

export default home