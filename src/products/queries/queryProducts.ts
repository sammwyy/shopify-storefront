import { query } from 'astraql';

const queryProduct = query`
  products($first: Int, $last: Int, $query: String, $reverse: Boolean, $sortKey: ProductSortKeys) {
    products(first: $first, last: $last, query: $query, reverse: $reverse, sortKey: $sortKey) {
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
    }
  }
`;

export default queryProduct;
