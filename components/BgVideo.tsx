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

function TextOverlay({ title, description }: TextOverlayProps) {
  return (
    <div className="text-center mb-12">
      <h1 className="text-[3.75rem] hover:text-neutral-300 font-semibold mb-4 lg:px-44 xl:px-44">{title}</h1>
      {/* <p className="text-lg">{description}</p> */}
    </div>
  );
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
    <div className="relative">
      {isYouTubeURL(videoSource) ? (
        <iframe
          src={videoSource.replace("watch?v=", "embed")}
          className="w-full h-[100vh] object-cover"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      ) : (
        <video
          ref={videoRef}
          className="w-full h-[100vh] object-cover"
          autoPlay
          loop
          muted
        >
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <div className="absolute bottom-0 left-0 right-0 bg-transparent p-4 text-white text-center">
        <TextOverlay
          title="Creating safe AGI that benefits all of humanity"
          description="Explore the amazing content we have to offer."
        />
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
    <VideoBackground videoSource="https://res.cloudinary.com/dyqtzsm0b/video/upload/v1720547466/fvop2wtlyqdj0m3dexkd.mp4"></VideoBackground>
  );
  
}

export default BgVideo;