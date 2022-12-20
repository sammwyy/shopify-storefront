import IImage from '../../common/IImage';
import IProductOption from './IProductOption';
import IProductSEO from './IProductSEO';
import IProductVariant from './IProductVariant';

export interface IProduct {
  availableForSale: boolean;
  createdAt: string;
  description: string;
  descriptionHtml: string;
  handle: string;
  id: string;
  isGiftCard: boolean;
  images: IImage[];
  onlineStoreUrl: string;
  options: IProductOption[];
  productType: string;
  publishedAt: string;
  requiresSellingPlan: boolean;
  seo: IProductSEO;
  tags: string[];
  title: string;
  totalInventory: number;
  updatedAt: string;
  vendor: string;
  variants: IProductVariant[];
}

export default IProduct;
