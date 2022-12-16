import IShopBrandImageResource from './IShopBrandImageResource';

export interface IShopBrandImage {
  id: string;
  alt: string;
  mediaContentType: string;
  image: IShopBrandImageResource;
  previewImage: IShopBrandImageResource;
}

export default IShopBrandImage;
