const initialState = {
    cart: [],
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TOCART":
        return Object.assign({}, state, {
          cart: [...state.cart, action.product]
        });
      case "SET_CART":
        return Object.assign({}, state, {
          cart: action.cart
        });
  
      default:
        return state;
    }
  };
  