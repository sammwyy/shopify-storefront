require('dotenv').config();

import { ShopifyClient } from '../src';

const shopify = new ShopifyClient({
  accessToken: process.env['SHOPIFY_ACCESS_TOKEN'] as string,
  storeDomain: process.env['SHOPIFY_STORE_DOMAIN'] as string,
});

test('Get products', async () => {
  const products = await shopify.products.getProducts({ first: 10 });
  expect(products.length).toBeGreaterThan(0);
  expect(products[0].id).not.toBeNull();
});
