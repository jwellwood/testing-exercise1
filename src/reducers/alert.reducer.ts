import * as types from '../common/actions/action-types';

export const alertState = {
  isVisible: false,
};

type AlertState = typeof alertState;

interface IAction {
  type: string;
  payload: boolean;
}

export const alertReducer = (
  state: AlertState = alertState,
  action: IAction
) => {
  switch (action.type) {
    case types.SHOW_ALERT:
      return { ...state, isVisible: action.payload };
    case types.HIDE_ALERT:
      return { ...state, isVisible: action.payload };
  }
  return state;
};
