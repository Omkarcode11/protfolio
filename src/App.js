import { useEffect, useState } from 'react';
import Contact from './components/Contact/Contact';
import DotGroup from './components/DotGroup/DotGroup';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing/Landing';
import LineGradient from './components/LineGradient/LineGradient';
import MySkills from './components/MySkills/MySkills';
import Navbar from './components/Navbar/Navbar';
import ProjectPrev from './components/ProjectPrev/ProjectPrev';
import Projects from './components/Projects/Projects';
import useMediaQuery from './hooks/useMediaQuery';


function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
      window.addEventListener('scroll', handleScroll);
      return () => window.addEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />}

        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Contact />
      </div>
     <Footer/>      
    </div>
  );
}

export default App;
