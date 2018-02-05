import * as types from "./farmTypes";

export const moveOrderToCustomer = payload => ({
  type: types.MOVE_ORDER_TO_CUSTOMER,
  payload
});
