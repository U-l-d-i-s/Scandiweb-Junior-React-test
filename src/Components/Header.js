import { Component } from "react";
import { MainHeader, Icons, HeaderCategories } from "./Header.style";
import PropTypes from 'prop-types';


import CategoriesButton from "./CategoriesButton";
import Dropdown from "./Dropdown";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CurrentCategory } from "../ReduxModules/AllActions";

import { Link } from "react-router-dom";

class Header extends Component {

  handleCategorieChange = (val) => {
    this.props.CurrentCategoryDispatch(val);
  };


  render() {
    return (
      <MainHeader >
        <HeaderCategories>
          <CategoriesButton />
        </HeaderCategories>
        <div
        >
          <Link to="/">
            <img
              onClick= { () => this.handleCategorieChange("")}
              src="../images/a-logo.png"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight:"50px"
              }}
              alt="logo"
            />
          </Link>
        </div>

        <div>
          <Icons style={{ position: "relative", width: "80px" }}>
            <Dropdown />
          </Icons>
        </div>
      </MainHeader>
    );
  }
}
CategoriesButton.propTypes = {
  categor : PropTypes.string,
  CurrentCategoryDispatch : PropTypes.func
} 

export default connect(
  (state) => ({
    categor: state.CurrentCategory,
  }),
  (dispatch) =>
    bindActionCreators(
      {
        CurrentCategoryDispatch: CurrentCategory,
      },
      dispatch
    )
)(Header);
