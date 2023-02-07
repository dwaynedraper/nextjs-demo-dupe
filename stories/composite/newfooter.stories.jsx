import React from "react";
import fetch from "node-fetch";
import Footer from "@/components/composite/Footer";

export default {
  title: "Composite/FooterLive",
  component: Footer,
};

export const FooterLiveComponent = (args, { loaded: { links } }) => (
  <Footer {...args} links={links.data.links} />
);
FooterLiveComponent.loaders = [
  async () => ({
    links: await (
      await fetch(process.env.SITECORE_PREVIEW_ENDPOINT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-GQL-Token": process.env.PREVIEW_API_KEY,
        },
        body: JSON.stringify({
          query: `{
        links: allFooterLink (first:50) {
          results {
            section
            url
            displayText
          }
        }
      }`,
        }),
      })
    ).json(),
  }),
];
