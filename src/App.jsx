import React, { useState, useRef } from 'react';
import { Navbar, NavigationDots } from './components/index';
import { About, Contact, Footer, Home, Skills, Work } from './pages';

const App = () => {
  const [toggleShow, setToggleShow] = useState(false);
  const targetRef = useRef(null);

  const handleClickOutside = (event) => {
    if (!targetRef.current?.contains(event.target)) {
      setToggleShow(false);
    } 
  };

  return (
    <div className='flex flex-col selection:bg-black/10 selection:dark:bg-white/10' onClick={handleClickOutside}>
      <Navbar toggleShow={toggleShow} setToggleShow={setToggleShow} targetRef={targetRef} />
      <NavigationDots />
      <Home />
      <Skills />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
