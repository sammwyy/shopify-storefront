import IProductImage from './IProductImage';
import IProductSEO from './IProductSEO';
import IProductVariant from './IProductVariant';

export interface IProduct {
  id: string;
  handle: string;
  createdAt: string;
  availableForSale: boolean;
  description: string;
  descriptionHtml: string;
  isGiftCard: boolean;
  images: IProductImage[];
  productType: string;
  publishedAt: string;
  seo: IProductSEO;
  tags: string[];
  title: string;
  vendor: string;
  variants: IProductVariant[];
}
