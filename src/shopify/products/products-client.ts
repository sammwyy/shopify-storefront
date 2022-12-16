import { GraphQLClient } from '../../graphql';
import queryProduct from './queries/queryProducts';

class ProductsClient {
  private readonly graphql: GraphQLClient;

  constructor(graphql: GraphQLClient) {
    this.graphql = graphql;
  }

  public async getProducts(first = 10) {
    const data = await this.graphql.fetch(queryProduct, { first });
  }
}

export default ProductsClient;
