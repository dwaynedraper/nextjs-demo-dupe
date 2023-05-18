export interface FooterLinkP {
  section: string;
  url: string;
  displayText: string;
  key: string;
}

export interface ArticleP {
  title: string;
  body: string;
  url: string;
}

export interface CardP {
  name: string;
  description: string;
  emotion?: string;
  location?: string;
  email?: string;
  title?: string;
  imageurl?: string;
  imageUrl?: string;
}

export interface TestimonialP {
  body: string;
  author: {
    name: string;
    handle: string;
    imageUrl: string;
  };
}
