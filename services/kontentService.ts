import { kontentRepository } from "@/repositories/kontentRepository";
import { FooterLink } from "@/models/content-types/footer_link";
import { Article } from "@/models/content-types/article";
import { ArticleP, FooterLinkP, CardP } from "@/services/types";

function parseItem(item) {
  const parsedItem = {};

  for (const key in item.elements) {
    const element = item.elements[key];
    const value = element.value;

    if (key === 'image_asset' && Array.isArray(value) && value.length > 0) {
      // If it is an image_asset and it has a value
      parsedItem['imageUrl'] = value[0].url;
    } else if (Array.isArray(value)) {
      parsedItem[key] = value.map(i => parseItem(i));
    } else if (typeof value === 'object' && value !== null) {
      parsedItem[key] = parseItem(value);
    } else {
      parsedItem[key] = value;
    }
  }

  return parsedItem;
}

function parseResponse(response) {
  if (response.items) {
    return response.items.map(item => parseItem(item));
  } else {
    return response.map(item => parseItem(item));
  }
}

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

  async getTestimonials() {
    const data = (await kontentRepository.getItems('testimonial')).items;
    return parseResponse(data);
  },

  async getCards(): Promise<CardP[]> {
    const data = (await kontentRepository.getItems('card')).items;
    return parseResponse(data);
  },

  async getCTAs() {
    const data = (await kontentRepository.getItems('cta')).items;
    return parseResponse(data);
  },

  async getItemById(id) {
    const results = await kontentRepository.getItemByCodename(id);
    return results;
  },
};