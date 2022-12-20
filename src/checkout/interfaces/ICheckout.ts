import IMoneyV2 from '../../common/IMoneyV2';
import IAppliedGiftCard from './IAppliedGiftCard';
import IBuyerIdentity from './IBuyerIdentity';
import ICheckoutOrder from './ICheckoutOrder';
import IMailingAddress from './IMailingAddress';

export interface ICheckout {
  appliedGiftCards: IAppliedGiftCard[];
  buyerIdentity: IBuyerIdentity;
  completedAt: string | null;
  createdAt: string;
  currencyCode: string;
  email: string;
  id: string;
  lineItemsSubtotalPrice: IMoneyV2;
  note?: string;
  order?: ICheckoutOrder;
  orderStatusUrl: string;
  paymentDue: IMoneyV2;
  ready: boolean;
  requiresShipping?: boolean;
  shippingAddress: IMailingAddress;
  subtotalPrice: IMoneyV2;
  taxExempt: boolean;
  taxesIncluded: boolean;
  totalDuties: IMoneyV2;
  totalPrice: IMoneyV2;
  totalTax: IMoneyV2;
  updatedAt: string;
  webUrl: string;
}
