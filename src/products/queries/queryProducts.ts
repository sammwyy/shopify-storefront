import { query } from 'astraql';

const queryProduct = query`
  products($first: Int, $last: Int, $query: String, $reverse: Boolean, $sortKey: ProductSortKeys) {
    products(first: $first, last: $last, query: $query, reverse: $reverse, sortKey: $sortKey) {
      nodes {
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
            id
            availableForSale
          }
        }
      }
    }
  }
`;

export default queryProduct;
