import React from "react";
// import Display from "./components/Display";
import Navbar from "./components/ui/Navbar";
import About from "./components/About";

import img1 from "./assets/img1.jpg";
import Footer from "./components/ui/Footer";
import InstagramWall from "./components/ui/InstagramWall";
// import VideoPlayer from "./components/VideoPlayer";

// import makuraVideo from "./assets/video/makura.mp4";
import makuraVideo2 from "./assets/video/makuraa2.mp4";
import makuraLandscape from "./assets/video/makura_landscape.mp4";
import DisplayVideo from "./components/DisplayVideo";
import LatestProducts from "./components/LatestProducts";
import LogoBar from "./components/ui/LogoBar";

const App: React.FC = () => {
  return (
    <>
      {/* <Display /> */}
      <Navbar />
      <section className="relative group">
        <DisplayVideo
          poster={img1}
          video={makuraVideo2}
          videoClassName="w-full h-full sm:h-[50vh] sm:min-h-96 lg:h-[36rem] xl:h-[120vh] 2xl:h-[115vh] object-cover z-10"
        />
        <div className="bg-gradient-to-t from-black/60 to-black/0 absolute inset-0 size-full z-0 flex items-center justify-end flex-col text-light pb-12 2xl:pb-12 space-y-3 md:space-y-6">
          <span className="text-sm md:text-base uppercase opacity-90">
            Makura
          </span>
          <h2 className="text-xl md:text-5xl text-light mx-8 md:mx-0 leading-relaxed shadow text-center">
            Wear the Spirit with Makura
          </h2>
          <div className="w-px h-10 md:h-28 bg-light/50 bottom-0"></div>
          <button className="group relative text-light text-sm md:text-base hover:text-white transition-all duration-500 hover:scale-110">
            <span className="absolute -bottom-px -right-0 w-full h-px bg-light/60 scale-x-0 hover:scale-x-0 group-hover:scale-x-100 origin-center transition-all duration-300 ease-linear"></span>
            Explore Products
          </button>
        </div>
      </section>
      <About />
      <DisplayVideo
        poster={img1}
        video={makuraLandscape}
        videoClassName="w-full h-80 sm:h-[50vh] sm:min-h-96 lg:h-[36rem] xl:h-[105vh] object-cover z-10"
      />
      <LatestProducts />
      <LogoBar />
      <InstagramWall />
      <Footer />
    </>
  );
};

export default App;
