import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalGallery() {
  const scroller = useRef();
  const skills = useRef();

  useEffect(() => {
    const skillSet = gsap.utils.toArray('.skill-set'); // converts the NodeList from the query selector '.skill-set' into an array.

    const to = gsap.to(skillSet, {
      xPercent: () => -100 * (skillSet.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: scroller.current, //scroller.current is a reference to the React ref
        markers: true,
        pin: true,
        pinSpacing: true,
        scrub: true, // animation ties to scroll position and not timer
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (skillSet.length - 1),

        end: () => '+=' + window.innerWidth,
      },
    });

    return () => {
      to.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden flex">
      <div className="overflow-hidden ">
        <div
          id="skills"
          ref={scroller}
          className=" flex overflow-x-hidden text-white w-[400vw] m-0  relative h-screen"
        >
          <section
            ref={skills}
            className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <Image
              src="https://images.unsplash.com/photo-1531972111231-7482a960e109?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
              alt="1st image"
              layout="fill"
              objectFit="contain"
              className="max-w-[90vw] max-h-[80vh] m-auto"
            />
          </section>
          <section
            ref={skills}
            className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <Image
              src="https://images.unsplash.com/photo-1604328702728-d26d2062c20b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="2ndimage"
              layout="fill"
              objectFit="contain"
              className="max-w-[90vw] max-h-[80vh] m-auto"
            />
          </section>
          <section
            ref={skills}
            className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <Image
              src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="3rdimage"
              layout="fill"
              objectFit="contain"
              className="max-w-[90vw] max-h-[80vh] m-auto"
            />
          </section>
          <section
            ref={skills}
            className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <Image
              src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1792&q=80"
              alt="4thimage"
              layout="fill"
              objectFit="contain"
              className="max-w-[90vw] max-h-[80vh] m-auto"
            />
          </section>
        </div>
      </div>
    </div>
  );
}