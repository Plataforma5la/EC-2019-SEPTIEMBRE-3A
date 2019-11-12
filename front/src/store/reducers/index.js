import { combineReducers } from "redux";
import userReducer from "./user-reducer";
import productListReducer from "./productList-reducer";
import singleProductDataReducer from "./singleProductData-reducer";
import categoriesReducer from "./categories-reducer";
import cartReducer from "./cart-reducer";
import usersReducer from "./users-reducer";

export default combineReducers({
  logged: userReducer,
  products: productListReducer,
  singleProductData: singleProductDataReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  users: usersReducer
});
