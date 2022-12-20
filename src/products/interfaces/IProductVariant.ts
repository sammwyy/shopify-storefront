import IMoneyV2 from '../../common/IMoneyV2';
import IProductImage from './IProductImage';
import IProductVariantOption from './IProductVariantOption';

export interface IProductVariant {
  id: string;
  availableForSale: boolean;
  barcode: string;
  currentlyNotInStock: boolean;
  sku: string;
  title: string;
  unitPrice: IMoneyV2;
  weight: number;
  weightUnit: string;
  selectedOptions: IProductVariantOption[];
  image: IProductImage;
  quantityAvailable: boolean;
}

export default IProductVariant;
