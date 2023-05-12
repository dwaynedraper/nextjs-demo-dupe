import { kontentService } from "@/services/kontentService"
import { FooterLinkP, ArticleP } from "@/services/types";

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
  async getItemById(id): Promise<any> {
    return await genericService.getItemById(id);
  },
};