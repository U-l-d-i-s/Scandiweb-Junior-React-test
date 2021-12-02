import { Component } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CurrentCategory } from "../../../ReduxModules/AllActions";
import { Link } from "react-router-dom";
import {
  HackyUnderline,
  ListItemCategoriesButton,
  CategButton,
  CategoryButtonFlex
} from "../Header.style";
import "../../../CssStyles/Header.css";
import "../../../fonts/fonts.css";

class CategoriesButton extends Component {
  handleCategorieChange = (val) => {
    this.props.CurrentCategoryDispatch(val);
  };

  render() {
    const ActiveButton = styled(CategButton)`
      ${({ $active }) =>
        $active &&
        `
    color: #5ece7b;
  `}
    `;
    return (
      <CategoryButtonFlex>
        <Link to="/">
          <ListItemCategoriesButton key="clothes">
            <ActiveButton
              $active={"clothes" === this.props.categor}
              className="Rale6"
              onClick={(e) => {
                this.handleCategorieChange(
                  e.currentTarget.textContent.toLowerCase()
                );
              }}
            >
              CLOTHES
            </ActiveButton>
            {/* Hacky underline */}
            {"clothes" === this.props.categor ? (
              <HackyUnderline></HackyUnderline>
            ) : undefined}
          </ListItemCategoriesButton>
        </Link>

        <Link to="/">
          <ListItemCategoriesButton key="tech">
            <ActiveButton
              $active={"tech" === this.props.categor}
              className="Rale6"
              onClick={(e) => {
                this.handleCategorieChange(
                  e.currentTarget.textContent.toLowerCase()
                );
              }}
            >
              TECH
            </ActiveButton>
            {/* Hacky underline */}
            {"tech" === this.props.categor ? (
              <HackyUnderline></HackyUnderline>
            ) : undefined}
          </ListItemCategoriesButton>
        </Link>
      </CategoryButtonFlex>
    );
  }
}

CategoriesButton.propTypes = {
  categor: PropTypes.string,
  CurrentCategoryDispatch: PropTypes.func,
};

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
)(CategoriesButton);
