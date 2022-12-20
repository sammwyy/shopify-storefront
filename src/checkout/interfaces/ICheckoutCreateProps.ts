import IAttribute from './IAttribute';
import IBuyerIdentity from './IBuyerIdentity';

import ILineItem from './ILineItem';
import IMailingAddress from './IMailingAddress';

export interface ICreateCheckoutProps {
  email?: string;
  lineItems: ILineItem[];
  shippingAddress?: IMailingAddress;
  note?: string;
  customAttributes?: IAttribute[];
  allowPartialAddreses?: boolean;
  buyerIdentity?: IBuyerIdentity;
}

export default ICreateCheckoutProps;
