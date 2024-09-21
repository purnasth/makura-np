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
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 size-full bg-gradient-to-b from-black/60 to-black/40 z-0 opacity-90 mix-blend-darken" />
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
    </div>
  );
};

export default VideoPlayer;
