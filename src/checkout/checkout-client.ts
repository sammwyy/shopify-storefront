import { GraphQLClient } from 'astraql';
import { ICheckout } from './interfaces/ICheckout';
import ICreateCheckoutProps from './interfaces/ICheckoutCreateProps';
import mutationCheckoutCreate from './mutations/mutationCheckoutCreate';

class CheckoutClient {
  private readonly graphql: GraphQLClient;

  constructor(graphql: GraphQLClient) {
    this.graphql = graphql;
  }

  public async createCheckout(props: ICreateCheckoutProps): Promise<ICheckout> {
    const data = await this.graphql.fetch(mutationCheckoutCreate, {
      input: props,
    });
    return data.checkout as ICheckout;
  }
}

export default CheckoutClient;
