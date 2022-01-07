import actionTypes from "../actionTypes";

const initiallState = {
  categorylist: [],
  loading: false,
  error: null,
};

export const CategorylistReducer = (state = initiallState, action) => {
  switch (action.type) {
    case actionTypes.GET_DATA_START_CATEGORY_LIST:
      return { ...state, loading: true };

    case actionTypes.GET_DATA_SUCCESS_CATEGORY_LIST:
      return { ...state, loading: false, categorylist: action.payload };

    case actionTypes.GET_DATA_FAILURE_CATEGORY_LIST:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
