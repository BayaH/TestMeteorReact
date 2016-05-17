import { AppConstants } from '../constants/AppConstants';

export function addOrder(order) {
  return {
    type: AppConstants.ADD_ITEM,
    order
  };
}
