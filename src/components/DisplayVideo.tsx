import React, { useRef, useState, useEffect } from "react";

import { HiOutlineSpeakerWave, HiOutlineSpeakerXMark } from "react-icons/hi2";

import {
  TbPlayerPlay,
  TbPlayerPause,
  TbPictureInPicture,
} from "react-icons/tb";

import { MdFullscreen, MdFullscreenExit } from "react-icons/md";

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
    <section className="relative group w-screen overflow-hidden">
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

      <div className="absolute inset-0 flex items-end justify-center flex-col space-y-4 p-4 translate-x-24 group-hover:translate-x-0 transition-all duration-500">
        <button
          onClick={togglePlayPause}
          className="bg-black/20 hover:bg-light/20 backdrop-blur outline outline-1 outline-light/30 hover-outline text-light/80 text-2xl px-3 py-1 rounded-full transition-all duration-300"
        >
          {isPlaying ? <TbPlayerPause /> : <TbPlayerPlay />}
        </button>

        <button
          onClick={toggleMute}
          className="bg-black/20 hover:bg-light/20 backdrop-blur outline outline-1 outline-light/30 hover-outline text-light/80 text-2xl px-3 py-1 rounded-full transition-all duration-300"
        >
          {isMuted ? <HiOutlineSpeakerXMark /> : <HiOutlineSpeakerWave />}
        </button>

        <button
          onClick={toggleFullscreen}
          className="bg-black/20 hover:bg-light/20 backdrop-blur outline outline-1 outline-light/30 hover-outline text-light/80 text-2xl px-3 py-1 rounded-full transition-all duration-300"
        >
          {isFullscreen ? <MdFullscreenExit /> : <MdFullscreen />}
        </button>

        <button
          onClick={handlePiP}
          className="bg-black/20 hover:bg-light/20 backdrop-blur outline outline-1 outline-light/30 hover-outline text-light/80 text-2xl px-3 py-1 rounded-full transition-all duration-300"
        >
          <TbPictureInPicture />
        </button>
      </div>
    </section>
  );
};

export default DisplayVideo;
