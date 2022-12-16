import { buildQuery } from '../../../graphql';

const queryProduct = buildQuery(
  'Products',
  {
    first: 'Int',
  },
  ['edges{ node{ id title }}'],
);

export default queryProduct;
