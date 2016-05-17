import { AppConstants } from '../constants/AppConstants';

export function setStep(step) {
  return {
    type: AppConstants.CHANGE_STEP,
    step
  };
}
