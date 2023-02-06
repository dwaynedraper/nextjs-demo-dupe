import React from "react";
import { BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

// export default function Footer({ account, exploreArkane, getInTouch }) {
export default function Footer(props) {
  console.log("Footer props", props);
  let footerLinks = {};
  props.links.results.forEach((link) => {
    if (footerLinks[link.section] === undefined) {
      footerLinks[link.section] = [];
    }
    footerLinks[link.section].push(link);
  });

  return (
    <div className='container-fluid px-5 vw-100 bg-brand mt-7'>
      <div className='container'>
        <footer className='py-5'>
          <div className='d-flex w-100 flex-row justify-space-between'>
            {/* Account */}
            <div className='col-6 col-md-3 mb-3 border-top border-2 pt-2'>
              <h5 className='text-uppercase text-light'>Account</h5>
              <ul className='nav flex-column'>
                {footerLinks.account.map((item, index) => (
                  <li className='nav-item mb-2' key={index}>
                    <a href={item.url} className='nav-link p-0 text-light'>
                      {item.displayText}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='col-md-1'></div>

            {/* Explore */}
            <div className='col-6 col-md-3 mb-3 border-top border-2 pt-2'>
              <h5 className='text-uppercase text-light'>Explore Arkane</h5>
              <ul className='nav flex-column'>
                {footerLinks.explore.map((item, index) => (
                  <li className='nav-item mb-2' key={index}>
                    <a href={item.url} className='nav-link p-0 text-light'>
                      {item.displayText}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='col-md-1'></div>

            {/* Contact */}
            <div className='col-6 col-md-3 mb-3 border-top border-2 pt-2'>
              <h5 className='text-uppercase text-light'>Get In Touch</h5>
              <ul className='nav flex-column'>
                {footerLinks.contact.map((item, index) => (
                  <li className='nav-item mb-2' key={index}>
                    <a href={item.url} className='nav-link p-0 text-light'>
                      {item.displayText}
                    </a>
                  </li>
                ))}
                <ul className='list-unstyled d-flex mt-1'>
                  <li>
                    <BsLinkedin className='nav-link p-0 text-light' />
                  </li>
                  <li className='ms-3'>
                    <BsFacebook className='nav-link p-0 text-light' />
                  </li>
                  <li className='ms-3'>
                    <BsTwitter className='nav-link p-0 text-light' />
                  </li>
                  <li className='ms-3'>
                    <FiMail className='nav-link p-0 text-light' />
                  </li>
                </ul>
              </ul>
            </div>
          </div>

          <div className='d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top text-light'>
            <p>© 2022 Arkane Digital, LLC. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
