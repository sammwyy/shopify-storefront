import { CacheLoader, GraphQLClient } from 'astraql';

import CheckoutClient from './checkout/checkout-client';
import ProductsClient from './products/products-client';
import ShopClient from './shop/shop-client';

interface ShopifyClientSettings {
  storeDomain: string;
  accessToken: string;
  cache?: number;
}

export class ShopifyClient {
  public readonly checkout: CheckoutClient;

  public readonly products: ProductsClient;

  public readonly shop: ShopClient;

  constructor(settings: ShopifyClientSettings) {
    const { storeDomain, accessToken } = settings;
    const endpoint = `https://${storeDomain}/api/2022-10/graphql.json`;
    const graphql = new GraphQLClient({
      endpoint,
      headers: {
        'X-Shopify-Storefront-Access-Token': accessToken,
      },
      cache: settings.cache
        ? new CacheLoader({ expiresIn: settings.cache })
        : undefined,
    });
    this.checkout = new CheckoutClient(graphql);
    this.products = new ProductsClient(graphql);
    this.shop = new ShopClient(graphql);
  }
}

export default ShopifyClient;
