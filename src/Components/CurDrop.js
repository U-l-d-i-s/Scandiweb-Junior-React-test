import { Component } from "react";
import PropTypes from 'prop-types';

import "../CssStyles/Header.css";
import { ModalWhite, CurDropdown, CurDisplayProducts } from "./Header.style";
import { Query } from "@apollo/client/react/components";
import { CURRENCIES } from "../queries/QueryGql";
import ListItemCur from "./ListItemCur";
import { symbols } from "./CurrencySymbols";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  ToggleCurState,
  CurrencyState,
  CurrentAmount,
  GetTotal,
} from "../ReduxModules/AllActions";

class CurDrop extends Component {
  handleCurrency = (id, uri) => {
    this.props.CurrencyStateDispatch(uri, id);
    this.props.CurrentAmountDispatch(id);
    this.props.GetTotalDispatch(id);
  };

  close = () => {
    this.props.ToggleCurStateDispatch();
  };
  render() {
    return (
      <Query query={CURRENCIES}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return <p>Error :(</p>;

          const product = data.currencies.map((prod, i) => {
            let curSymb = symbols.find((c) => c.name === prod);
            return (
              <ListItemCur
                id={i}
                key={prod}
                currencyValue={curSymb}
                handleCurrency={this.handleCurrency}
              />
            );
          });
          return (
            <ModalWhite onClick={this.close}>
              <CurDropdown onClick={(e) => e.stopPropagation()}>
                <CurDisplayProducts>{product}</CurDisplayProducts>
              </CurDropdown>
            </ModalWhite>
          );
        }}
      </Query>
    );
  }
}

CurDrop.propTypes = {
  ToggleCurStateDispatch : PropTypes.func,
  CurrencyStateDispatch : PropTypes.func,
  CurrentAmountDispatch : PropTypes.func,
  GetTotalDispatch : PropTypes.func,
} 

export default connect(null, (dispatch) =>
  bindActionCreators(
    {
      ToggleCurStateDispatch: ToggleCurState,
      CurrencyStateDispatch: CurrencyState,
      CurrentAmountDispatch: CurrentAmount,
      GetTotalDispatch: GetTotal,
    },
    dispatch
  )
)(CurDrop);
