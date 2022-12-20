import { mutation } from 'astraql';

const mutationCheckoutCreate = mutation`
  checkoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkout {
        appliedGiftCards {
          amountUsed {  
            amount
            currencyCode
          }
          balance {
            amount
            currencyCode
          }
          id
          lastCharacters
          presentmentAmountUsed {
            amount
            currencyCode
          }
        }
        buyerIdentity {
          countryCode
        }
        completedAt
        createdAt
        currencyCode
        email
        id
        lineItemsSubtotalPrice {
          amount
          currencyCode
        }
        note
        order {
          cancelReason
          canceledAt
          customerLocale
          customerUrl
          financialStatus
          name
          orderNumber
          totalPrice {
            amount
            currencyCode
          }
          totalTax {
            amount
            currencyCode
          }
        }
        orderStatusUrl
        paymentDue {
          amount
          currencyCode
        }
        ready
        requiresShipping
        shippingAddress {
          address1
          address2
          city
          company
          country
          firstName
          lastName
          phone
          province
          zip
        }
        subtotalPrice {
          amount
          currencyCode
        }
        taxExempt
        taxesIncluded
        totalDuties {
          amount
          currencyCode
        }
        totalPrice {
          amount
          currencyCode
        }
        totalTax {
          amount
          currencyCode
        }
        updatedAt
        webUrl
      }
    }
  }   
`;

export default mutationCheckoutCreate;
