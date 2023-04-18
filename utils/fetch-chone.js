/**
 * fetchAPI makes a call to Content Hub One's GraphQL API
 * @param {GraphQL query} query
 * @returns results from the query
 */
export async function fetchAPI(query) {
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

/**
 * getMediaItemById gets a media item from Content Hub One by its ID
 * @returns name and url of the media item
 */
export async function getMediaItemById(id) {
  const results = await fetchAPI(`
    {
      media(id: ${id}) {
        name
        fileUrl
      }
    }
  `);
  return results;
}

/**
 * getArticle gets the first article from Content Hub One
 * @param {*} preview
 * @returns the first article from Content Hub One
 */
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

/**
 * getArticles gets all articles from Content Hub One
 * @param {*} preview
 * @returns all articles from Content Hub One
 */
export async function getArticles(preview) {
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
  return result.data.articles.results;
}

/**
 * getContacts gets all contacts from Content Hub One
 * @param {*} preview
 * @returns all contacts from Content Hub One
 */
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

/**
 * getLinks gets all footer links from Content Hub One
 * @param {*} preview
 * @returns footer links and their sections from Content Hub One
 */
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
