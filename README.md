# Shopify Storefront

Wrapper for the Shopify's Storefront API.

## 💻 Getting started

```shell
# With npm:
npm install shopify-storefront

# With yarn:
yarn add shopify-storefront
```

## 📚 Usage

### As a ES Module

```javascript
import { ShopifyClient } from 'shopify-storefront';

// Initialize client.
const shopify = new ShopifyClient({
  accessToken: process.env['SHOPIFY_ACCESS_TOKEN'] as string,
  storeDomain: process.env['SHOPIFY_STORE_DOMAIN'] as string,
});

// Get shop data.
shopify.shop.getShop()
    .then(console.log);
```

### As CJS Module

```javascript
// If uses require function you will need to use .default
// For import in typescript, this is not required
const { ShopifyClient } = require('shopify-storefront').default;
```

## 📝 To Do

- [] Checkout
  - [x] createCheckout
- [] Products
  - [x] product
  - [x] products
- [] Shop
  - [x] shop

## 🤝 Contributing

Contributions, issues and feature requests are welcome!
Feel free to check [issues page](https://github.com/sammwyy/shopify-storefront/issues).

## ❤️ Show your support

Give a ⭐️ if this project helped you!

Or buy me a coffeelatte 🙌🏾

[Ko-fi](https://ko-fi.com/sammwy) | [Patreon](https://patreon.com/sammwy)

## 📝 License

Copyright © 2022 [Sammwy](https://github.com/sammwyy).  
This project is [MIT](LICENSE) licensed.  
