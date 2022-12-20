import { GraphQLClient } from 'astraql';
import { IShop } from './interfaces/IShop';
import queryShop from './queries/queryShop';

export class ShopClient {
  private readonly graphql: GraphQLClient;

  constructor(graphql: GraphQLClient) {
    this.graphql = graphql;
  }

  public async getShop(): Promise<IShop> {
    const data = await this.graphql.fetch(queryShop);
    return data as IShop;
  }
}

export default ShopClient;
