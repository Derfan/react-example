import * as types from "./marketTypes";

export const createOrder = payload => ({
  type: types.CREATE_ORDER,
  payload
});

export const moveOrderToFarm = payload => ({
  type: types.MOVE_ORDER_TO_FARM,
  payload
});
