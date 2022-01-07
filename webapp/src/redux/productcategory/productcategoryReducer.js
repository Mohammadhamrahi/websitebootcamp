import actionTypes from "../actionTypes";

const initiallState = {
  category: [],
  loading: true,
  error: null,
};

export const ProductcategoryReducer = (state = initiallState, action) => {
  switch (action.type) {
    case actionTypes.GET_DATA_START_CATEGORY:
      return { ...state, loading: true };
    case actionTypes.GET_DATA_SUCCESS_CATEGORY:
      return { ...state, loading: false, category: action.payload };
    case actionTypes.GET_DATA_FAILURE_CATEGORY:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
