import fetch from 'isomorphic-unfetch';
import GraphQLRequest from './interfaces/GraphQLRequest';

export class GraphQLClient {
  private readonly endpoint: string;

  private readonly headers: Record<string, string>;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
    this.headers = {};
  }

  public setHeader(key: string, value: string): void {
    this.headers[key] = value;
  }

  public async fetch(
    request: GraphQLRequest,
    variables: Record<string, unknown> = {},
  ): Promise<Record<string, unknown>> {
    const body = JSON.stringify({ ...request, variables });
    const res = await fetch(this.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...this.headers,
      },
      body: body,
    });

    const { data, errors } = await res.json();

    if (data) {
      for (let key in data) {
        return data[key];
      }
    }

    throw new Error(errors[0].message);
  }
}

export default GraphQLClient;
