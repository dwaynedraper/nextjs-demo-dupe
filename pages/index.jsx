import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import Container from "@/components/layout/Container";
import Hero from "@/components/composite/Hero";
import Cards from "@/components/composite/Cards";
import CTA from "@/components/composite/CTA";
import FAQ from "@/components/composite/FAQ";
import styles from "@/dist/Home.module.css";
// TODO: Move contents to press-release.js after creating the real home page.

const Index = ({ article, links, preview, hero }) => {
  return (
    <>
      <Head>
        <title>Content Hub ONE Example</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"></link>
      </Head>
      <Layout links={links}>
        <div className={styles.top}>
          <div>
            <a
              href='https://developers.sitecore.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/next.svg'
                alt='Sitecore Logo'
                width={222}
                height={30}
                priority
              />
            </a>
          </div>
          <div className={styles.right}>
            <a
              href='https://developers.sitecore.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/vercel.svg'
                alt='Sitecore Logo'
                width={222}
                height={30}
                priority
              />
            </a>
          </div>
        </div>

        <main className={styles.main}>
          <Hero header={hero.header} description={hero.description} content={hero.content.content[0].content.text} image={hero.bannerImage.results[0].fileUrl} />
          <Cards />
          <CTA />
          <FAQ />
          <div className={styles.center}>
            <h1>{article.title}</h1>
            <h4>{article.summary}</h4>
            {/* <p>{article.body}</p> */}
            <Container>
              <div className='row mt-5 text-start'>
                <p>
                  Bacon ipsum dolor amet boudin in excepteur, chuck swine ea
                  flank pork shankle biltong ball tip cillum. Reprehenderit
                  cupim spare ribs biltong. Elit pork loin nulla voluptate
                  dolor, ut ea. Boudin beef ribs aliquip ut pig turkey short
                  loin. Nostrud picanha labore excepteur biltong sunt. Chicken
                  reprehenderit consectetur buffalo ball tip qui meatball.
                  Alcatra sausage reprehenderit cillum quis ipsum nulla,
                  excepteur consequat voluptate cupidatat eiusmod.
                </p>{" "}
                <p>
                  Ground round jowl short ribs tri-tip strip steak pork in. Do
                  pork loin nisi, et irure id ham hock hamburger venison culpa
                  proident dolor. Tongue magna deserunt pork exercitation nisi
                  shoulder beef ribs chislic spare ribs ut alcatra. Drumstick
                  excepteur tempor jerky qui lorem do aliquip turducken.
                  Excepteur anim burgdoggen meatloaf, hamburger bresaola
                  consequat do nostrud prosciutto sint enim duis pig. Meatloaf
                  ut magna ribeye incididunt in pancetta spare ribs salami
                  leberkas dolor sint.
                </p>
                <p>
                  Velit alcatra venison t-bone id do. Ham aute lorem cupim anim.
                  Lorem veniam duis, enim chuck brisket capicola excepteur nulla
                  ea esse tri-tip ham hock pariatur. Turkey excepteur mollit
                  quis. Aliquip commodo boudin sirloin do dolore mollit ut
                  reprehenderit ground round pork belly turducken. Meatball
                  occaecat kevin boudin voluptate fatback. Meatball shankle
                  labore ea. Elit veniam pig, leberkas nulla turducken lorem
                  bacon culpa jowl biltong jerky tongue eiusmod strip steak.
                  Dolore excepteur jerky ribeye jowl.
                </p>
                <p>
                  Dolor non landjaeger filet mignon strip steak. Ut sunt anim
                  meatball bresaola picanha alcatra kielbasa. Dolore andouille
                  lorem veniam chicken pork loin. Bacon deserunt pastrami,
                  prosciutto leberkas enim elit anim. Nisi kevin chislic ut ut
                  doner. Meatloaf tail capicola, brisket qui fugiat chicken
                  chuck do minim prosciutto ullamco anim ipsum ball tip. Does
                  your lorem ipsum text long for something a little meatier?
                  Give our generator a try…
                </p>
              </div>
            </Container>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Index;

export async function getStaticProps({ preview = false }) {
  const article = await getArticle(preview);
  const contacts = await getContacts(preview);
  const links = await getLinks(preview);
  const hero = await getHero(preview);
  return {
    props: { article, links, preview, hero },
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

export async function getArticle(preview) {
  const result = await fetchAPI(
    `{ 
      articles: allSampleArticle
      {
        results {
          title
          summary
          body
        }
      }
    }`
  );
  return result.data.articles.results[0];
}

export async function getHero(preview) {
  const result = await fetchAPI(
    `{
      contentBanner( id:"AVwSP1ngw0aaESG6uNZQZQ") {
        header
        description
        content
        bannerImage {
          results {
            fileUrl
          }
        }
      }
    }`
  );
  return result.data.contentBanner;
}

export async function getContacts(preview) {
  const result = await fetchAPI(
    `{ 
      contacts: allContact
      {
        results {
          title
          contactName
          email
          phone
        }
      }
    }`
  );
  return result.data.contacts;
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
