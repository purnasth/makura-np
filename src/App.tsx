import React from "react";
// import Display from "./components/Display";
import Navbar from "./components/ui/Navbar";
import About from "./components/About";

import img1 from "./assets/img1.jpg";
import Footer from "./components/ui/Footer";

const App: React.FC = () => {
  return (
    <>
      {/* <Display /> */}
      <Navbar />
      <section className="h-screen bg-gradient-to-r from-dark/80 via-dark/30 to-dark/80">
        <img src={img1} alt="" className="size-full object-contain bg-black" />
      </section>
      <About />

      <Footer />
    </>
  );
};

export default App;
