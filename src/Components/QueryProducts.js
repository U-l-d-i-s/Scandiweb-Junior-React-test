import { Component } from "react";
import PropTypes from "prop-types";

import { Query } from "@apollo/client/react/components";
import { ALL_PRODUCTS } from "../queries/QueryGql";

import Products from "./Products";
import { ProductWindowContainer } from "./Header.style";

import { connect } from "react-redux";

class QueryProducts extends Component {
  render() {
    return (
      <Query query={ALL_PRODUCTS}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
            let cur = {
              currency: "",
              amount: null,
            };
          let product = data.categories.map((products) => {
            if (this.props.CurrentCategory === "") {
              return products.products.map((prod) => {
                
                prod.prices.forEach((element) => {
                  if (
                    element.currency ===
                    this.props.CurrencyText
                  ) {
                    cur.amount = element.amount;
                  }
                });
                return (
                  <Products
                    product={prod}
                    inStock={prod.inStock}
                    key={prod.id}
                    id={prod.id}
                    gallery={prod.gallery[0]}
                    name={prod.name}
                    currencySymbol={
                      this.props.CurrencyUnicode
                    }
                    amount={cur.amount}
                  />
                );
              });
            } else {
              const pro = products.products.filter(
                (p) => p.category === this.props.CurrentCategory
              );
              
              return pro.map((prod) => {
                prod.prices.forEach((element) => {
                  if (
                    element.currency ===
                    this.props.CurrencyText
                  ) {
                    cur.amount = element.amount;
                  }
                });
                return (
                  <Products
                    product={prod}
                    inStock={prod.inStock}
                    key={prod.id}
                    id={prod.id}
                    gallery={prod.gallery[0]}
                    name={prod.name}
                    currencySymbol={
                      this.props.CurrencyUnicode
                    }
                    amount={cur.amount}
                  />
                );
              });
            }
          });
          return <ProductWindowContainer>{product}</ProductWindowContainer>;
        }}
      </Query>
    );
  }
}
QueryProducts.propTypes = {
  CurrencyText : PropTypes.string,
  CurrencyUnicode : PropTypes.string,
  CurrentCategory : PropTypes.string,
} 
export default connect(
  (state) => ({
    Currency: state,
    CurrencyText: state.AddToCart.InitialCurrency.text,
    CurrencyUnicode: state.AddToCart.InitialCurrency.unicodeText,
    CurrentCategory : state.CurrentCategory
  }),
  null
)(QueryProducts);
