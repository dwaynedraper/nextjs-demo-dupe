// Next imports
import React from "react";
import Head from "next/head";

// Components
import Layout from "@/components/layout/Layout";
import Article from "@/components/content/Article";
import CardGrid from "@/components/composite/CardGrid";
import Container from "@/components/container/Container";
import ContainerDark from "@/components/container/ContainerDark";
import ContainerReverse from "@/components/container/ContainerReverse";
import CTA from "@/components/content/CTA";
import CTADark from "@/components/content/CTADark";
import FiftyFifty from "@/components/composite/FiftyFifty";
import Hero from "@/components/container/Hero";
import ImageBounce from "@/components/content/ImageBounce";
import ParallaxWrapper from "@/components/container/ParallaxWrapper";

// Other imports
import logo from "@/public/arkane-square-logo.svg";
import styles from "@/styles/Home.module.scss";
import { service } from "@/services/service";
import { ArticleP, FooterLinkP, CardP } from "@/services/types";

interface Props {
  articles: ArticleP[];
  links: FooterLinkP[];
  cards: CardP[];
}

const subheading = "Call us today for a free consultation";

export default function Home({ articles, links, cards }: Props): React.ReactElement {
  return (
    <div>
      <Head>
        <title>Arkane Demo</title>
        <meta name='description' content='Arkane Digtal Next.js CMS Demo' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Layout links={links}>
        <Hero>
          <FiftyFifty>
            <CTADark
              heading='Better Solutions for Business'
              subheading={subheading}
            />
            <ImageBounce
              src={logo}
              alt='Arkane Logo'
              className={`${styles.bounce} mx-auto flex justify-center`}
            />
          </FiftyFifty>
        </Hero>
        <ContainerDark>
          <Article
            article={articles[1]}
          />
        </ContainerDark>
        <ParallaxWrapper
          imageUrl={"https://source.unsplash.com/random/?landscape"}
        >
          <ContainerReverse className='h-48'>
            <FiftyFifty>
              <CTA
                heading='Better Solutions for Business'
                subheading={subheading}
              />
              <ImageBounce
                src={logo}
                alt='Arkane Logo'
                className={`${styles.bounce} mx-auto flex justify-center`}
              />
            </FiftyFifty>
          </ContainerReverse>
        </ParallaxWrapper>
        <Container>
          <CardGrid type='user details' users={cards} />
        </Container>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const links = await service.getFooterLinks();
  const articles = await service.getArticles();
  const cards = await service.getCards();

  return {
    props: {
      links,
      articles,
      cards,
    }
  };
}
