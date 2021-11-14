import { combineReducers } from "redux";
import {
  ADD_TO_CART,
  ADD_REMOVE_QTTY,
  PRODUCT_COUNT,
  TOGGLE_CURRENCY,
  CURRENT_PRICE,
  CHANGE_OPTION,
  GET_TOTAL,
} from "./Types";
import _ from "lodash";

const initialState = {
  addProduct: [],
  quantityOfProducts: 0,
  InitialCurrency: {
    text: "USD",
    unicodeText: "\u0024",
  },
  getTotal: 0,
};

const AddToCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      let inCart = false;
      state.addProduct.forEach((product) => {
        if (product.id === action.id) {
          if (_.isEqual(product.options, action.options) === true) {
            inCart = true;
            console.log(inCart);
          }
        }
      });
      //action.options
      return {
        ...state,
        addProduct: inCart
          ? state.addProduct.map((prod) =>
              prod.id === action.id && _.isEqual(prod.options, action.options)
                ? { ...prod, qtty: prod.qtty + 1 }
                : prod
            )
          : [
              ...state.addProduct,
              {
                id: action.id,
                options: action.options,
                attributes: action.attributes,
                prices: action.prices,
                amount: action.amount,
                qtty: 1,
              },
            ],
      };
    }
    case ADD_REMOVE_QTTY: {
      return {
        ...state,
        addProduct: state.addProduct
          .map((prod) =>
            prod.id === action.id && _.isEqual(prod.options, action.options)
              ? { ...prod, qtty: prod.qtty + action.IncOrDec }
              : prod
          )
          .filter((prod) => prod.qtty > 0),
      };
    }
    case PRODUCT_COUNT: {
      console.log(state.addProduct.length);
      let count = 0;
      let len = state.addProduct.length;
      for (let i = 0; i < len; i++) {
        count = count + state.addProduct[i].qtty;
      }
      return { ...state, quantityOfProducts: count };
    }
    case TOGGLE_CURRENCY: {
      return {
        ...state,
        InitialCurrency: { text: action.text, unicodeText: action.unicodeText },
      };
    }
    case CHANGE_OPTION: {
      return {
        ...state,
        addProduct: state.addProduct
          .map((prod) =>
            prod.id === action.id && _.isEqual(prod.options, action.oldVal)
              ? { ...prod, options: action.newVal }
              : prod
          )
          .filter(
            (prod, index, self) =>
              index ===
              self.findIndex(
                (p) => p.id === prod.id && _.isEqual(p.options, prod.options)
              )
          ),
      };
    }
    case CURRENT_PRICE: {
      let index = [];
      state.addProduct.forEach((prod,i) => {
        index[i] = prod.prices.findIndex(cur => cur.currency === action.currency);
      })

      //action.options
      return {
        ...state,
        addProduct: state.addProduct.map((prod,i) => 
        prod !== undefined?
         {...prod, amount: prod.prices[index[i]]}:
         prod
        )
    }
  }
    case GET_TOTAL: {
      let count = 0;
      let len = state.addProduct.length;
      for (let i = 0; i < len; i++) {
        count = count + (state.addProduct[i].amount.amount * state.addProduct[i].qtty);
      }
      count = Math.round((count + Number.EPSILON) * 100) / 100
      return { ...state, getTotal: count };
    }
    default: {
      return state;
    }
  }
};

const CurrentCategory = (state = "", { type, payload }) => {
  switch (type) {
    case "CURRENT_CATEGORY": {
      return payload;
    }
    default: {
      return state;
    }
  }
};

const CartOpenState = (state = false, { type, payload }) => {
  switch (type) {
    case "TOGGLE_CART_STATE":
      return !state;
    default:
      return state;
  }
};
const CurrencyOpenState = (state = false, { type, payload }) => {
  switch (type) {
    case "TOGGLE_CUR_STATE":
      return !state;
    default:
      return state;
  }
};

const AllReducers = combineReducers({
  CurrentCategory,
  CartOpenState,
  CurrencyOpenState,
  AddToCart,
});

export default AllReducers;
