import Bgimg from "../../portfolio/src/assets/backgr.png"
import Seepng from "../../portfolio/src/assets/see.png" 
import Dowlandpng from "../../portfolio/src/assets/dowland.png"


const home = () => {
    return (
        <div 
        style={{
            backgroundImage: `url($Bgimg)`,
        }}
        className="text-white bg-blue-950  bg-opacity-80 p-8">
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
                    <a  className="bg-[#C2F6FF08] p-2 rounded-md"
                        href="linkedin.com/in/aymen-berbiche-772a13280">Linkedin</a>
                    <a  className="bg-[#C2F6FF08] p-2 rounded-md"
                        href="">Instagram</a>
                    <a  className="bg-[#C2F6FF08] p-2 rounded-md"
                        href="https://github.com/waamara">Github</a>
                </div>
            </div>
            <div>
                <img src="" alt="no img yet" />
            </div> 
            <div className='flex flex-row'> 
                <div>
                    <p>Available For work</p>
                </div>
                <div>
                    <p>Algeria</p>
                </div>
            </div>
            <div>
                <button>
                    <p>view works</p>
                </button>
            </div>
            <div>
                <button>
                    <p>More About Me </p>
                </button>
            </div>
            <div>
                <p>Popular Repo</p>
            </div>
            <div>
                <p>My Github Contibution</p>
            </div>
        </div>
    )
}

export default home