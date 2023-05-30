// Next imports
import React from "react";
import Head from "next/head";

// Components
import Layout from "@/components/layout/Layout";
import Article from "@/components/content/Article";
import Container from "@/components/container/Container";
import CTA from "@/components/content/CTA";
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
import ContainerDark from "@/components/container/ContainerDark";

interface Props {
  articles: ArticleP[];
  links: FooterLinkP[];
  testimonials: TestimonialP[];
  ctas: CTAP[];
}

export default function Home({ articles, ctas, links, testimonials }: Props): React.ReactElement {
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
        <ContainerDark>
          <FiftyFifty animate={true}>
            <CTA
              heading={ctas[1].heading}
              subheading={ctas[1].subheading}
              buttonText={ctas[1].button_text}
              buttonHref={ctas[1].button_href}
            />
            <ImageBounce
              src={logo}
              alt='Arkane Logo'
              className={`${styles.bounce} mx-auto flex justify-center`}
            />
          </FiftyFifty>
        </ContainerDark>
        <TestimonialGrid testimonials={testimonials} />
        <Container>
          <Article
            article={articles[0]}
          />
        </Container>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const [links, articles, testimonials, ctas] = await Promise.all([
    await service.getFooterLinks(),
    await service.getArticles(),
    await service.getTestimonials(),
    await service.getCTAs()
  ]);

  return {
    props: {
      links,
      articles,
      testimonials,
      ctas,
    }
  };
}
