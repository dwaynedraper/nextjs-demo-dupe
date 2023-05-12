import React from "react";
import { BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import styles from "@/styles/Footer.module.scss";
import { Montserrat } from "next/font/google";
import { FooterLinkP } from "@/services/types";
const montserrat = Montserrat({ subsets: ["latin"] });

interface FooterProps {
  links: FooterLinkP[];
}

/**
 * This is a dynamically populated footer that will take an array of links and
 * display them in a footer. The links are grouped by section.
 * This is the base, extendable version. If you extend, extend the name: e.g. FooterKontent
 * @param {links} props An array of {section, url, displayText, key(optional)}
 * @returns A JSX element with a dynamically populated footer
 */
export default function Footer({ links }: FooterProps): React.ReactElement {
  const footerLinks = {};
  links.forEach((link) => {
    if (footerLinks[link.section] === undefined) {
      footerLinks[link.section] = [];
    }
    footerLinks[link.section].push(link);
  });

  return (
    <div
      className={`${styles.footer} ${montserrat.className} px-5 pt-7`}
    >
      <div className='md:container mx-auto'>
        <footer className='py-5 w-full'>
          <div className='flex w-full flex-row justify-between'>
            {Object.keys(footerLinks).map((key, index) => (
              <div
                className={`border-t-2 pt-2 w-full ${index !== Object.keys(footerLinks).length - 1
                  ? "md:me-5"
                  : "md:me-0"
                  }`}
                key={key}
              >
                <h5 className='text-uppercase text-white font-semibold pb-2 md:pb-0'>
                  {key}
                </h5>
                <ul className='nav flex-col'>
                  {footerLinks[key].map((item, index) => (
                    <li className='nav-item mb-2' key={item.key ?? index}>
                      <a href={item.url} className='nav-link p-0 text-white'>
                        {item.displayText}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className='flex flex-col md:flex-row justify-between pt-4 mt-4 border-t text-white'>
            <p className='text-sm md:text-base'>
              © 2022 Arkane Digital, LLC. All rights reserved.
            </p>
            <ul className='list-none flex mt-1'>
              <li>
                <BsLinkedin className='nav-link p-0 text-white' />
              </li>
              <li className='md:ms-3'>
                <BsFacebook className='nav-link p-0 text-white' />
              </li>
              <li className='md:ms-3'>
                <BsTwitter className='nav-link p-0 text-white' />
              </li>
              <li className='md:ms-3'>
                <FiMail className='nav-link p-0 text-white' />
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
