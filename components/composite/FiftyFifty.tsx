import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface FiftyFiftyProps {
  children?: [React.ReactNode, React.ReactNode];
  animate?: boolean;
  scrub?: boolean;
}

export default function FiftyFifty({ animate, children, scrub = false }: FiftyFiftyProps): React.ReactElement {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useLayoutEffect(() => {
    if (!animate) return;

    const scrollTriggerOptions = {
      trigger: leftRef.current,
      start: "top 70%",
      end: "bottom 40%",
      toggleActions: "restart none none none",
      scrub: scrub,
    };

    gsap.fromTo(
      leftRef.current,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: scrollTriggerOptions,
      }
    );
    gsap.fromTo(
      rightRef.current,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: scrollTriggerOptions,
      }
    );
  }, [animate]);

  const childrenArray: React.ReactNode[] = React.Children.toArray(children);
  return (
    <>
      <div ref={leftRef} className='w-full md:w-1/2'>{childrenArray[0]}</div>
      <div ref={rightRef} className='w-full md:w-1/2'>{childrenArray[1]}</div>
    </>
  );
}
