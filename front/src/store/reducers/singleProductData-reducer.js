const initialstate = {
  singleProductData: {}
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case "SEARCH_SINGLEPRODUCTDATA":
      return Object.assign({}, state, {
        singleProductData: action.productData
      });
    case "EDIT_SINGLE_PRODUCT":
      return Object.assign({}, state, {
        products: action.productData
      });
    default:
      return state;
  }
};
