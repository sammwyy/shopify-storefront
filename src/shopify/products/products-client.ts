import { GraphQLClient } from '../../graphql';
import { IProduct } from './interfaces/IProduct';
import { normalizeProduct, normalizeProductList } from './products-utils';

import queryProduct from './queries/queryProduct';
import queryProducts from './queries/queryProducts';

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

interface IGetProductProps {
  handle?: string;
  id?: string;
}

class ProductsClient {
  private readonly graphql: GraphQLClient;

  constructor(graphql: GraphQLClient) {
    this.graphql = graphql;
  }

  public async getProduct(props: IGetProductProps): Promise<IProduct> {
    let product = (await this.graphql.fetch(queryProduct, {
      ...props,
    })) as unknown as IProduct;
    return normalizeProduct(product);
  }

  public async getProducts(props: IGetProductsProps): Promise<IProduct[]> {
    let { nodes } = (await this.graphql.fetch(queryProducts, {
      ...props,
    })) as Record<string, any>;
    return normalizeProductList(nodes as IProduct[]);
  }
}

export default ProductsClient;
