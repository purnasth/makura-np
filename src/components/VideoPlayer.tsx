import React, { useRef } from "react";

interface VideoPlayerProps {
  poster: string;
  video: string;
  videoClassName: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  poster,
  video,
  videoClassName,
}) => {
  const videoRef = useRef(null);

  return (
    <section className="relative">
      {/* <div className="pointer-events-none absolute inset-0 size-full bg-gradient-to-b from-black/60 to-black/40 z-0 opacity-90 mix-blend-darken" /> */}
      <video
        ref={videoRef}
        className={`${videoClassName}`}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={poster}
      >
        <source src={video} type="video/mp4" />
        <track
          src="#"
          kind="captions"
          srcLang="en"
          label="english_captions"
        ></track>
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 size-full flex items-center justify-end flex-col text-light pb-8 2xl:pb-12 space-y-6">
        <span className="text-base uppercase opacity-90">Makura</span>
        <h2 className="text-5xl text-light">Wear the Spirit with Makura</h2>
        <div className="w-px h-28 bg-light/50 bottom-0"></div>
        <button className="group relative text-light hover:text-white transition-all duration-500 hover:scale-110">
          <span className="absolute -bottom-px -right-0 w-full h-px bg-light/60 group-hover:scale-x-0 origin-center transition-all duration-300 ease-linear"></span>
          Explore Products
        </button>
      </div>
    </section>
  );
};

export default VideoPlayer;
