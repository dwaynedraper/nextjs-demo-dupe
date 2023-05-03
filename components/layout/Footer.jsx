import React from "react";
import { BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import styles from "@/styles/Footer.module.scss";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Footer(props) {
  let footerLinks = {};
  props.links.results.forEach((link) => {
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
                key={index}
              >
                <h5 className='text-uppercase text-white font-semibold pb-2 md:pb-0'>
                  {key}
                </h5>
                <ul className='nav flex-col'>
                  {footerLinks[key].map((item, index) => (
                    <li className='nav-item mb-2' key={index}>
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
