//React and Next imports
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";

// External imports
import ArkaneLogo from "@/public/arkane-logo-trans-white.svg";
import styles from "@/styles/NavBar.module.scss";

const montserrat = Montserrat({ subsets: ["latin"] });

const Navbar = () => {
  const [currentMegamenu, setCurrentMegamenu] = useState(null);

  const handleMouseEnter = (menuName) => {
    setCurrentMegamenu(menuName);
  };

  const handleMouseLeave = () => {
    setCurrentMegamenu(null);
  };

  return (
    <nav
      className={`bg-brand-dark text-brand-light ${montserrat.className} ${styles["nav-arkane"]} shadow-lg relative`}
      onMouseLeave={handleMouseLeave}
    >
      {/* Logo and nav items */}
      <div className='container mx-auto px-4 py-2 flex items-center justify-between'>
        <Link href={"/"}>
          <Image
            src={ArkaneLogo}
            alt='Arkane Digital Logo'
            width={250}
            height={50}
          />
        </Link>
        <div className='ml-8'>
          <ul className='flex items-center space-x-4'>
            <li onMouseEnter={() => handleMouseEnter("menu1")}>Services</li>
            <li onMouseEnter={() => handleMouseEnter("menu2")}>Our Team</li>
            <li onMouseEnter={() => handleMouseEnter("menu3")}>Arkane</li>
          </ul>
        </div>
        <div className='ml-auto'>
          <input
            className='bg-brand-lighter text-brand-dark px-4 py-2 rounded'
            type='search'
            placeholder='Search'
          />
        </div>
      </div>

      {/* Megamenu */}
      {currentMegamenu && (
        <div
          className='absolute top-full left-0 w-full z-50 megamenu bg-brand-dark text-brand-light pt-2 border-t-2 border-brand-light'
          onMouseLeave={handleMouseLeave}
        >
          <div className='container mx-auto px-4 py-2'>
            {/* Column 1 */}
            <div className='left-column w-1/4'>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className='right-column-1 w-1/4'>
              {/* Add content based on the value of currentMegamenu */}
            </div>

            {/* Column 3 */}
            <div className='right-column-2 w-1/4'>
              {/* Add content based on the value of currentMegamenu */}
            </div>

            {/* Optional Column 4 */}
            <div className='right-column-3 w-1/4'>
              {/* Add content based on the value of currentMegamenu */}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
