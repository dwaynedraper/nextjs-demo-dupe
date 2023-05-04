import React from 'react'
import Footer from '@/components/layout/Footer';
import convertKontentToFooter from '@/utilities/parse-kontent';

/**
 * This is a dynamically populated footer that will take an array of links and
 * display them in a footer. The links are grouped by section.
 * This extends the base Footer component with Kontent.ai data
 * @param {links} props An array of {section, url, displayText, key(optional)}
 * @returns A JSX element with a dynamically populated footer
 */
export default function FooterKontent({ links }) {
  const parsedLinks = convertKontentToFooter(links);
  return (
    <Footer links={parsedLinks} />
  )
}
