import { Component } from "react";
import PropTypes from 'prop-types';

import Header from "../../Header/Header";
import Cart from "./Cart";

import { connect } from "react-redux";

class CartContainer extends Component {
  shouldComponentUpdate = (nextProps) => {
    if (nextProps.ProductsID !== this.props) {
      console.log("true");
      return true;
    }
    console.log("false");

    return false;
  };
  render() {
    return (
      <div style={{ marginBottom: "40px" }}>
        <Header />
        <h2
          style={{ paddingTop: "120px", paddingLeft: "80px" }}
          className="Rale7 s32"
        >
          CART
        </h2>
        <div style={{ paddingTop: "80px" }}>
          {this.props.ProductArray.map((prod, i) => {
            return (
              <Cart
                AddProductAttributes={prod}
                key={prod.id + i}
                id={prod.id}
                options={prod.options}
                qtty={prod.qtty}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  ProductArray : PropTypes.array,
} 

export default connect(
  (state) => ({
    ProductsID: state,
    ProductArray : state.AddToCart.addProduct,
  }),
  null
)(CartContainer);
