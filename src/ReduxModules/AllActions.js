import { ADD_TO_CART, ADD_REMOVE_QTTY, PRODUCT_COUNT,CHANGE_OPTION,CURRENT_PRICE, GET_TOTAL, TOGGLE_CURRENCY} from "./Types";

export const AddToCart = (id,options, prices, attributes, amount) => {
  return{
    type: ADD_TO_CART,
    options: options,
    id: id,
    prices:prices,
    attributes: attributes,
    amount: amount
  }
}
export const IncorDecProd = (id, attribute, IncOrDec, value) => {
  return{
    type: ADD_REMOVE_QTTY,
    options: attribute,
    IncOrDec: IncOrDec,
    id: id,
  }
}
export const ChangeOption = (id,oldVal,newVal, qtty) => {
  return{
    type: CHANGE_OPTION,
    oldVal: oldVal,
    newVal: newVal,
    id: id,
    qtty: qtty
  }
}
export const ProductCount = () => {
  return{
    type: PRODUCT_COUNT
  }
}
export const CurrentCategory = (category) => {
  return{
    type: "CURRENT_CATEGORY",
    payload: category
  }
}
export const ToggleCartState = (boolVal) => {
    return{
      type: 'TOGGLE_CART_STATE',
      payload: boolVal
    }
  }
export const ToggleCurState = (boolVal) => {
  return{
    type: 'TOGGLE_CUR_STATE',
    payload: boolVal
  }
}
export const CurrencyState = (unicodeText, text) => {
  return{
    type: TOGGLE_CURRENCY,
    text: text,
    unicodeText: unicodeText
  }
}
export const GetTotal = (currency) => {
  return{
    type: GET_TOTAL,
    currency: currency
  }
}
export const CurrentAmount = (currency) => {
  return{
    type: CURRENT_PRICE,
    currency: currency
}
}