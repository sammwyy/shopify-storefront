import { GraphQLClient } from '../../graphql';
import { IProduct } from './interfaces/IProduct';
import queryProduct from './queries/queryProducts';

interface IGetProductsProps {
  first?: number;
  last?: number;
  query?: string;
  reverse?: boolean;
  sortKey?:
    | 'TITLE'
    | 'PRODUCT_TYPE'
    | 'VENDOR'
    | 'UPDATED_AT'
    | 'CREATED_AT'
    | 'BEST_SELLING'
    | 'PRICE'
    | 'ID'
    | 'RELEVANCE';
}

class ProductsClient {
  private readonly graphql: GraphQLClient;

  constructor(graphql: GraphQLClient) {
    this.graphql = graphql;
  }

  public async getProducts(props: IGetProductsProps) {
    let { nodes } = (await this.graphql.fetch(queryProduct, {
      ...props,
    })) as Record<string, any>;

    const products = nodes.map((product: any) => {
      return {
        ...product,
        variants: product.variants.nodes,
        images: product.images.nodes,
      };
    });

    return products as IProduct[];
  }
}

export default ProductsClient;
