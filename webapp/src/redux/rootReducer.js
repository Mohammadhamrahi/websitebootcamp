import { combineReducers } from "redux";
import { ProductsReducer } from "./products/ProductsReducer";
import { ProductBasketReducer } from "./productsBasket/productsBasketReducer";
import { searchReduser } from "./search/searchReducer";
import { CategorylistReducer } from "./categorylist/categorylistReduser";
import { ProductcategoryReducer } from "./productcategory/productcategoryReducer";
export default combineReducers({
  ProductsReducer,
  ProductBasketReducer,
  CategorylistReducer,
  ProductcategoryReducer,
  searchReduser: searchReduser,
});
