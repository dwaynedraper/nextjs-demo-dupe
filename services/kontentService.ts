import { kontentRepository } from "@/repositories/kontentRepository";
import { FooterLink } from "@/models/content-types/footer_link";
import { Article } from "@/models/content-types/article";
import { ArticleP, FooterLinkP } from "@/services/types";

export const kontentService = {
  async getFooterLinks(): Promise<FooterLinkP[]> {
    const data = (await kontentRepository.getItems('footer', 2)).items;
    const links: FooterLinkP[] = [];
    
    data.forEach(item => {
      item.elements.categories.linkedItems.forEach(category => {
        category.elements.links.linkedItems.forEach(link => {
          links.push({
            section: category.elements.title.value,
            url: link.elements.url.value,
            displayText: link.elements.display_name.value,
            key: link.elements.index.value
          });
        });
      });
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