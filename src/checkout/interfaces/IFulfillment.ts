interface IFulfillmentTrackingInfo {
  number: string;
  url: string;
}

export interface IFulfillment {
  trackingCompany: string;
  trackingInfo: IFulfillmentTrackingInfo;
}

export default IFulfillment;
