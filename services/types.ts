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

export interface UserP {
  emotion: string;
  name: string;
  description: string;
  title: string;
  location: string;
  email: string;
  imageUrl?: string;
}