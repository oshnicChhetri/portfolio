import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { SiPhp } from "react-icons/si";

import {useState, useRef, useEffect} from "react";
import  useIsInViewport  from "../hooks/InView.ts";

interface Technologie {
    name: string;
    icon: JSX.Element;
    className: string;
    animationClass: string;
  }

  const technologies: Technologie[] = [
    {
      name: "React",
      icon: <FaReact />,
      className: "text-blue-500",
      animationClass: "odd",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      className: "text-green-500",
        animationClass: "even",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      className: "text-green-500",
        animationClass: "odd",
    },
    {
      name: "MySQL",
      icon: <TbBrandMysql />,
      className: "text-blue-500",
        animationClass: "even",
    },
    {
      name: "PHP",
      icon: <SiPhp />,
      className: "text-purple-500",
        animationClass: "odd",
    }
  ];

const Technologie = () => {
  
//   const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const viewPort = useIsInViewport(ref);
  

//   const isElementInViewPort = (element: HTMLElement) => {
//     if(!element) return false;
//     const rect = element.getBoundingClientRect();
//     let isInView = (
//       rect.top >= 0 && rect.left >= 0
//       && rect.bottom <= (window.innerHeight) && rect.right <= (window.innerWidth)
//     );
//     return isInView;
//   }

//   useEffect(() =>{

//     const visibility = ()=>{
//       if(ref.current){
//         setIsInView(isElementInViewPort(ref.current));
        
//       }
//     }
//     visibility();
// window.addEventListener("scroll", visibility);
//     window.addEventListener("resize", visibility);

//     return () => {
//       window.removeEventListener("scroll", visibility);
//       window.removeEventListener("resize", visibility);
//     };

//   },[])

  

  return (
    <div ref={ref}  className={`${viewPort ? "up" : ""} p-8  shadow-lg mx-4 sm:mx-6 md:mx-10`}>
      <h1 className="text-3xl font-semibold mb-6 text-center text-white">Technologies</h1>

      <div   className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {technologies.map((technologie) => (
          <div 

            key={technologie.name}
            className={`${technologie.animationClass} flex flex-col items-center text-center border-solid border-2 border-gray-300 rounded-2xl p-4`}
          >
            <div className={`text-6xl mb-4 ${technologie.className}`}>
              {technologie.icon}
            </div>
            <p className="text-lg font-medium text-gray-700">{technologie.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologie;
