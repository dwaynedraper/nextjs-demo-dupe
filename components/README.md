# Component Layout

## Directory Structure

This directory contains multiple different folders that represent the intended structure for a page's layout.

`/components/basic`

Basic are the most basic elements on a page (e.g: a button, an input, or a textarea.). For any basic elements of the page that need styling please use a component or create a new one so that we can maintain consistency across the site. Try and factor in the need for variants and/or HTML class names. Create a complex component that uses props to create the variants, or create a dead simple one that is easy to extend following the Open/Closed principle.

`/components/layout`

Layout.jsx is a wrapping element that contains the NavBar, the main content, and the Footer. You will need to use the Layout component in every new page that you create in the /pages directory.

### Example:

```
export default function Home({ article, links, preview, hero }) {
  return (
    <>
      <Head>
        <title>My page</title>
        <meta name='description' content='Arkane Digtal Next.js CMS Demo' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Layout links={links}>
        <Container>
          <FiftyFifty>
            <CTA heading='We are the best' subheading={subheading} />
            <Image src={logo} alt='Arkane Logo' className={styles.bounce} />
          </FiftyFifty>
        </Container>
      </Layout>
    </>
  );
}
```

This prevents complications with the way that Next.js hydrates certain things, and will also ensure that it is possible to use a different layout for different parts of the website (e.g. the admin dashboard, a store, or auth workflow).

`/components/container`

`/components/content`

`/components/composite`

Composite components are
