// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";

import { FaGithub, FaLinkedin, FaSquareXTwitter, FaInstagram } from "react-icons/fa6";

interface Icon {
  name: string,
  component: JSX.Element
}

const Navbar = () => {

    const icons : Icon[] = [
    { name: "GitHub", component: <FaGithub className="size-8 text-red-500" /> },
    { name: "LinkedIn", component: <FaLinkedin className="size-8 text-red-500" /> },
    { name: "Twitter", component: <FaSquareXTwitter className="size-8 text-red-500" /> },
    { name: "Instagram", component: <FaInstagram className="size-8 text-red-500" /> },
  ];
  return (
    <div className="w-full min-h-20 h-auto flex flex-wrap justify-between items-center px-6 md:px-10 py-4 mb-10">
      {/* Logo */}
      <div className="w-full md:w-auto flex justify-center md:justify-start">
        <h1 className="text-4xl md:text-6xl font-bold text-red-800">OR</h1>
      </div>

      

      <div className="flex justify-center md:justify-end w-full md:w-1/4 items-center gap-6 md:gap-4 mt-2 md:mt-0">

     {icons.map((icon)=>(

      <span key={icon.name}>{icon.component }</span>
     ))}



 
</div>

    </div>
  );
};

export default Navbar;




 {/* <FaGithub className="size-8 text-red-500" />
  <FaLinkedin className="size-8 text-red-500" />
  <FaSquareXTwitter className="size-8 text-red-500" />
  <FaInstagram className="size-8 text-red-500" /> */}