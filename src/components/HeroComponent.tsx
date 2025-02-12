import HeroComponentCard from "./HeroComponentCard.tsx"
import HeroComponentText from "./HeroComponentText.tsx"

const HeroComponent = () => {
  
 
  return (
    <div 
    
    className=" w-full h-auto min-h-20 flex justify-around lg:justify-between align-center flex-wrap lg:flex-nowrap mb-10 gap-y-10 px-20">
        <HeroComponentText/>
       <HeroComponentCard/>
    </div>
  )
}



export default HeroComponent;