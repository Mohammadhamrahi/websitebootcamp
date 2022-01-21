import { ActionType } from "./ActionType";

export const searchAction = (data) => ({
  type: ActionType.SEARCHTEMP,
  payload: data,
});
