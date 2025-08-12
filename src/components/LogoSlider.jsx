import React from "react";
import "./LogoSlider.css"; 

const logos = [
  "/Shape_2.png",
  "/Shape_5.png",
  "/Combined Shape.png",
  "/Shape_5.png",
  "/Path.png",
  "/Shape.png",
  "/Shape_10.png"
];

function LogoSlider() {
  return (
    <div className="overflow-hidden bg-white py-4 container mx-auto">
      <div className="flex scroll-animation whitespace-nowrap">
        {logos.concat(logos).map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center gap-4 justify-center w-20 sm:w-28 md:w-36 h-12 sm:h-16 md:h-20 mx-2 sm:mx-4"
          >
            <img
              src={logo}
              alt={`logo-${index}`}
              className="max-h-full max-w-full gap-4 object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoSlider;
