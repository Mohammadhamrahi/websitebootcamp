import { combineReducers } from "redux";
import { ProductsReducer } from "./products/ProductsReducer";
import { ProductBasketReducer } from "./productsBasket/productsBasketReducer";
export default combineReducers({
  ProductsReducer,
  ProductBasketReducer,
});
