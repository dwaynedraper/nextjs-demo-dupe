export default async function handler(req, res) {
  const { query } = req.body;
  const response = await fetch(process.env.SITECORE_PREVIEW_ENDPOINT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-GQL-Token": process.env.PREVIEW_API_KEY,
    },
    body: JSON.stringify({ query }),
  });
  return await response.json();
}
