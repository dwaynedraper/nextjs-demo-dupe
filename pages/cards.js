// Next.js imports
import React from "react";
import Head from "next/head";

// Components
import Layout from "@/components/layout/Layout";
import Container from "@/components/container/Container";
import CardGrid from "@/components/composite/CardGrid";

// Example CMS Data
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

export default function cards({ links }) {
  return (
    <>
      <Head>
        <title>Cards</title>
        <meta name='description' content='Arkane Digtal Next.js CMS Demo' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Layout links={links}>
        <Container>
          <CardGrid type='user details' users={users} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const links = await getLinks(preview);
  return {
    props: { links },
  };
}

async function fetchAPI(query) {
  return fetch(process.env.SITECORE_PREVIEW_ENDPOINT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-GQL-Token": process.env.PREVIEW_API_KEY,
    },
    body: JSON.stringify({ query }),
  }).then((response) => {
    return response.json();
  });
}

export async function getLinks(preview) {
  const result = await fetchAPI(
    `{ 
      links: allFooterLink (first:50) 
      {
        results {
          section
          url
          displayText
        }
      }
    }`
  );
  return result.data.links;
}
