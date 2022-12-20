import IAttribute from './IAttribute';

export interface ILineItem {
  customAttributes?: IAttribute[];
  quantity: number;
  variantId: string;
}

export default ILineItem;
