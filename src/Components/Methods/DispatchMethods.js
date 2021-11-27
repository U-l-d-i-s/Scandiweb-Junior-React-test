export const checkThenDispatchDefault = async (
  id,
  data,
  prices,
  amount,
  CurrencyText,
  AddToCartDispatch,
  ProductCountDispatch,
  GetTotalDispatch
) => {
  let options = {};
  let CurrentPrice = {};

  CurrentPrice["amount"] = amount;
  CurrentPrice["currency"] = CurrencyText;

  //get Default Options
  data.product.attributes.map((prod) =>
    prod.items.forEach((pr, i) => {
      if (i === 0) {
        options[prod.id] = pr.value;
      }
    })
  );
  //dispatch
  if (options !== undefined) {
    AddToCartDispatch(id, options, prices, data.product.attributes, CurrentPrice);
    ProductCountDispatch();
    GetTotalDispatch(CurrencyText);
  } else {
    alert("Something Went Wrong :(");
  }
};

export const checkThenDispatch = async (
  id,
  data,
  options,
  prices,
  amount,
  CurrencyText,
  AddToCartDispatch,
  ProductCountDispatch,
  GetTotalDispatch
) => {
  let CurrentPrice = {};

  CurrentPrice["amount"] = amount;
  CurrentPrice["currency"] = CurrencyText;

  //validation
  const optionsLen = Object.keys(options).length;
  const attributesLen = data.attributes.length;

  if(attributesLen !== optionsLen) {
    return alert("Check All Options! ")
  }
  //if Valid => dispatch
  if (options !== undefined) {
    AddToCartDispatch(id, options, prices, data.attributes, CurrentPrice);
    ProductCountDispatch();
    GetTotalDispatch(CurrencyText);
  } else {
    alert("Something Went Wrong :(");
  }
};




// export const checkThenDispatch = async () => {
//   const {data} = await this.props.client.query({
//     query:ATTRIBUTES_BY_ID,
//     variables: {productId: this.props.id},
//     fetchPolicy: "network-only"
//   });
//   let options = {};
//   let prices = this.props.product.prices;
//   let attributes = this.props.product.attributes;
//   let amount = {};

//   amount["amount"] = this.props.amount;
//   amount["currency"] = this.props.currencySymbol;

//   //get Default Options
//   data.product.attributes.map((prod) =>
//     prod.items.forEach((pr, i) => {
//       if (i === 0) {
//         options[prod.id] = pr.value;
//       }
//     })
//   );
//   //dispatch
//   if (options !== undefined) {
//     this.props.AddToCartDispatch(
//       this.props.id,
//       options,
//       prices,
//       attributes,
//       amount
//     );
//     this.props.ProductCountDispatch();
//     this.props.GetTotalDispatch(this.props.currency);
//   }else{
//     alert("Something Went Wrong :(")
//   }
// };
