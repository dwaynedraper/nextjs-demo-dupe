import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import Container from '@/components/container/Container';
import Layout from '@/components/layout/Layout';
import { service } from '@/services/service';
import ContainerLight from '@/components/container/ContainerLight';
import { FooterLinkP } from '@/services/types';

interface GSAPProps {
  links: FooterLinkP[];
}

export default function GSAP({ links }: GSAPProps): React.ReactElement {
  const box = useRef();
  const [doIt, setDoIt] = React.useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      doIt && gsap.from(".left", { duration: 1.5, x: -300, ease: "power4" })
      gsap.from(".right", { duration: 2, x: 300, ease: "power2" })
    }, box)

    return () => ctx.revert();
  }, [doIt])

  return (
    <Layout links={links}>
      <ContainerLight>
        <div ref={box} className='mx-auto'>
          <span className='text-blue-500 text-8xl font-bold inline-block left'>Design </span>
          <span className='text-primary text-8xl font-bold inline-block left'>Strategy </span>
          <span className='text-blue-500 text-8xl font-bold inline-block right'> First</span>
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