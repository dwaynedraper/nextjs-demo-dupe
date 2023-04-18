import React, { useState } from "react";

const MegaMenu = () => {
  const [showAboutMenu, setShowAboutMenu] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [activeMenus, setActiveMenus] = useState([]);

  const handleAboutHover = () => {
    setShowAboutMenu(true);
    setShowServicesMenu(false);
  };

  const handleServicesHover = () => {
    setShowAboutMenu(false);
    setShowServicesMenu(true);
  };

  const handleMouseLeave = () => {
    setShowAboutMenu(false);
    setShowServicesMenu(false);
  };

  return (
    <div className='bg-black p-3'>
      <div
        className='container mega-menu d-flex text-white'
        onMouseLeave={handleMouseLeave}
      >
        <div className='menu-item' onMouseEnter={handleAboutHover}>
          About
          {showAboutMenu && (
            <div className='mega-menu-content'>
              {/* Render the mega-menu content for 'About' category */}
              <ul>
                <li>About Us</li>
                <li>Our Team</li>
                <li>Our Vision</li>
              </ul>
            </div>
          )}
        </div>
        <div className='menu-item' onMouseEnter={handleServicesHover}>
          Services
          {showServicesMenu && (
            <div className='mega-menu-content'>
              {/* Render the mega-menu content for 'Services' category */}
              <ul>
                <li>Web Development</li>
                <li>Mobile App Development</li>
                <li>UI/UX Design</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
