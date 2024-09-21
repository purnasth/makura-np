import React from "react";
// import Display from "./components/Display";
import Navbar from "./components/ui/Navbar";
import About from "./components/About";

import img1 from "./assets/img1.jpg";
import Footer from "./components/ui/Footer";
import InstagramWall from "./components/ui/InstagramWall";
import VideoPlayer from "./components/VideoPlayer";

// import makuraVideo from "./assets/video/makura.mp4";
import makuraVideo2 from "./assets/video/makuraa2.mp4";
import makuraLandscape from "./assets/video/makura_landscape.mp4";
import DisplayVideo from "./components/DisplayVideo";

const App: React.FC = () => {
  return (
    <>
      {/* <Display /> */}
      <Navbar />
      <VideoPlayer
        poster={img1}
        video={makuraVideo2}
        videoClassName="w-full h-80 sm:h-[50vh] sm:min-h-96 lg:h-[36rem] xl:h-[115vh] 2xl:h-[115vh] object-cover z-10"
      />
      <About />
      <DisplayVideo
        poster={img1}
        video={makuraLandscape}
        videoClassName="w-full h-80 sm:h-[50vh] sm:min-h-96 lg:h-[36rem] xl:h-[105vh] object-cover z-10"
      />
      <InstagramWall />
      <Footer />
    </>
  );
};

export default App;
