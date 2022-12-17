import GraphQLRequest from './interfaces/GraphQLRequest';

export function gqlVariablesToBody(
  vars: Record<string, string>,
  returns: string[],
): string {
  const varTypes = [];
  const varAssign = [];

  // eslint-disable-next-line guard-for-in
  for (const key in vars) {
    const type = vars[key];
    varTypes.push(`$${key}: ${type}`);
    varAssign.push(`${key}: $${key}`);
  }

  if (varTypes.length === 0 || varAssign.length === 0) {
    return `__OPERATION__ __NAME_CAP__ {
  __NAME__ {
    ${returns.join(' ')}
  }
}`;
  }

  return `__OPERATION__ __NAME_CAP__(${varTypes.join(',')}) {
  __NAME__(${varAssign.join(',')}){
    ${returns.join(' ')}
  }
}`;
}

export function buildGraphQLRequest(
  operation: 'mutation' | 'query',
  name: string,
  variables: Record<string, string>,
  returns: string[],
): GraphQLRequest {
  const nameCap = name.replace(name[0], name[0].toUpperCase());
  const body = gqlVariablesToBody(variables, returns)
    .replace(/__OPERATION__/g, operation)
    .replace(/__NAME__/g, name)
    .replace(/__NAME_CAP__/g, nameCap);

  const req = {} as GraphQLRequest;
  req[operation] = `${body}`;
  return req;
}

export function buildQuery(
  name: string,
  variables: Record<string, string>,
  returns: string[],
): GraphQLRequest {
  return buildGraphQLRequest('query', name, variables, returns);
}

export function buildMutation(
  name: string,
  variables: Record<string, string>,
  returns: string[],
): GraphQLRequest {
  return buildGraphQLRequest('mutation', name, variables, returns);
}
