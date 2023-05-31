// React/Next imports
import React, { useRef, useLayoutEffect } from 'react'
import Link from 'next/link';

// Components
import Container from '@/components/container/Container';
import ContainerDark from '@/components/container/ContainerDark';
import ContainerLight from '@/components/container/ContainerLight';
import CTADark from '@/components/content/CTADark';
import FiftyFifty from '@/components/composite/FiftyFifty';
import ImageBounce from '@/components/content/ImageBounce';
import Layout from '@/components/layout/Layout';
import ParallaxSection from '@/components/container/ParallaxSection';

// Other imports
import { service } from '@/services/service';
import { FooterLinkP } from '@/services/types';
import { gsap } from 'gsap';
import logoWhite from "@/public/arkane-square-logo-white.svg";
import { ScrambleTextPlugin } from 'gsap/dist/ScrambleTextPlugin'
import styles from '@/styles/GSAP.module.scss'
// import { GSDevTools } from 'gsap/GSDevTools';

gsap.registerPlugin(ScrambleTextPlugin);

interface GSAPProps {
  links: FooterLinkP[];
}

export default function GSAP({ links }: GSAPProps): React.ReactElement {
  const box = useRef();
  const [doIt, setDoIt] = React.useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".left", { duration: 2, x: -300, ease: "power4" })
      gsap.from(".right", { duration: 3, x: 700, ease: "bounce" })

      const tl = gsap.timeline({ defaults: { duration: 2, ease: "none" } });

      tl.to("#scramble", { duration: 1, scrambleText: { text: "At Arkane Digital, we believe in a \"Strategy First\" approach. Specializing in headless Content Management Systems (CMS), we provide your business with the tools necessary to prosper in today's digital age.", chars: "ARK", oldClass: "text-primary" } })
        .to("#charsCustom", { duration: 1, scrambleText: { text: "Headless CMS represents a breakthrough in content management. It separates back-end content creation and storage from front-end presentation, enabling multi-platform content distribution—from websites and mobile apps to IoT devices and beyond—with ease.", chars: "ARKANE", oldClass: "text-primary" } })
        .to("#charsNumbers", { duration: 0.5, scrambleText: { text: "However, the power of headless CMS comes with its complexities. This is where Arkane Digital shines. Our team of adept software consultants is committed to unlocking this potent technology's potential for your business. We begin with a comprehensive understanding of your business and its unique needs. Then, we devise a strategic plan, customized for your business, to integrate headless CMS into your digital infrastructure smoothly and efficiently.", chars: "numbers", oldClass: "text-primary" } })
        .to("#charsUppercase", { duration: 0.5, scrambleText: { text: "Whether you're just starting with headless CMS or looking to optimize an existing system, Arkane Digital stands ready to guide you. We possess the knowledge and experience to navigate this technology's intricacies, ensuring you maximize its benefits while minimizing any challenges.", chars: "upperAndLowerCase", oldClass: "text-primary" } })
        .to("#charsLowercase", { duration: 0.5, scrambleText: { text: "At Arkane Digital, you're not just engaging a software consultancy—you're gaining a dedicated partner in your digital journey. Our commitment is to put your business strategy at the forefront of every decision. With a \"Strategy First\" approach, we help you take control of your digital landscape, making headless CMS a cornerstone of your digital strategy.", chars: "upperAndLowerCase", oldClass: "text-primary" } })
        .to("#newClass", { duration: 0.5, scrambleText: { text: "Contact Us", chars: "upperAndLowerCase", oldClass: "text-primary", newClass: "text-primary underline text-4xl opacity-100" } })

      // GSDevTools.create({ animation: tl, minimal: true });
    }, box)

    return () => ctx.revert();
  }, [doIt])

  return (
    <Layout links={links}>
      <Container
        bgImageUrl='https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=710&q=80'
      >

        <div ref={box} className='mx-auto min-h-screen text-center'>
          <div className='mx-auto pt-12'>
            <span className='text-primary-hover text-8xl font-extrabold inline-block left'>Strategy&nbsp;</span>
            <span className='text-primary text-8xl font-extrabold inline-block right'>First</span>
          </div>
          <div className='mx-auto py-12 demo'>
            <div id="textblock" className='max-w-5xl text-2xl p-12 bg-brand-dark shadow-xl rounded-lg text-brand-lighter bg-opacity-90'>
              <div id="scramble"></div>
              <br />
              <div id="charsCustom"></div>
              <br />
              <div id="charsNumbers"></div>
              <br />
              <div id="charsUppercase"></div>
              <br />
              <div id="charsLowercase"></div>
              <br />
              <Link href='/'>
                <div id="newClass"></div>
              </Link>
            </div>
          </div>
        </div>
      </Container>

    </Layout>
  )
}

export async function getStaticProps() {
  const [links] = await Promise.all([
    service.getFooterLinks()
  ]);
  return {
    props: {
      links
    }
  }
}