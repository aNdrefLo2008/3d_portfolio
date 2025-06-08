import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function LazyLoadVideo({ srcMp4, srcOgg, className, fallbackImage }) {
  const [isInView, setIsInView] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px', 
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div ref={videoRef} className="relative">
      {!isInView && (
        <img
          src={fallbackImage}
          alt="Fallback"
          className={`${className} absolute top-0 left-0 w-full h-full object-cover rounded-3xl`}
        />
      )}
      {isInView && (
        <motion.video
          autoPlay
          muted
          loop
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className={className}
          onLoadedData={() => setIsVideoLoaded(true)} // Video loaded successfully
          onError={() => setIsVideoLoaded(false)} // Error loading video
        >
          <source src={srcMp4} type="video/mp4" />
          <source src={srcOgg} type="video/ogg" />
          Your browser does not support the video tag.
        </motion.video>
      )}
      {!isVideoLoaded && isInView && (
        <img
          src={fallbackImage}
          alt="Fallback"
          className={`${className} absolute top-0 left-0 w-full h-full object-cover rounded-3xl`}
        />
      )}
    </div>
  );
}

export default LazyLoadVideo;
