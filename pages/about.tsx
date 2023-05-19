import React from 'react'
import Head from 'next/head'
import Layout from '@/components/layout/Layout'
import CardGrid from '@/components/composite/CardGrid'

import { service } from "@/services/service";

export default function About({links, cards}) {
  return (
        <div>
      <Head>
        <title>Arkane Demo</title>
        <meta name='description' content='Arkane Digtal Next.js CMS Demo' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Layout links={links}>
    <div className="bg-brand-300 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Meet our team</h2>
          <p className="mt-4 text-lg leading-8 text-brand-dark">
            We’re a dynamic group of individuals who are passionate about what we do.
          </p>
        </div>
        <CardGrid type='user details' users={cards} />
      </div>
    </div>
    </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const links = await service.getFooterLinks();
  // const articles = await service.getArticles();
  const cards = await service.getCards();
  // const testimonials = await service.getTestimonials();

  return {
    props: {
      links,
      // articles,
      cards,
      // testimonials,
    }
  };
}