import React from "react";
import { BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

export default function Footer({ account, exploreArkane, getInTouch }) {
  return (
    <div className='container-fluid px-5 vw-100 bg-brand mt-7'>
      <div className='container'>
        <footer className='py-5'>
          <div className='d-flex w-100 flex-row justify-space-between'>
            <div className='col-6 col-md-3 mb-3 border-top border-2 pt-2'>
              <h5 className='text-uppercase text-light'>Account</h5>
              <ul className='nav flex-column'>
                {account.map((item, index) => (
                  <li className='nav-item mb-2' key={index}>
                    <a href={item.href} className='nav-link p-0 text-light'>
                      {item.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='col-md-1'></div>
            <div className='col-6 col-md-3 mb-3 border-top border-2 pt-2'>
              <h5 className='text-uppercase text-light'>Explore Arkane</h5>
              <ul className='nav flex-column'>
                {exploreArkane.map((item, index) => (
                  <li className='nav-item mb-2' key={index}>
                    <a href={item.href} className='nav-link p-0 text-light'>
                      {item.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className='col-md-1'></div>
            <div className='col-6 col-md-3 mb-3 border-top border-2 pt-2'>
              <h5 className='text-uppercase text-light'>Get In Touch</h5>
              <ul className='nav flex-column'>
                {getInTouch.map((item, index) => (
                  <li className='nav-item mb-2' key={index}>
                    <a href={item.href} className='nav-link p-0 text-light'>
                      {item.value}
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

          <div className='d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top'>
            <p>© 2022 Company, Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
