import React from 'react'
import Head from 'next/head'
import Layout from '@/components/layout/Layout'
import CardGrid from '@/components/composite/CardGrid'

import { service } from "@/services/service";
import Container from '@/components/container/Container';
import ContainerLight from '@/components/container/ContainerLight';

export default function About({ links, cards }) {
  return (
    <div>
      <Head>
        <title>Arkane Demo</title>
        <meta name='description' content='Arkane Digtal Next.js CMS Demo' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Layout links={links}>
        <Container>
          <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
            <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-brand-800 xl:text-5xl">
              Our Philosophy
            </h2>
            <p className="max-w-2xl mt-6 text-center text-brand-dark text-xl xl:text-xl">
              With an average of over 20 years of experience in the digital space, our founders have the expertise to deliver quality solutions to the most complex projects and challenges.
              <br />
              <br />
              We built this agency to put our expertise to work for clients while creating a human-centric workplace that prioritizes values over profits.
              <br />
              <br />
              We believe in quality, expertise, and humbleness.
              <br />
              <br />
              We value our relationships and look forward to doing business with you.
            </p>
          </div>
        </Container>

        <ContainerLight>
          <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-brand-700 sm:text-4xl">Meet our team</h2>
              <p className="mt-4 text-lg leading-8 text-brand-dark">
                We’re a dynamic group of individuals who are passionate about what we do.
              </p>
            </div>
            <CardGrid type='user details' users={cards} />
          </div>
        </ContainerLight>
      </Layout>
    </div >
  )
}

export async function getStaticProps() {
  const [links, cards] = await Promise.all([
    service.getFooterLinks(),
    service.getCards()
  ]);

  return {
    props: {
      links,
      cards,
    }
  };
}