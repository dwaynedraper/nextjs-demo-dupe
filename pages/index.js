// Next imports
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

// Components
import Layout from "@/components/layout/Layout";
import Article from "@/components/content/Article";
import BlogCardGrid from "@/components/content/BlogCardGrid";
import CardGrid from "@/components/composite/CardGrid";
import Container from "@/components/container/Container";
import ContainerDark from "@/components/container/ContainerDark";
import ContainerLight from "@/components/container/ContainerLight";
import ContainerReverse from "@/components/container/ContainerReverse";
import CTA from "@/components/content/CTA";
import CTADark from "@/components/content/CTADark";
import FiftyFifty from "@/components/composite/FiftyFifty";
import Hero from "@/components/container/Hero";
import ImageBounce from "@/components/content/ImageBounce";
import ParallaxWrapper from "@/components/container/ParallaxWrapper";

// Other imports
import logo from "@/public/arkane-square-logo.svg";
import logoWhite from "@/public/arkane-square-logo-white.svg";
import styles from "@/styles/Home.module.scss";
import { kontentService } from "@/services/kontentService";
import { kontentClient } from "@/lib/kontentClient";

const subheading = "Call us today for a free consultation";

//Example CMS Data
const users = [
  {
    emotion: "Focused",
    name: "Marco Polo",
    description:
      "Artist, Dog Lover Graphic Designer, UI/UX Designer, & Front-end Developer",
    title: "Lead Front-end Developer",
    location: "Dallas, TX",
    email: "dean.draper@arkanedigital.com",
    imageUrl:
      "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cG9ydHJhaXR8fHx8fHwxNjgyMzc1OTM4&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    emotion: "Happy",
    name: "Linda Martinez",
    description: "Writer, Traveler, & Foodie",
    title: "Content Creator",
    location: "San Francisco, CA",
    email: "linda.martinez@gmail.com",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cG9ydHJhaXR8fHx8fHwxNjgyMzc1OTEz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    emotion: "Excited",
    name: "Elijah Flores",
    description: "Photographer, Musician, & Skateboarder",
    title: "Visual Artist",
    location: "Los Angeles, CA",
    email: "elijah.flores@outlook.com",
    imageUrl:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cG9ydHJhaXR8fHx8fHwxNjgyMzc1OTY5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    emotion: "Inspired",
    name: "Maggie Clark",
    description: "Singer, Dancer, & Choreographer",
    title: "Performing Artist",
    location: "New York, NY",
    email: "maggie.clark@yahoo.com",
  },
  {
    emotion: "Relaxed",
    name: "Henry Kim",
    description: "Hiker, Camper, & Nature Lover",
    title: "Outdoor Enthusiast",
    location: "Seattle, WA",
    email: "henry.kim@hotmail.com",
  },
  {
    emotion: "Serious",
    name: "Olivia Lee",
    description: "Programmer, Gamer, & Tech Enthusiast",
    title: "Software Engineer",
    location: "San Diego, CA",
    email: "olivia.lee@live.com",
  },
];

export default function Home({ articles, links }) {
  return (
    <>
      <Head>
        <title>Arkane Next.js Demo</title>
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
        {/* <ContainerDark>
          <FiftyFifty>
            <CTA
              heading='Better Solutions for Business'
              subheading={subheading}
            />
            <ImageBounce
              src={logoWhite}
              alt='Arkane Logo'
              className={`${styles.bounce} mx-auto flex justify-center`}
            />
          </FiftyFifty>
        </ContainerDark> */}
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
          <CardGrid type='user details' users={users} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  let rawLinks = await kontentClient.getItems('footer_link');
  const links = kontentService.parseFooterLinks(rawLinks);

  let rawArticles = await kontentClient.getItems('article_example_content_type');
  const articles = kontentService.parseArticles(rawArticles);

  return {
    props: {
      links,
      articles
    }
  }
}
