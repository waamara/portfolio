import Githubi from "../assets/Overlay+Shadow (4).png"
import Emaili from "../assets/Overlay+Shadow (5).png"
import Linkdini from "../assets/Overlay+Shadow (1).png"
import Pointimg from "../assets/point.png"
import Switch from "../assets/switch.png"
import Ficone from "../assets/Icon (1).png"
import Sicone from "../assets/Icon (2).png"

const OrbitingTools = () => {
    return (
        <div className="relative w-[300px] h-[300px] mx-auto my-12">
            {/* Cercles concentriques */}
            <div className="absolute inset-0 rounded-full border border-blue-600 animate-spin-slow"></div>
            <div className="absolute inset-4 rounded-full border border-blue-500 animate-spin-slower"></div>
            <div className="absolute inset-8 rounded-full border border-blue-400 animate-spin-slowest"></div>

            {/* Icônes/images positionnées */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2">
                <img src={Githubi} alt="GitHub" className="w-6 h-6" />
            </div>
            <div className="absolute top-10 left-6">
                <img src={Linkdini} alt="LinkedIn" className="w-6 h-6" />
            </div>
            <div className="absolute top-1/2 left-0 -translate-y-1/2">
                <img src={Switch} alt="Switch" className="w-6 h-6" />
            </div>
            <div className="absolute bottom-10 left-10">
                <img src={Emaili} alt="Email" className="w-6 h-6" />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <img src={Ficone} alt="Icon 1" className="w-6 h-6" />
            </div>
            <div className="absolute bottom-10 right-10">
                <img src={Sicone} alt="Icon 2" className="w-6 h-6" />
            </div>
            <div className="absolute top-10 right-6">
                <img src={Pointimg} alt="Point" className="w-6 h-6" />
            </div>
        </div>
    );
};

export default OrbitingTools;
