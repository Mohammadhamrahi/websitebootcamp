import { ActionType } from "./ActionType";

export const searchAction = (data) => ({
  type: ActionType.SEARCHBASKET,
  payload: data,
});
