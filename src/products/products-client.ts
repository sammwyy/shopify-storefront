import { GraphQLClient } from 'astraql';
import { IProduct } from './interfaces/IProduct';
import { normalizeProduct, normalizeProductList } from './products-utils';

import queryProduct from './queries/queryProduct';
import queryProducts from './queries/queryProducts';

export interface IGetProductsProps {
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

export interface IGetProductProps {
  handle?: string;
  id?: string;
}

export class ProductsClient {
  private readonly graphql: GraphQLClient;

  constructor(graphql: GraphQLClient) {
    this.graphql = graphql;
  }

  public async getProduct(props: IGetProductProps): Promise<IProduct> {
    const product = await this.graphql.fetch(queryProduct, props);
    return normalizeProduct(product as IProduct);
  }

  public async getProducts(props: IGetProductsProps): Promise<IProduct[]> {
    const { nodes } = await this.graphql.fetch(queryProducts, props);
    return normalizeProductList(nodes as IProduct[]);
  }
}

export default ProductsClient;
