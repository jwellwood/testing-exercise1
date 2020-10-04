import { alertReducer } from '..';
import * as types from 'common/actions';
import { alertState } from '../alert.reducer';

describe('todos reducer', () => {
  test('should return the initial state', () => {
    expect(alertReducer(undefined, {} as never)).toEqual({ ...alertState });
  }),
    test('should handle SHOW_ALERT', () => {
      expect(
        alertReducer(
          { ...alertState },
          {
            type: types.SHOW_ALERT,
            payload: true,
          }
        )
      ).toEqual({
        isVisible: true,
      });
    });
  test('should handle HIDE_ALERT', () => {
    expect(
      alertReducer(
        { ...alertState },
        {
          type: types.HIDE_ALERT,
          payload: false,
        }
      )
    ).toEqual({
      isVisible: false,
    });
  });
});
