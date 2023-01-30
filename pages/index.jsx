import Head from "next/head";
import Article from "@/components/composite/Article";
// TODO: Move contents to press-release.js after creating the real home page.

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Arkane Digital NextJS Demo' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Article />
      <Article />
      <Article />
      <Article />
    </>
  );
}
