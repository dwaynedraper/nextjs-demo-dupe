import { kontentService } from "@/services/kontentService"
import { FooterLinkP, ArticleP, BlogPostP, TestimonialP, CTAP, CardP } from "@/services/types";

const contentProvider: string = process.env.CONTENT_PROVIDER;

let genericService;
if (contentProvider === 'kontent') {
  genericService = kontentService;
}
//  else if (contentProvider === 'chOne') {
//   genericService = chOneService;
// } 
else {
  throw new Error(`Unsupported content provider: ${contentProvider}`);
}

export const service = {
  async getFooterLinks(): Promise<FooterLinkP[]> {
    return await genericService.getFooterLinks();
  },
  async getArticles(): Promise<ArticleP[]> {
    return await genericService.getArticles();
  },
  async getTestimonials(): Promise<TestimonialP[]> {
    return await genericService.getTestimonials();
  },
  async getCards(): Promise<CardP[]> {
    return await genericService.getCards();
  },
  async getCTAs(): Promise<CTAP[]> {
    return await genericService.getCTAs();
  },
  async getBlogPosts(): Promise<BlogPostP[]> {
    return await genericService.getBlogPosts();
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async getItemById(id): Promise<any[]> {
    return await genericService.getItemById(id);
  },
};