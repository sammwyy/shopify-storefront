import IShopBrand from './IShopBrand';
import IShopPaymentSettings from './IShopPaymentSettings';
import IShopPolicy from './IShopPolicy';

export interface IShop {
  id: string;
  name: string;
  description: string;
  moneyFormat: string;
  paymentSettings: IShopPaymentSettings;
  shipToCountries: string;
  brand?: IShopBrand;
  privacyPolicy?: IShopPolicy;
  refundPolicy?: IShopPolicy;
  shippingPolicy?: IShopPolicy;
  subscriptionPolicy?: IShopPolicy;
  termsOfService?: IShopPolicy;
}
