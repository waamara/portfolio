"use client"

import { useEffect, useState } from "react" // Removed Image import

const icons = [
  // Icons positioned on the outermost "ring" or slightly above the main arc
  { src: "../../src/assets/Vector (2).png", alt: "JS", baseAngle: 20, radius: 160 },
  { src: "../../src/assets/Vector (3).png", alt: "Java", baseAngle: 160, radius: 160 },
  { src: "../../src/assets/Vector (4).png", alt: "VSCode", baseAngle: 30, radius: 120 },

  // Icons positioned on the middle "ring"
  { src: "../../src/assets/Vector (6).png", alt: "GitHub", baseAngle: 50, radius: 80 },
  { src: "../../src/assets/Vector (7).png", alt: "Notion", baseAngle: 90, radius: 80 },
  
  // Icon positioned on the innermost "ring"
  { src: "../../src/assets/Vector (5).png", alt: "React", baseAngle: 150, radius: 120 },
]

const OrbitingTools = () => {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => (prevRotation + 0.1) % 360)
    }, 16)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative  my-12 flex h-[180px] w-[350px] bg-transparent items-end justify-center overflow-hidden rounded-2xl  -mt-[0.01px]  pb-0.5">
      {/* Subtle dotted background pattern */}
      <div
        className=""
      ></div>

      {/* Concentric Semicircle backgrounds */}
      <div className="absolute bottom-0 left-1/2 z-10 h-[160px] w-[320px] -translate-x-1/2 rounded-t-full border-t border-[#2E73F31A] bg-[#1E90FF05]"></div>
      <div className="absolute bottom-0 left-1/2 z-20 h-[110px] w-[210px] -translate-x-1/2 rounded-t-full border-t border-[#2E73F329] bg-[#1E90FF08]"></div>
      <div className="absolute bottom-0 left-1/2 z-30 h-[60px] w-[110px] -translate-x-1/2 rounded-t-full border-t border-[#2E73F31F] bg-[#1E90FF0B]"></div>

      {/* Rotating container for icons */}
      <div
        className="absolute h-full w-full"
        style={{
          transformOrigin: "center bottom",
          transform: `rotate(${rotation}deg)`,
        }}
      >
        {icons.map(({ src, alt, baseAngle, radius }, index) => {
          const rad = (baseAngle * Math.PI) / 180
          const x = radius * Math.cos(rad)
          const y = radius * Math.sin(rad)

          return (
            <img
              key={index}
              src={src || "/placeholder.svg"} // Use the direct string path
              alt={alt}
              width={32} // Set a fixed width for the icons
              height={32} // Set a fixed height for the icons
              className="absolute h-8 w-8"
              style={{
                left: `calc(50% + ${x}px - 16px)`,
                top: `calc(100% - ${y}px - 16px)`,
                transform: `rotate(-${rotation}deg)`,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default OrbitingTools
