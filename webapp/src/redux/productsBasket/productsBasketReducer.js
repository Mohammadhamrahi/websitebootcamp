import actionTypes from "../actionTypes";

const initionallstate = {
  selectProduct: [],
  loading: true,
};

export const ProductBasketReducer = (state = initionallstate, action) => {
  switch (action.type) {
    case actionTypes.GET_DATA_START:
      return { ...state, loading: true };
    case actionTypes.ADD_TO_BASKET:
      return {
        ...state,
        selectProduct: [...state.selectProduct, action.payload],
      };

    default:
      return state;
  }
};
