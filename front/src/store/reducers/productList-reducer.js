const initialState = {
  productList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_PRODUCTLIST":
      return Object.assign({}, state, {
        productList: action.products
      });

    default:
      return state;
  }
};
