import { MOVE_ORDER_TO_CUSTOMER } from "../actions/farmTypes";
import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from "../actions/marketTypes";

const budgetInitialState = {
  profit: 0,
  marketExpanse: 0,
  farmExpanse: 0,
  deliveryExpanse: 0
};

export default (state = budgetInitialState, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_CUSTOMER:
      return { ...state, deliveryExpanse: state.deliveryExpanse + 20 };

    case CREATE_ORDER:
      return {
        ...state,
        profit: state.profit + action.payload.price,
        marketExpanse: state.marketExpanse + 20
      };

    case MOVE_ORDER_TO_FARM:
      return { ...state, farmExpanse: state.farmExpanse + 100 };

    default:
      return state;
  }
};
