import IShopBrandColor from './IShopBrandColor';
import IShopBrandImage from './IShopBrandImage';

export interface IShopBrand {
  shortDescription: string;
  slogan: string;
  colors: {
    primary: IShopBrandColor;
    secondary: IShopBrandColor;
  };
  coverImage: IShopBrandImage;
  logo: IShopBrandImage;
  squareLogo: IShopBrandImage;
}

export default IShopBrand;
