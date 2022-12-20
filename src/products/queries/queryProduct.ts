import { query } from 'astraql';

const queryProduct = query`
  product($handle: String, $id: ID) {
    product(handle: $handle, id: $id) {
      id
      handle
      createdAt
      availableForSale
      description
      descriptionHtml
      isGiftCard
      images(first: 99) {
        nodes {
          width
          url
          src
          id
          height
          altText
        }
      }
      productType
      publishedAt
      seo {
        description
        title
      }
      tags
      title
      vendor
      variants(first: 99) {
        nodes {
          id
          availableForSale
          barcode
          currentlyNotInStock
          sku
          title
          unitPrice {
            amount
            currencyCode
          }
          weight
          weightUnit
          selectedOptions {
            name
            value
          }
          image {
            altText
            height
            id
            originalSrc
            src
            width
            url
          }
          quantityAvailable
        }
      } 
    }
  }
`;

export default queryProduct;
