import IMoneyV2 from '../../common/IMoneyV2';

export interface IAppliedGiftCard {
  amountUsed: IMoneyV2;
  balance: IMoneyV2;
  id: string;
  lastCharacters: string;
  presentmentAmountUsed: IMoneyV2;
}

export default IAppliedGiftCard;
