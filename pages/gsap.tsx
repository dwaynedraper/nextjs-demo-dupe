// React/Next imports
import React, { useRef, useLayoutEffect } from 'react'

// Components
import Container from '@/components/container/Container';
import Layout from '@/components/layout/Layout';
import ContainerLight from '@/components/container/ContainerLight';

// Other imports
import { service } from '@/services/service';
import { FooterLinkP } from '@/services/types';
import { gsap } from 'gsap'
import { ScrambleTextPlugin } from 'gsap/dist/ScrambleTextPlugin'
import styles from '@/styles/GSAP.module.scss'
import Link from 'next/link';
import ContainerDark from '@/components/container/ContainerDark';
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
      gsap.from(".left", { duration: 1, x: -300, ease: "power2" })
      gsap.from(".right", { duration: 1.5, x: 700, ease: "power2" })

      const tl = gsap.timeline({ defaults: { duration: 2, ease: "none" } });

      tl.to("#scramble", { duration: 1, scrambleText: { text: "At Arkane Digital, we believe in a \"Strategy First\" approach. Specializing in headless Content Management Systems (CMS), we provide your business with the tools necessary to prosper in today's digital age.", chars: "upperAndLowerCase" } })
        .to("#charsCustom", { duration: 1, scrambleText: { text: "Headless CMS represents a breakthrough in content management. It separates back-end content creation and storage from front-end presentation, enabling multi-platform content distribution—from websites and mobile apps to IoT devices and beyond—with ease.", chars: "upperAndLowerCase" } })
        .to("#charsNumbers", { duration: 0.5, scrambleText: { text: "However, the power of headless CMS comes with its complexities. This is where Arkane Digital shines. Our team of adept software consultants is committed to unlocking this potent technology's potential for your business. We begin with a comprehensive understanding of your business and its unique needs. Then, we devise a strategic plan, customized for your business, to integrate headless CMS into your digital infrastructure smoothly and efficiently.", chars: "upperAndLowerCase" } })
        .to("#charsUppercase", { duration: 0.5, scrambleText: { text: "Whether you're just starting with headless CMS or looking to optimize an existing system, Arkane Digital stands ready to guide you. We possess the knowledge and experience to navigate this technology's intricacies, ensuring you maximize its benefits while minimizing any challenges.", chars: "upperAndLowerCase" } })
        .to("#charsLowercase", { duration: 0.5, scrambleText: { text: "At Arkane Digital, you're not just engaging a software consultancy—you're gaining a dedicated partner in your digital journey. Our commitment is to put your business strategy at the forefront of every decision. With a \"Strategy First\" approach, we help you take control of your digital landscape, making headless CMS a cornerstone of your digital strategy.", chars: "upperAndLowerCase" } })
        .to("#newClass", { duration: 0.5, scrambleText: { text: "Contact us today to get started.", chars: "upperAndLowerCase", newClass: "text-primary underline text-2xl" } })

      // GSDevTools.create({ animation: tl, minimal: true });
    }, box)

    return () => ctx.revert();
  }, [doIt])

  return (
    <Layout links={links}>
      <ContainerLight>

        <div ref={box} className='mx-auto'>
          <div className='mx-auto pt-12 text-center'>
            <span className='text-primary text-8xl font-bold inline-block left'>Strategy </span>
            <span className='text-blue-700 text-8xl font-bold inline-block right'> First</span>
          </div>
          <div className='mx-auto py-12 demo'>
            <div id="textblock" className='max-w-5xl text-xl p-12 bg-brand-light shadow-xl rounded-lg text-brand-dark'>
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
      </ContainerLight>
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