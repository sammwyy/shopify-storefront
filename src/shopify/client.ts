import { GraphQLClient } from '../graphql';
import ProductsClient from './products/products-client';
import ShopClient from './shop/shop-client';

interface ShopifyClientSettings {
  storeDomain: string;
  accessToken: string;
}

export class ShopifyClient {
  public readonly products: ProductsClient;

  public readonly shop: ShopClient;

  constructor(settings: ShopifyClientSettings) {
    const { storeDomain, accessToken } = settings;
    const endpoint = `https://${storeDomain}/api/2022-10/graphql.json`;
    const graphql = new GraphQLClient(endpoint);
    graphql.setHeader('X-Shopify-Storefront-Access-Token', accessToken);

    this.products = new ProductsClient(graphql);
    this.shop = new ShopClient(graphql);
  }
}

export default ShopifyClient;
