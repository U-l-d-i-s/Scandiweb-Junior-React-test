import { Component } from "react";
import PropTypes from "prop-types";
import { Query } from "@apollo/client/react/components";
import { PRODUCTS_BY_CATEGORRY } from "../../../queries/QueryGql";
import Products from "./Products";
import { ProductWindowContainer } from "../Body.styles";
import { connect } from "react-redux";
import {amount} from '../../Methods/DataMutationMethods';
class QueryProducts extends Component {
  render() {
    return (
      <Query
        query={PRODUCTS_BY_CATEGORRY}
        variables={{ input: { title: this.props.CurrentCategory } }}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          const products = data.category.products.map((prod) => {
            const price = amount(prod.prices, this.props.CurrencyText);
            return (
              <ProductWindowContainer key={prod.id}>
                <Products
                  brand = {prod.brand}
                  inStock={prod.inStock}
                  key={prod.id}
                  id={prod.id}
                  gallery={prod.gallery[0]}
                  name={prod.name}
                  currencySymbol={this.props.CurrencyUnicode}
                  CurrencyText={this.props.CurrencyText}
                  amount={price}
                  prices = {prod.prices}
                />
              </ProductWindowContainer>
            );
          });
          return <ProductWindowContainer>{products}</ProductWindowContainer>;

        }}
        
      </Query>
    );

  }
}
QueryProducts.propTypes = {
  CurrencyText: PropTypes.string,
  CurrencyUnicode: PropTypes.string,
  CurrentCategory: PropTypes.string,
};
export default connect(
  (state) => ({
    Currency: state,
    CurrencyText: state.AddToCart.InitialCurrency.text,
    CurrencyUnicode: state.AddToCart.InitialCurrency.unicodeText,
    CurrentCategory: state.CurrentCategory,
  }),
  null
)(QueryProducts);
