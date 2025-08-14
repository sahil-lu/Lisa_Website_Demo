import React, { useEffect, useRef, useState } from 'react';

interface VideoBackgroundProps {
  videoSrc: string;
  onVideoEnd?: () => void;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoSrc, onVideoEnd }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Start playing the video
    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log('Video autoplay failed:', error);
      }
    };

    playVideo();

    // Intersection Observer to detect when video is out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (video.paused) {
            playVideo();
          }
        } else {
          setIsVisible(false);
          video.pause();
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of video is visible
        rootMargin: '0px 0px -100px 0px' // Stop before completely out of view
      }
    );

    if (video) {
      observer.observe(video);
    }

    // Handle video end
    const handleVideoEnd = () => {
      if (onVideoEnd) {
        onVideoEnd();
      }
    };

    video.addEventListener('ended', handleVideoEnd);

    return () => {
      if (video) {
        observer.unobserve(video);
        video.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, [onVideoEnd]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
        autoPlay
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
};

export default VideoBackground;
