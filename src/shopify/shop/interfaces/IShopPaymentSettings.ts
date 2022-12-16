export interface IShopPaymentSettings {
  shopifyPaymentsAccountId: string;
  acceptedCardBrands: string[];
  cardVaultUrl: string;
  countryCode: string;
  currencyCode: string;
  enabledPresentmentCurrencies: string[];
  supportedDigitalWallets: string[];
}

export default IShopPaymentSettings;
