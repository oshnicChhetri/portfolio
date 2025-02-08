import HeroComponentCard from "./HeroComponentCard.tsx"
import HeroComponentText from "./HeroComponentText.tsx"

const HeroComponent = () => {
  
 
  return (
    <div 
    
    className=" w-full h-auto min-h-20 flex justify-around md:justify-between align-center flex-wrap md:flex-nowrap mb-10 gap-y-10 px-20">
        <HeroComponentText/>
       <HeroComponentCard/>
    </div>
  )
}

export default HeroComponent