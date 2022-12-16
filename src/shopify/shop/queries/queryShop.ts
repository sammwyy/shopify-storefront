import { buildQuery } from '../../../graphql';

const queryShop = buildQuery('shop', {}, [
  'description',
  'id',
  'moneyFormat',
  'name',
  'shipsToCountries',
  `brand {
    shortDescription
    slogan
    colors {
      primary {
        background
        foreground
      }
      secondary {
        background
        foreground
      }
    }
    coverImage {
      id
      alt
      image {
        id
        url
        height
        width
        altText
      }
      mediaContentType
      previewImage {
        id
        url
        height
        width
        altText
      }
    }
    logo {
      id
      alt
      image {
        id
        url
        height
        width
        altText
      }
      mediaContentType
      previewImage {
        id
        url
        height
        width
        altText
      }
    }
    squareLogo {
      id
      alt
      image {
        id
        url
        height
        width
        altText
      }
      mediaContentType
      previewImage {
        id
        url
        height
        width
        altText
      }
    }
  }`,
  `paymentSettings {
    shopifyPaymentsAccountId
    acceptedCardBrands
    cardVaultUrl
    countryCode
    currencyCode
    enabledPresentmentCurrencies
    supportedDigitalWallets
  }`,
  `privacyPolicy {
    id
    body
    handle
    title
    url
  }`,
  `refundPolicy {
    id
    body
    handle
    title
    url
  }`,
  `shippingPolicy {
    id
    body
    handle
    title
    url
  }`,
  `subscriptionPolicy {
    id
    body
    handle
    title
    url
  }
  `,
  `termsOfService {
    id
    body
    handle
    title
    url
  }`,
]);

export default queryShop;
