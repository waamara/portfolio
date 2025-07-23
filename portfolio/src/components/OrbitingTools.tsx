import Js from "../assets/Vector (2).png"
import Java from "../assets/Vector (3).png"
import ReactLogo from "../assets/Vector (4).png"
import Tailwind from "../assets/Vector (5).png"
import Notion from "../assets/Vector (6).png"
import Vscode from "../assets/Vector (7).png"



const icons = [
  { src: Js, alt: "JS", angle: 0 },
  { src: Java, alt: "Java", angle: 25 },
  { src: ReactLogo, alt: "React", angle: 50 },
  { src: Tailwind, alt: "Tailwind", angle: 75 },
  
  { src: Vscode, alt: "VSCode", angle: 125 },
 
  { src: Notion, alt: "Notion", angle: 175 },
];

const OrbitingTools = () => {
  return (
    <div className="relative w-[350px] h-[180px] mx-auto my-12">
      {/* Semicircle background (visual only) */}
      <div className="absolute top-0 left-0 w-full h-full border-t border-[#1E90FF22] rounded-t-full"></div>

      {/* Icons placed manually along the arc */}
      {icons.map(({ src, alt, angle }, index) => {
        const radius = 130;
        const rad = (angle * Math.PI) / 180;
        const x = radius * Math.cos(rad);
        const y = radius * Math.sin(rad);

        return (
          <img
            key={index}
            src={src}
            alt={alt}
            className="absolute w-8 h-8"
            style={{
              left: `calc(50% + ${x}px - 16px)`,
              top: `${radius - y - 16}px`,
            }}
          />
        );
      })}
    </div>
  );
};

export default OrbitingTools;


