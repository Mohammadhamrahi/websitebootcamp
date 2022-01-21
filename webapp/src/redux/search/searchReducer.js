import { ActionType } from "./ActionType";

const initiallstate = {
  searchdata: [],
};

export const searchReduser = (state = initiallstate, action) => {
  switch (action.type) {
    case ActionType.SEARCHTEMP:
      return {
        ...state,
        searchdata: action.payload,
      };

    default:
      return state;
  }
};
