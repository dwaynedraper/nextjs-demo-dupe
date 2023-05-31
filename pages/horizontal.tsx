import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import HorizontalGallery from '@/components/composite/HorizontalGallery';
import Layout from '@/components/layout/Layout';
import { service } from '@/services/service';
import Centered2x2Grid from '@/components/composite/Centered2x2Grid';


export default function HorizontalScroller({ links }) {
  return (<div>
    <Head>
      <title>Arkane Demo</title>
      <meta name='description' content='Arkane Digtal Next.js CMS Demo' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
    <Layout links={links}>
      <div className="overflow-hidden">
        <div className=" w-screen h-screen bg-brand-dark flex items-center justify-center  text-primary font-bungee text-7xl">
          <Centered2x2Grid />
        </div>
        <HorizontalGallery />
        <div className="w-screen h-screen bg-brand-light flex items-center justify-center text-primary font-bungee text-7xl">
          <div>That&apos;s it!</div>
        </div>
      </div>      </Layout>
  </div>
  );
}

export async function getStaticProps() {
  const [links] = await Promise.all([
    await service.getFooterLinks(),
  ]);

  return {
    props: {
      links,
    }
  };
}
