import actionTypes from "../actionTypes";

const initiallState = {
  loading: true,
  data: [],
  error: null,
};

export const ProductsReducer = (state = initiallState, action) => {
  switch (action.type) {
    case actionTypes.GET_DATA_START:
      return { ...state, loading: true };
    case actionTypes.GET_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case actionTypes.GET_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
