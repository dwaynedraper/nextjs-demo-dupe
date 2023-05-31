import React, { useLayoutEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import { gsap } from "gsap";

interface ImageBounceProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageBounce({ src, alt, className }: ImageBounceProps): React.ReactElement {
  useLayoutEffect(() => {

    gsap.to(".bounce", {
      y: "-=20", // move up by 20px
      repeat: -1, // repeat indefinitely
      yoyo: true, // go back to the original place every second round
      duration: 2.5, // the duration of one complete cycle
      ease: "power1.inOut" // easing function to make the motion smooth
    });
  }, [])

  return (
    <div className={`${className}`}>
      <Image src={src} alt={alt} className='bounce' />
    </div>
  );
}
