import React from "react";
// import Display from "./components/Display";
import Navbar from "./components/ui/Navbar";

const App: React.FC = () => {
  return (
    <>
      {/* <Display /> */}
      <Navbar />
      <section className="h-screen bg-gradient-to-r from-dark/80 via-dark/30 to-dark/80">
      </section>

      <section className="h-screen"></section>
    </>
  );
};

export default App;
