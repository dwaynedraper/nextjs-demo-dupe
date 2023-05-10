export const kontentService = {
  parseFooterLinks(data) {
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

  parseArticles(data) {
    const article = data.items.map(item => {
      return {
        title: item.elements.title.value,
        body: item.elements.body.value,
        url: item.elements.url.value,
      };
    });
    return article;
  },

}