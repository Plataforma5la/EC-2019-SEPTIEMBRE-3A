const initialState = {
    productList: [],
    categories:[],
    category:''
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case "SEARCH_PRODUCTLIST":
          return Object.assign({}, state, {
            productList: action.products
          });
      case "SET_CATEGORIES":
      return Object.assign({}, state, {
          categories: action.categories
        });
      case "SET_CATEGORY":
      return Object.assign({}, state, {
          category: action.category
        });
  
      default:
        return state;
    }
  };
  
