import { query } from 'astraql';

const queryProduct = query`
  product($handle: String, $id: ID) {
    product(handle: $handle, id: $id) {
      availableForSale
      createdAt
      description
      descriptionHtml
      handle
      id
      isGiftCard
      images(first: 100) {
        nodes {
          altText
          height
          id
          url
          width
        }
      }
      onlineStoreUrl
      options {
        id
        name
        values
      }
      productType
      publishedAt
      requiresSellingPlan
      seo {
        description
        title
      }
      tags
      title
      totalInventory
      updatedAt
      vendor
      variants(first: 100) {
        nodes {
          availableForSale
          barcode
          currentlyNotInStock
          id
          image {
            altText
            height
            id
            url
            width
          }
          price {
            amount
            currencyCode
          }
          quantityAvailable
          requiresShipping
          selectedOptions {
            name
            value
          }
          sku
          title
          unitPrice {
            amount
            currencyCode
          }
          weight
          weightUnit
        }
      }
    }
  }
`;

export default queryProduct;
