import React, { Suspense, useRef, useState, useEffect } from "react";
import { SectionWrapper } from "../hco";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";

const BallFallback = () => (
  <div className="w-28 h-28 rounded-full bg-white/5 animate-pulse" />
);

const Tech = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map(technology => (
        <div className="w-28 h-28" key={technology.name}>
          {visible ? (
            <Suspense fallback={<BallFallback />}>
              <BallCanvas icon={technology.icon} />
            </Suspense>
          ) : (
            <BallFallback />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");