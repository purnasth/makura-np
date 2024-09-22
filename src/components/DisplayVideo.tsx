import React, { useRef, useState, useEffect } from "react";
import { HiOutlineSpeakerWave, HiOutlineSpeakerXMark } from "react-icons/hi2";
import {
  TbPlayerPlay,
  TbPlayerPause,
  TbPictureInPicture,
} from "react-icons/tb";
import { BiFullscreen } from "react-icons/bi";

interface DisplayVideoProps {
  poster: string;
  video: string;
  videoClassName: string;
}

const DisplayVideo: React.FC<DisplayVideoProps> = ({
  poster,
  video,
  videoClassName,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(false); // Start unmuted
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true); // Track if video is playing

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (isPlaying) {
              videoRef.current?.play();
            }
          } else {
            videoRef.current?.pause();
            // Mute the video when not in view
            if (videoRef.current) {
              videoRef.current.muted = false;
              setIsMuted(false);
            }
          }
        });
      },
      { threshold: 0 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [isPlaying]);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!isFullscreen) {
        videoRef.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  const handlePiP = () => {
    if (videoRef.current && document.pictureInPictureEnabled) {
      if (document.pictureInPictureElement) {
        document.exitPictureInPicture();
      } else {
        videoRef.current.requestPictureInPicture();
      }
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying((prev) => !prev);
    }
  };

  return (
    <section className="relative group max-w-[100vw] overflow-hidden">
      <video
        ref={videoRef}
        className={`${videoClassName}`}
        autoPlay
        loop
        playsInline
        preload="auto"
        poster={poster}
        muted={isMuted}
      >
        <source src={video} type="video/mp4" />
        <track src="#" kind="captions" srcLang="en" label="english_captions" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 right-0 size-fit h-screen translate-x-24 group-hover:translate-x-0 transition-all duration-500 ease-linear z-20 flex items-center justify-center">
        <svg
          version="1.2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 73 569"
          className="w-auto h-72 object-contain pointer-events-none"
        >
          <defs>
            <image
              width="73"
              height="1037"
              id="img1"
              href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAQNAQMAAAArO/X2AAAAAXNSR0IB2cksfwAAAAZQTFRFAAAAAAAApWe5zwAAAAJ0Uk5TAP9bkSK1AAABqUlEQVR4nO3YMXLCMBCFYXsoXHIEjuLJUXKElCkydm7GUTgCJQWDI2l3NQ95iYA4kMy8VF+jlUyq/dvG/saWJEmSJEmSJJ/IdngSVx8Lsnv/KddvFW5eK+xfrufQepw+v2d78rg6euwOHtf7zM3OY7/1OIyZU2NsTx67Q+Z6n7nZZfbbzGHMnBpjmGUMs4xhljEMMIYBynhKGU8p4yllPKWMp4TplHB1zEynhOmUMJ0STo1RBiSma4UyIDF8uFFmJcqskjI2UsdGyrsS9YaCelmkXlZQ7y2o9xbUJ5zTXnOR9sZz2huvoX3ENbRPu5H27YvQfrLH0P4VJEmSJEmSJEn+Fz52Z6hy0X3ozp0MWF37blkn/YUUWF1p/U34wtbsb9j+Ng7rur/Pw8IPGQDiABLqAeQFiA6QIiBQ6B1FzMDEAeEDcghEEkgnMmKWWSC+pHOzUJPOzaMOpB4IQHHEvBBBN8KwBLkJIhSkqTDNaVcQt5BQv/w8Bv0MAhvQj3FQ6/yyB7zQBv2O6LMaJauFs9pIfd5ZZBcNxMDfCtp/oeaTJEmSJEmS5JxfhzXgu3BP99kAAAAASUVORK5CYII="
            />
          </defs>
          <style></style>
          <use id="Layer 2" href="#img1" x="0" y="-230" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
          <button
            onClick={togglePlayPause}
            className="text-light/70 hover:text-light text-xl p-1 hover:bg-light/20 outline outline-[0.5px] outline-light/0 hover:outline-light/50 rounded-full transition-all duration-300 hover:scale-110"
          >
            {isPlaying ? <TbPlayerPause /> : <TbPlayerPlay />}
          </button>

          <button
            onClick={toggleMute}
            className="text-light/70 hover:text-light text-xl p-1 hover:bg-light/20 outline outline-[0.5px] outline-light/0 hover:outline-light/50 rounded-full transition-all duration-300 hover:scale-110"
          >
            {isMuted ? <HiOutlineSpeakerXMark /> : <HiOutlineSpeakerWave />}
          </button>

          <button
            onClick={toggleFullscreen}
            className="text-light/70 hover:text-light text-xl p-1 hover:bg-light/20 outline outline-[0.5px] outline-light/0 hover:outline-light/50 rounded-full transition-all duration-300 hover:scale-110"
          >
            <BiFullscreen />
          </button>

          <button
            onClick={handlePiP}
            className="text-light/70 hover:text-light text-xl p-1 hover:bg-light/20 outline outline-[0.5px] outline-light/0 hover:outline-light/50 rounded-full transition-all duration-300 hover:scale-110"
          >
            <TbPictureInPicture />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DisplayVideo;
