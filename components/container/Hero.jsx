import React, { useEffect, useRef } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { BsChevronCompactDown } from "react-icons/bs";

/**
 * This component is meant to be a top level wrapper component in the main content area of a page.
 * It is a container for a component in the components\composite folder.
 * @returns {React.ReactElement} A wrapper component for a layout element.
 */
export default function Hero({ children }) {
  const iconRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        iconRef.current.style.opacity = "0";
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className='w-screen front-page flex items-center relative'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center'>{children}</div>
      </div>
      <div
        ref={iconRef}
        className='absolute bottom-1 left-1/2 transform -translate-x-1/2 text-white text-9xl transition-opacity duration-1000'
      >
        <BsChevronCompactDown />
      </div>
    </div>
  );
}
