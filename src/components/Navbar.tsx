

import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

interface Icon {
  name: string,
  component: JSX.Element,
  link: string
}

const Navbar = () => {

    const icons : Icon[] = [
    { name: "GitHub", component: <FaGithub className="size-10 text-red-500" /> , link : "https://github.com/oshnicChhetri" },
    { name: "LinkedIn", component: <FaLinkedin className="size-10 text-red-500" /> , link : "https://www.linkedin.com/in/osh-nick-a716b9243/"}
   
  ];
  return (
    <div className="w-full min-h-20 h-auto flex flex-wrap justify-between items-center px-6 md:px-10 py-4 mb-10">
      {/* Logo */}
      <div className="w-full md:w-auto flex justify-center md:justify-start">
        <h1 className="text-4xl md:text-6xl font-bold text-red-800">OR</h1>
      </div>

      

      <div className="flex justify-center md:justify-end w-full md:w-1/4 items-center gap-6 md:gap-4 mt-2 md:mt-0">
      <a
  href="./Resume.pdf"  // Path to your resume file
  download="Oshnic-Resume.pdf"  // Optional: specify a default file name for the download
  className="bg-red-500 text-white text-lg font-semibold w-auto py-2 px-4 border-solid border-white border-2 rounded-md shadow-lg hover:bg-red-600 transition-colors flex items-center space-x-2"
>
      
      
        <span><MdOutlineFileDownload  className="size-7 "/></span>
  Resume 
  
</a>

     {icons.map((icon)=>(

     <a key={icon.name} href={icon.link} target="_blank"> <span key={icon.name}>{icon.component }</span></a> 
     ))}

   



 
</div>

    </div>
  );
};

export default Navbar;




