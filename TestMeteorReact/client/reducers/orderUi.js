import { AppConstants } from '../constants/AppConstants';

const initialState = {
  activeStep: AppConstants.FORMULE
};

export default function orderUi(state = initialState, action = {}) {
  switch (action.type) {
    case AppConstants.CHANGE_STEP:
      return {
        ...state,
        activeStep: action.step
      };
    default:
      return state;
  }
}
