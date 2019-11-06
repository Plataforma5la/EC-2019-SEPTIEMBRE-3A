const initialstate = {
  singleProductData: {}
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case "SEARCH_SINGLEPRODUCTDATA":
      return Object.assign({}, state, {
        singleProductData: action.productData
      });
    default:
      return state;
  }
};
