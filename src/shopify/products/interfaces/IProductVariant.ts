import IProductImage from './IProductImage';
import IProductPrice from './IProductPrice';
import IProductVariantOption from './IProductVariantOption';

export interface IProductVariant {
  id: string;
  availableForSale: boolean;
  barcode: string;
  currentlyNotInStock: boolean;
  sku: string;
  title: string;
  unitPrice: IProductPrice;
  weight: number;
  weightUnit: string;
  selectedOptions: IProductVariantOption[];
  image: IProductImage;
  quantityAvailable: boolean;
}
