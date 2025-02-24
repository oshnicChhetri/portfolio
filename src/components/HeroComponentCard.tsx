import { useState, useEffect, useRef } from "react";
import useIsInViewport from "../hooks/InView";

const HeroComponentCard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const viewPortCard = useIsInViewport(ref);
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xP = mouseX / width; // Percentage for X axis
    const yP = mouseY / height; // Percentage for Y axis

    setX(xP);
    setY(yP);
  };

  // Reset the tilt back to zero when not hovered
  useEffect(() => {
    if (!isHovered) {
      setX(0.5); 
      setY(0.5); 
    }
  }, [isHovered]);

  return (
    <div
    ref = {ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${viewPortCard ? "cardComponent" : ""} w-full lg:w-[40%] border-solid border-red-800 border-2 rounded-2xl px-4 py-12 sm:px-6 lg:px-8 relative`}
      style={{
        transformStyle: "preserve-3d",
        transform: `rotateX(${(y - 0.5) * 50}deg) rotateY(${(x - 0.5) * 50}deg)`, 
        transition: "transform 0.2s ease-out",
      }}
    >
      <div
        className="h-full bg-slate-900  w-full shadow-lg rounded-lg p-6 flex items-center justify-center transition-transform duration-300"
         style={{
        // transformStyle: "preserve-3d",
        transform: `rotateX(${(y - 0.5) * 50}deg) rotateY(${(x - 0.5) * 50}deg)`, 
        transition: "transform 0.2s ease-out",
      }}
      >
        <p className="text-red-700 font-extrabold text-9xl text-center">OR</p>
      </div>
    </div>
  );
};

export default HeroComponentCard;
