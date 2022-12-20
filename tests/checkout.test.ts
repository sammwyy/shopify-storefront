require('dotenv').config();

import { ShopifyClient } from '../src';

const shopify = new ShopifyClient({
  accessToken: process.env['SHOPIFY_ACCESS_TOKEN'] as string,
  storeDomain: process.env['SHOPIFY_STORE_DOMAIN'] as string,
});

test('Create Checkout', async () => {
  const testVariantID = process.env['STORE_TEST_VARIANT'] as string;
  const checkout = await shopify.checkout.createCheckout({
    email: 'sammwy.dev@gmail.com',
    lineItems: [
      {
        variantId: testVariantID,
        quantity: 1,
      },
    ],
    shippingAddress: {
      address1: 'Evergreen 742',
      city: 'Springfield',
      country: 'US',
      firstName: 'Valentina',
      lastName: 'Sammwy',
      phone: '+16135551111',
      province: 'New York',
      zip: '10001',
    },
  });

  expect(checkout.subtotalPrice.amount).toBe('1.0');
});
