import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from "../actions/marketTypes";

const marketInitialStatte = {
  orders: []
};

export default (state = marketInitialStatte, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return { ...state, orders: [...state.orders, action.payload] };

    case MOVE_ORDER_TO_FARM:
      return {
        ...state,
        orders: state.orders.filter(order => order.id !== action.payload.id)
      };

    default:
      return state;
  }
};
