

const HeroComponentCard = () => {
  const handleMouseMove = (e: React.MouseEvent) => { 
    const rect = e.currentTarget.getBoundingClientRect();
   const width = rect.width;
   const height = rect.height;
console.log(width, height);
   const mouseX = e.clientX - rect.left;
   const mouseY = e.clientY - rect.top;
   console.log(mouseX, mouseY);
  }


 


  return (
    <div
  onMouseMove ={handleMouseMove} 

      className="hero-container w-full md:w-[45%] px-4 py-12 sm:px-6 lg:px-8  relative"
    style = {{
        transformStyle: "preserve-3d",
    }}
     
    >
      <div
      
        className="h-full bg-white w-full shadow-lg rounded-lg p-6 flex items-center justify-center transition-transform duration-300"
        
      >
        <p className="text-red-700 font-extrabold text-9xl text-center">OR</p>
      </div>
    </div>
  );
};

export default HeroComponentCard;
