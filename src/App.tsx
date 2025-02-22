import Navbar from './components/Navbar';
import HeroComponent from './components/HeroComponent.tsx';

import Technologie from './components/Technologie.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';

const App = () => {

 
  return (
    <>
      <div
      
      className="relative min-h-screen overflow-x-hidden overflow-y-auto">
        <div className=" ">
          
          {/* <div className=" top-0 z-[-2] min-h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(121,120,199,0))]"> */}
<Navbar />
         
            <HeroComponent />
            <Technologie/>
            <Projects/>
            <Contact/>
          
          
          </div>
        </div>
      {/* </div> */}

       

       
            
    </>
  );
};

export default App;
