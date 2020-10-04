import { hideAlert } from '..';
import * as types from '..';

describe('hideAlert action tests', () => {
  it('should create an action to update the state', () => {
    const isVisible = false;
    const expectedAction = {
      type: types.HIDE_ALERT,
      payload: isVisible,
    };
    expect(hideAlert()).toEqual(expectedAction);
  });
  it('should not work with when isVisible is true', () => {
    const isVisible = true;
    const expectedAction = {
      type: types.HIDE_ALERT,
      payload: !isVisible,
    };
    expect(hideAlert()).toEqual(expectedAction);
  });
});
