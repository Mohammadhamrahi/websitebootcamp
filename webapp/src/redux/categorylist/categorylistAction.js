import axios from "axios";
import { BASE_API } from "../../baseUrl";
import actionTypes from "../actionTypes";

const getCategoryproduct = (name) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_DATA_START_CATEGORY_LIST });

      const data = await axios.get(`${BASE_API}/products/category/${name}`);
      console.log(data);
      dispatch({
        type: actionTypes.GET_DATA_SUCCESS_CATEGORY_LIST,
        payload: data.data,
      });
    } catch (e) {
      dispatch({
        type: actionTypes.GET_DATA_FAILURE_CATEGORY_LIST,
        payload: e,
      });
    }
  };
};

export default { getCategoryproduct };
