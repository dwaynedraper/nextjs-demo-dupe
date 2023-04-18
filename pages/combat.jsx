import Head from "next/head";
import Layout from "@/components/layout/Layout";
import CombatTracker from "@/components/composite/CombatTracker";
import {
  fetchAPI,
  getArticles,
  getContacts,
  getLinks,
} from "@/utils/fetch-chone";
// TODO: Move contents to press-release.js after creating the real home page.

const players = [
  {
    name: "Player 1",
    id: 1,
    speed: 30,
    initBonus: 0,
    hp: 8,
    ac: 11,
  },
  {
    name: "Player 2",
    id: 2,
    speed: 30,
    initBonus: 0,
    hp: 12,
    ac: 13,
  },
  {
    name: "Player 3",
    id: 3,
    speed: 30,
    initBonus: 0,
    hp: 14,
    ac: 16,
  },
];
const monsters = [];

const Combat = ({ article, links }) => {
  return (
    <>
      <Head>
        <title>Arkane Next.js Demo</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout links={links}>
        <CombatTracker players={players} monsters={monsters} />
      </Layout>
    </>
  );
};

export default Combat;

export async function getStaticProps({ preview = false }) {
  const article = await getArticles(preview);
  const contacts = await getContacts(preview);
  const links = await getLinks(preview);
  return {
    props: { article, links, preview },
  };
}
