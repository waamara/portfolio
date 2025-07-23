import Js from "../assets/Vector (2).png"
import Java from "../assets/Vector (3).png"
import ReactLogo from "../assets/Vector (4).png"
import Tailwind from "../assets/Vector (5).png"
import Notion from "../assets/Vector (6).png"
import Vscode from "../assets/Vector (7).png"


const OrbitingTools = () => {
  return (
    <div className="relative w-[350px] h-[350px] mx-auto my-12">
      {/* Static circles */}
      <div className="absolute inset-0 rounded-full border border-[#1E90FF22]"></div>
      <div className="absolute inset-[30px] rounded-full border border-[#1E90FF22]"></div>
      <div className="absolute inset-[60px] rounded-full border border-[#1E90FF22]"></div>

      {/* Rotating icons */}
      <div className="absolute inset-0 animate-spin-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2">
          <img src={Js} alt="JS" className="w-8 h-8" />
        </div>
        <div className="absolute top-[20%] right-4">
          <img src={Notion} alt="Notion" className="w-8 h-8" />
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2">
          <img src={ReactLogo} alt="React" className="w-8 h-8" />
        </div>
        <div className="absolute bottom-[20%] right-4">
          <img src={Tailwind} alt="Tailwind" className="w-8 h-8" />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <img src={Java} alt="Java" className="w-8 h-8" />
        </div>
       
        <div className="absolute top-1/2 left-0 -translate-y-1/2">
          <img src={Vscode} alt="VSCode" className="w-8 h-8" />
        </div>
        
      </div>
    </div>
  );
};

export default OrbitingTools;

