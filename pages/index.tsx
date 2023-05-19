// Next imports
import React from "react";
import Head from "next/head";

// Components
import Layout from "@/components/layout/Layout";
import Article from "@/components/content/Article";
import Container from "@/components/container/Container";
import CTADark from "@/components/content/CTADark";
import FiftyFifty from "@/components/composite/FiftyFifty";
import Hero from "@/components/container/Hero";
import ImageBounce from "@/components/content/ImageBounce";
import TestimonialGrid from "@/components/composite/TestimonialGrid";

// Other imports
import logo from "@/public/arkane-square-logo.svg";
import styles from "@/styles/Home.module.scss";
import { service } from "@/services/service";
import { ArticleP, FooterLinkP, TestimonialP, CTAP } from "@/services/types";

interface Props {
  articles: ArticleP[];
  links: FooterLinkP[];
  testimonials: TestimonialP[];
  ctas: CTAP[];
}

export default function Home({ articles, ctas, links, testimonials }: Props): React.ReactElement {
  console.log('ctas', ctas)
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
              heading={ctas[0].heading}
              subheading={ctas[0].subheading}
              buttonText={ctas[0].button_text}
              buttonHref={ctas[0].button_href}
            />
            <ImageBounce
              src={logo}
              alt='Arkane Logo'
              className={`${styles.bounce} mx-auto flex justify-center`}
            />
          </FiftyFifty>
        </Hero>
        <TestimonialGrid testimonials={testimonials} />
        <Container>
          <Article
            article={articles[1]}
          />
        </Container>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const links = await service.getFooterLinks();
  const articles = await service.getArticles();
  const testimonials = await service.getTestimonials();
  const ctas = await service.getCTAs();

  return {
    props: {
      links,
      articles,
      testimonials,
      ctas,
    }
  };
}
