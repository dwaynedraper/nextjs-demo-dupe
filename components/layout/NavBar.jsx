//React and Next imports
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { FiChevronDown, FiChevronRight } from "react-icons/fi"

// External imports
import ArkaneLogo from "@/public/arkane-logo-trans-white.svg";
import styles from "@/styles/NavBar.module.scss";

// Components
import NavSection from "@/components/layout/NavSection";
import Megamenu from "@/components/layout/Megamenu";
import MegamenuMultilevel from "@/components/layout/MegamenuMultilevel";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Navbar() {
  const [currentMegamenu, setCurrentMegamenu] = useState(null);
  const [currentLink, setCurrentLink] = useState(null);

  const handleMouseEnter = (menuName) => {
    setCurrentMegamenu(menuName);
  };

  const handleMouseLeave = () => {
    setCurrentMegamenu(null);
  };

  const handleLinkHover = (linkName) => {
    setCurrentLink(linkName);
  };

  const handleLinkLeave = () => {
    setCurrentLink(null);
  };

  return (
    <nav
      className={`bg-brand-dark text-brand-light ${montserrat.className} ${styles["nav-arkane"]} shadow-lg relative`}
      onMouseLeave={handleMouseLeave}
    >
      {/* Logo and nav items */}
      <div
        className={`container mx-auto px-4 py-2 flex items-center justify-between ${styles.navbar}`}
      >
        <Link href={"/"}>
          <Image
            src={ArkaneLogo}
            alt='Arkane Digital Logo'
            width={250}
            height={50}
          />
        </Link>
        <div className='ml-8 hidden lg:block'>
          <ul className='flex items-center space-x-4'>
            <li onMouseEnter={() => handleMouseEnter("menu2")}>
              Home
              <FiChevronDown className='inline-block ml-1 font-semibold' />
            </li>
            <li onMouseEnter={() => handleMouseEnter("menu1")}>
              Services
              <FiChevronDown className='inline-block ml-1 font-semibold' />
            </li>
            <li onMouseEnter={() => handleMouseLeave()}>About</li>
            <li onMouseEnter={() => handleMouseEnter("menu3")}>
              Multi-Level
              <FiChevronDown className='inline-block ml-1 font-semibold' />
            </li>
          </ul>
        </div>
        <div className='ml-auto hidden lg:block'>
          <input
            className='bg-brand-lighter text-brand-dark px-4 py-2 rounded'
            type='search'
            placeholder='Search'
          />
        </div>
      </div>

      {/* Megamenu */}
      {currentMegamenu === "menu1" && (
        <Megamenu>
          <NavSection
            category="Development"
            links={[
              "Web Application Development",
              "Mobile Application Development",
              "Custom Software Development",
              "API Integration Services"
            ]}
          />

          <NavSection
            category="Design"
            links={[
              "User Interface Design",
              "User Experience Design",
              "Graphic Design",
              "Brand Identity Services",
            ]}
          />

          <NavSection
            category="Consulting"
            links={[
              "IT Strategy Consulting",
              "Project Management Consulting",
              "Technical Consulting",
              "Business Process Improvement",
            ]}
          />

          <NavSection
            category="Training"
            links={[
              "Software Development Training",
              "Project Management Training",
              "Technical Training",
              "Leadership Development",
            ]}
          />
        </Megamenu>
      )}
      {currentMegamenu === "menu2" && (
        <Megamenu>
          <NavSection
            category="The Company"
            links={[
              "Overview",
              "Our team",
            ]}
          />

          <NavSection
            category="Our Clients"
            links={[
              "Fintech",
              "Commercial Real Estate",
            ]}
          />

          <div className="bg-brand-light">
            <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Boost your productivity.
                <br />
                Start using our app today.
              </h2>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-sm bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900 hover:bg-brand-lighter">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </Megamenu>
      )}
      {currentMegamenu === "menu3" && (
        <MegamenuMultilevel handleLinkLeave={handleLinkLeave}>
          <div className='w-1/4 border-r border-brand-dark me-10'>
            <div className='flex flex-col'>
              <div className={`${styles.subcategory}`} onMouseEnter={() => handleLinkHover("link1")}>Design and Development<FiChevronRight className="inline-block ml-1 font-semibold" /></div>
              <div className={`${styles.subcategory}`} onMouseEnter={() => handleLinkHover("link2")}>Consulting and Training<FiChevronRight className="inline-block ml-1 font-semibold" /></div>
              <div className={`${styles.subcategory}`} onMouseEnter={() => handleLinkHover("link3")}>Development<FiChevronRight className="inline-block ml-1 font-semibold" /></div>
            </div>
          </div>
          {currentLink === "link1" && (
            <>
              <NavSection
                category="Design"
                links={[
                  "User Interface Design",
                  "User Experience Design",
                  "Graphic Design",
                  "Brand Identity Services",
                ]}
              />
              <NavSection
                category="Development"
                links={[
                  "Web Application Development",
                  "Mobile Application Development",
                  "Custom Software Development",
                  "API Integration Services"
                ]}
              />
            </>
          )}
          {currentLink === "link2" && (
            <>
              <NavSection
                category='Consulting'
                links={[
                  'IT Strategy Consulting',
                  'Project Management Consulting',
                  'Technical Consulting',
                  'Business Process Improvement'
                ]} />
              <NavSection
                category='Training'
                links={[
                  'Software Development Training',
                  'Project Management Training',
                  'Technical Training',
                  'Leadership Development'
                ]} />
            </>
          )}
          {currentLink === "link3" && (
            <>
              <NavSection
                links={[
                  'IT Strategy Consulting',
                  'Project Management Consulting',
                  'Technical Consulting',
                  'Business Process Improvement'
                ]} />
              <NavSection
                links={[
                  'Software Development Training',
                  'Project Management Training',
                  'Technical Training',
                  'Leadership Development'
                ]} />
            </>
          )}
        </MegamenuMultilevel>
      )}
    </nav>
  );
}
