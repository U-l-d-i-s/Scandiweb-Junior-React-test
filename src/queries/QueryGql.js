import { gql } from "@apollo/client";
export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      name
    }
  }
`;

export const ALL_PRODUCTS = gql`
  query GetProducts {
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

export const PRODUCTS_BY_CATEGORRY = gql`
  query GetProductsByCategory($input: CategoryInput) {
    category(input: $input) {
      name
      products {
        id
        name
        brand
        prices {
          amount
          currency
        }
        gallery
        inStock
      }
    }
  }
`;
export const CURRENCIES = gql`
  query GetCurrencies {
    currencies
  }
`;
export const PROD_INSTOCK = gql`
query getProductById($productId: String!)  {
  product(id: $productId) {
    id
    inStock
    }
  }
`;
export const ATTRIBUTES_BY_ID = gql`
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
  }
}    
`;

export const PROD_BY_ID = gql`
  query getProductById($productId: String!) {
    product(id: $productId) {
      id
      name
      inStock
      gallery
      prices {
        amount
        currency
      }
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
      description
      brand
    }
  }
`;
