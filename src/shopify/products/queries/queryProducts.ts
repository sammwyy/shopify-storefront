import { buildQuery } from '../../../graphql';

const queryProduct = buildQuery(
  'products',
  {
    first: 'Int',
    last: 'Int',
    query: 'String',
    reverse: 'Boolean',
    sortKey: 'ProductSortKeys',
  },
  [
    `
    nodes {
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
  `,
  ],
);

export default queryProduct;
