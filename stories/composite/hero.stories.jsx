import React from "react";
import fetch from "node-fetch";
import Hero from "@/components/composite/Hero";

const info = {
  title: "Composite/HeroLive",
  component: Hero,
};
export default info;

export const HeroLiveComponent = (args, { loaded: { content } }) => (
  <Hero {...args} content={content} />
);
HeroLiveComponent.loaders = [
  async () => ({
    content: await (
      await fetch(process.env.SITECORE_PREVIEW_ENDPOINT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-GQL-Token": process.env.PREVIEW_API_KEY,
        },
        body: JSON.stringify({
          query: `{
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
          }`,
        }),
      })
    ).json(),
  }),
];
