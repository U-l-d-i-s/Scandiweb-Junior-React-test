import { Component } from "react";
import PropTypes from "prop-types";

import { withRouter } from "react-router-dom";
import { Query } from "@apollo/client/react/components";
import { PROD_INSTOCK } from '../../../queries/QueryGql'

import ProductInStock from "./ProductInStock";
import ProductOutOfStock from "./ProductOutOfStock";

class ProductDescription extends Component {

  render() {

    return (
      <Query query={PROD_INSTOCK} variables={{ productId: this.props.id}} fetchPolicy = {"network-only"}>
        {({ loading, error, data }) => {
          
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return (

            <div>
              {data.product.inStock ? 
              <ProductInStock id = {this.props.id}/> : 
              <ProductOutOfStock id = {this.props.id}/>}
            </div>
            
          );
        }}
      </Query>
    );
  }
}
ProductDescription.propTypes = {

  id: PropTypes.string,
};
export default withRouter(

  ProductDescription
  );
