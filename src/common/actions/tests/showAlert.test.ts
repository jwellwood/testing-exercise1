import { showAlert } from '..';
import * as types from '..';

describe('showAlert action test', () => {
  it('should create an action to update the state', () => {
    const isVisible = true;
    const expectedAction = {
      type: types.SHOW_ALERT,
      payload: isVisible,
    };
    expect(showAlert()).toEqual(expectedAction);
  });
  it('should not work when isVisible is false', () => {
    const isVisible = false;
    const expectedAction = {
      type: types.SHOW_ALERT,
      payload: !isVisible,
    };
    expect(showAlert()).toEqual(expectedAction);
  });
});
