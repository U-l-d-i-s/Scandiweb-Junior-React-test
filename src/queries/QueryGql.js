import { gql } from '@apollo/client';
export const GET_CATEGORIES = gql`
query GetCategories{
  categories{
    name
  }
}
`;

export const ALL_PRODUCTS = gql`
 query GetProducts{
  categories {
    products {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      brand
      prices {
        currency
        amount
      }
    }
  }
}
`;
export const CURRENCIES = gql`
query GetCurrencies{
  currencies    
}

`;

export const PROD_BY_ID = gql`
query getProductById($productId: String!)  {
  product(id: $productId) {
    id
    attributes {
      id
      items {
        id
        value
        displayValue
      }
      type
      name
    }
    name
    inStock
    gallery
    prices {
      amount
      currency
    }
    description
    brand
  }
}
 
`;
