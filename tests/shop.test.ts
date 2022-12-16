require('dotenv').config();

import { ShopifyClient } from '../src';

const shopify = new ShopifyClient({
  accessToken: process.env['SHOPIFY_ACCESS_TOKEN'] as string,
  storeDomain: process.env['SHOPIFY_STORE_DOMAIN'] as string,
});

test('Get shop data', async () => {
  const shopData = await shopify.shop.getShop();
  expect(shopData.name).toBe('Eufonia');
});
