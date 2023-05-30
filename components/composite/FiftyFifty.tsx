import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface FiftyFiftyProps {
  children?: [React.ReactNode, React.ReactNode];
  animate?: boolean;
}

export default function FiftyFifty({ animate, children }: FiftyFiftyProps): React.ReactElement {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useLayoutEffect(() => {
    if (!animate) return;

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
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "restart none none none",
        },
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
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "restart none none none",
        },
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
