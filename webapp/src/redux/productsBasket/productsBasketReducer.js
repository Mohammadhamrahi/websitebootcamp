import actionTypes from "../actionTypes";

const initionallstate = {
  selectedProduct: [],
};

export const ProductBasketReducer = (state = initionallstate, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_BASKET:
      return {
        ...state,
        selectedProduct: [...state.selectedProduct, action.payload],
      };
    case actionTypes.UPDATE_AMOUNT:
      return {
        ...state,
        selectedProduct: state.selectedProduct.map((item) => {
          return item.id === action.payload.id ? action.payload : item;
        }),
      };
    case actionTypes.REMOVE_FROM_BASKET:
      return {
        ...state,
        selectedProduct: state.selectedProduct.filter((item) => 
          item.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
