import React from 'react';
import { LoginContainer } from '../login.container';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import '@testing-library/jest-dom';

const mockReducer = (state = {}, action) => {
  return {
    ...state,
    isVisible: false,
  };
};
describe('login container tests', () => {
  test('should have empty initial login values', () => {
    const mockStore = createStore(mockReducer);
    render(
      <Provider store={mockStore}>
        <LoginContainer />
      </Provider>
    );
    expect(screen.getByRole('textbox')).toHaveValue('');
  });
  test('should not render alert initially', () => {
    const mockAlertReducer = (state = {}, action) => {
      return {
        ...state,
        isVisible: false,
      };
    };
    const mockStore = createStore(mockAlertReducer);
    const { queryByRole } = render(
      <Provider store={mockStore}>
        <LoginContainer />
      </Provider>
    );
    expect(queryByRole('alert')).not.toBeInTheDocument();
  });
  test('should render alert when visible is true', () => {
    const mockAlertReducer = (state = {}, action) => {
      return {
        ...state,
        isVisible: true,
      };
    };
    const mockStore = createStore(mockAlertReducer);
    const { queryByRole } = render(
      <Provider store={mockStore}>
        <LoginContainer />
      </Provider>
    );
    expect(queryByRole('alert')).toBeInTheDocument();
  });
});
