"use client"
import { useEffect, useRef, useState } from "react";

interface VideoBackgroundProps {
  videoSource: string;
  children?: React.ReactNode;
}

interface TextOverlayProps {
  title: string;
  description: string;
}

interface ButtonProps {
  label: string;
  onClick: () => void;
  href?: string; // Adding href for the anchor tag
}

function Button({ label, onClick, href }: ButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        className="bg-transparent mt-8 border-2 hover:bg-black text-white font-bold py-2 px-4 rounded inline-block"
      >
        {label}
      </a>
    );
  } else {
    return (
      <button
        className="bg-transparent border-2 hover:bg-black text-white font-bold py-2 px-4 rounded"
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
}

function isYouTubeURL(url: string): boolean {
  return url.includes("youtu.be") || url.includes("youtube.com");
}

function VideoBackground({ videoSource, children }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.muted = true;
      isPlaying ? videoElement.play() : videoElement.pause();
    }
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div className="relative px-12">
      {isYouTubeURL(videoSource) ? (
        <iframe
          src={videoSource.replace("watch?v=", "embed")}
          className="w-[75rem]  h-[100vh] object-cover"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      ) : (
        <video
          ref={videoRef}
          className="w-[75rem] h-[100vh] object-cover rounded-xl"
          autoPlay
          loop
          muted
        >
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <div className="absolute bottom-0 left-0 right-0 bg-transparent p-4 text-white text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button
            label={isPlaying ? " Pause video" : "Play video"}
            onClick={togglePlayPause}
          />
        </div>
      </div>

      {children}
    </div>
  );
}

function BgVideo() {
  return (
    <div className="py-8">
    <VideoBackground videoSource="https://res.cloudinary.com/dyqtzsm0b/video/upload/v1720547466/fvop2wtlyqdj0m3dexkd.mp4"/>
    </div>
  );  
}
export default BgVideo;