import { AppConstants } from '../constants/AppConstants';

const initialState = {
  orders: []
};

export default function orders(state = initialState, action = {}) {
  switch (action.type) {
    case AppConstants.ADD_ITEM:
      return {
        ...state,
        orders: [
          ...state.orders,
          action.order
        ]
      };
    default:
      return state;
  }
}
