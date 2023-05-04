export default function convertKontentToFooter(data) {
  const links = data.items.map(item => {
    return {
      section: item.elements.section.value[0].codename,
      url: item.elements.url.value,
      displayText: item.elements.display_name.value,
      key: item.elements.index.value
    };
  });

  return links;
}
