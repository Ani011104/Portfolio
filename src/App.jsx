import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Beyond } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Routes>
          <Route path="/" element={
            <>
              <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Navbar />
                <Hero />
              </div>
              <div className='relative z-0'>
                <About />
                <Experience />
                <Tech />
                <Works />
                <Contact />
                <StarsCanvas />
              </div>
            </>
          } />
          <Route path="/beyond" element={
            <>
              <Navbar />
              <Beyond />
            </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
