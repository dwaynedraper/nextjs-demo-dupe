import React from "react";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import { FooterLinkP } from "@/services/types";
// TODO: Footer links should be converted back to props.links once everything is working

interface LayoutProps {
  children: React.ReactNode;
  links: FooterLinkP[];
}

/**
 * Layout is a top level wrapper that will wrap every page in `/pages`.
 */
export default function Layout(props: LayoutProps): React.ReactElement {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <NavBar />
      <main>{props.children}</main>
      <Footer links={props.links} />
    </div>
  );
}
