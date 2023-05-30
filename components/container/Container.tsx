import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
  bgImageUrl?: string;
}

export default function Container({ children, className = "", bgImageUrl = "" }: ContainerProps): React.ReactElement {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bgImageUrl && imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 3, ease: "power2.inOut" }
      );
    }
  }, [bgImageUrl]);

  const bgImage = {
    backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : "",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  return (
    <>
      {bgImageUrl && (
        <div ref={imageRef} style={bgImage}>
          <div className={`flex items-center ${className}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center">{children}</div>
            </div>
          </div>
        </div>
      )}
      {!bgImageUrl && (
        <div className={`flex items-center ${className}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
