import { Component } from "react";
import { MainHeader, Icons, HeaderCategories, HeaderLogo } from "./Header.style";
import PropTypes from 'prop-types';


import CategoriesButton from "./CategoryButtons/CategoriesButton";
import Dropdown from "./DropDowns/Dropdown";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CurrentCategory } from "../../ReduxModules/AllActions";

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
            <HeaderLogo
              onClick= { () => this.handleCategorieChange("")}
              src="../images/a-logo.png"
              alt="logo"
            />
          </Link>
        </div>

        <div>
          <Icons>
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
