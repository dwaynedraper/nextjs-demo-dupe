import { kontentRepository } from "@/repositories/kontentRepository";

export const kontentService = {
  async getFooterLinks() {
    const data = await kontentRepository.getItems('footer_link');
    const links = data.items.map(item => {
      return {
        section: item.elements.section.value[0].codename,
        url: item.elements.url.value,
        displayText: item.elements.display_name.value,
        key: item.elements.index.value
      };
    });
    return links;
  },

  async getArticles() {
    const data = await kontentRepository.getItems('article_example_content_type');
    const article = data.items.map(item => {
      return {
        title: item.elements.title.value,
        body: item.elements.body.value,
        url: item.elements.url.value,
      };
    });
    return article;
  },

  async getItemById(id) {
    const results = await kontentRepository.getItemByCodename(id);
    return results;
  },
}