import * as actionTypes from './action-types';

export const showAlert = () => {
  return {
    type: actionTypes.SHOW_ALERT,
    payload: true,
  };
};
export const hideAlert = () => {
  return {
    type: actionTypes.HIDE_ALERT,
    payload: false,
  };
};
