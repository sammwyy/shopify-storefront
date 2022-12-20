import IImage from '../../common/IImage';
import IMoneyV2 from '../../common/IMoneyV2';
import ISelectedOption from './ISelectedOption';

export interface IProductVariant {
  availableForSale: boolean;
  barcode: string;
  currentlyNotInStock: boolean;
  id: string;
  image: IImage;
  price: IMoneyV2;
  quantityAvailable: number;
  requiresShipping: boolean;
  selectedOptions: ISelectedOption[];
  sku: string;
  title: string;
  unitPrice: IMoneyV2;
  weight: number;
  weightUnit: string;
}

export default IProductVariant;
