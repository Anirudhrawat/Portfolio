import React from 'react';
import { HashRouter } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Education} from './components';
const App = () => {
  return (
    <HashRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        {/* <Tech /> */}
        <Works />
        <Education/>
        {/* <Feedbacks /> */}
        <div className="relative z-0">
        <Contact />
        <StarsCanvas />
        </div>
      </div>
    </HashRouter>
  )
}

export default App
