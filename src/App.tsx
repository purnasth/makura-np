import React from "react";
// import Display from "./components/Display";
import Navbar from "./components/ui/Navbar";
import About from "./components/About";

import img1 from "./assets/img1.jpg";
import Footer from "./components/ui/Footer";
import InstagramWall from "./components/ui/InstagramWall";
import VideoPlayer from "./components/VideoPlayer";

import makuraVideo from "./assets/video/makura.mp4";
import makuraVideo2 from "./assets/video/makuraa2.mp4";

const App: React.FC = () => {
  return (
    <>
      {/* <Display /> */}
      <Navbar />
      <VideoPlayer
        poster={img1}
        video={makuraVideo}
        videoClassName="w-full h-80 sm:h-[50vh] sm:min-h-96 lg:h-[36rem] xl:h-[110vh] object-cover z-10"
      />
      <About />
      <InstagramWall />
      <Footer />
    </>
  );
};

export default App;
