import axios from "axios";
import { BASE_API } from "../../baseUrl";
import actionTypes from "../actionTypes";

const getCategory = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_DATA_START_CATEGORY });
      const { data } = await axios.get(`${BASE_API}/products/categories`);
      dispatch({ type: actionTypes.GET_DATA_SUCCESS_CATEGORY, payload: data });
    } catch (e) {
      dispatch({ type: actionTypes.GET_DATA_FAILURE_CATEGORY, payload: e });
    }
  };
};

export default { getCategory };
