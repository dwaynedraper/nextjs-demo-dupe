import { kontentRepository } from "@/repositories/kontentRepository";
import { FooterLink } from "@/models/content-types/footer_link";
import { Article } from "@/models/content-types/article";
import { ArticleP, FooterLinkP } from "@/services/types";

export const kontentService = {
  async getFooterLinks(): Promise<FooterLinkP[]> {
    const data: FooterLink[] = (await kontentRepository.getItems('footer_link')).items;
    const links: FooterLinkP[] = data.map(item => {
      return {
        section: item.elements.section.value[0].codename,
        url: item.elements.url.value,
        displayText: item.elements.display_name.value,
        key: item.elements.index.value
      };
    });
    return links;
  },

  async getArticles(): Promise<ArticleP[]> {
    const data: Article[] = (await kontentRepository.getItems('article')).items;
    const articles: ArticleP[] = data.map(item => {
      return {
        title: item.elements.title.value,
        body: item.elements.body.value,
        url: item.elements.url.value,
      };
    });
    return articles;
  },

  async getItemById(id) {
    const results = await kontentRepository.getItemByCodename(id);
    return results;
  },
};