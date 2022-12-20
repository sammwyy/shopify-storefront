import IMoneyV2 from '../../common/IMoneyV2';
import IFulfillment from './IFulfillment';
import IMailingAddress from './IMailingAddress';

type OrderCancelReason =
  | 'CUSTOMER'
  | 'DECLINED'
  | 'FRAUD'
  | 'INVENTORY'
  | 'OTHER';

type OrderFinancialStatus =
  | 'AUTHORIZED'
  | 'PAID'
  | 'PARTIALLY_PAID'
  | 'PARTIALLY_REFUNDED'
  | 'PENDING'
  | 'REFUNDED'
  | 'VOIDED';

type OrderFulfillmentStatus =
  | 'FULFILLED'
  | 'IN_PROGRESS'
  | 'ON_HOLD'
  | 'OPEN'
  | 'PARTIALLY_FULFILLED'
  | 'PENDING_FULFILLMENT'
  | 'RESTOCKED'
  | 'SCHEDULED'
  | 'UNFULFILLED';

export interface ICheckoutOrder {
  cancelReason: OrderCancelReason | null;
  canceledAt: string | null;
  currencyCode: string;
  currentSubtotalPrice: IMoneyV2;
  currentTotalDuties: IMoneyV2;
  currentTotalPrrice: IMoneyV2;
  currentTotalTax: IMoneyV2;
  customerLocale: string;
  customerUrl: string;
  edited: boolean;
  email: string;
  financialStatus: OrderFinancialStatus;
  fulfillmentStatus: OrderFulfillmentStatus;
  id: string;
  name: string;
  orderNumber: number;
  originalTotalDuties: IMoneyV2;
  originalTotalPrice: IMoneyV2;
  phone: string;
  processedAt: string;
  shippingAddress: IMailingAddress;
  statusUrl: string;
  subtotalPrice: IMoneyV2;
  successfulFulfillments: IFulfillment[];
  totalPrice: IMoneyV2;
  totalRefunded: IMoneyV2;
  totalShippingPrice: IMoneyV2;
  totalTax: IMoneyV2;
}

export default ICheckoutOrder;
