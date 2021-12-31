import { combineReducers } from "redux";
import { ProductsReducer } from "./products/ProductsReducer";
import { ProductBasketReducer } from "./productsBasket/productsBasketReducer";
import { searchReduser } from "./search/searchReducer";
export default combineReducers({
  ProductsReducer,
  ProductBasketReducer,
  searchReduser: searchReduser,
});
