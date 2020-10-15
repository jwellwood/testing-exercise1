import * as React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { fireEvent, render } from '@testing-library/react';
import { alertReducer } from 'reducers';
import SnackbarAlert from 'common/components/snackbar/snackbar.component';

describe('SnackbarAlert tests', () => {
  const mockStore = createStore(alertReducer);
  const warningText = 'Invalid credentials! Try again.';
  const handleClose = jest.fn();
  const props = { isVisible: true, handleClose: handleClose };
  test('should render text when visible', () => {
    const { getByText } = render(
      <Provider store={mockStore}>
        <SnackbarAlert {...props} />
      </Provider>
    );
    expect(getByText(warningText)).toBeInTheDocument();
  });
  test('should not show text when hidden', () => {
    const { queryByText } = render(
      <Provider store={mockStore}>
        <SnackbarAlert {...{ ...props, isVisible: false }} />
      </Provider>
    );

    expect(queryByText(warningText)).toBe(null);
  });
  test('should set visibility false onClick', () => {
    const { getByRole } = render(
      <Provider store={mockStore}>
        <SnackbarAlert {...props} />
      </Provider>
    );
    fireEvent.click(getByRole('button'));
    expect(handleClose).toHaveBeenCalled();
  });
});
