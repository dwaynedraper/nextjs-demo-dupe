import { kontentService } from "@/services/kontentService"
import { chOneService } from "./chOneService";

const contentProvider = process.env.CONTENT_PROVIDER;

let genericService;
if (contentProvider === 'kontent') {
  genericService = kontentService;
} else if (contentProvider === 'chOne') {
  genericService = chOneService;
} else {
  throw new Error(`Unsupported content provider: ${contentProvider}`);
}

export const service = {
  getFooterLinks() {
    return genericService.getFooterLinks();
  },
  getArticles() {
    return genericService.getArticles();
  },
  getItemById(id) {
    return genericService.getItemById(id);
  },
};