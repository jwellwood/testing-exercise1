import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { LoginComponent } from '../login.component';
import userEvent from '@testing-library/user-event';

describe('login component tests', () => {
  const props = {
    onLogin: jest.fn(),
    initialLogin: {
      login: '',
      password: '',
    },
    showSnackbar: false,
  };
  test('should render "Login" in two places', () => {
    render(<LoginComponent {...props} />);
    const titleElem = screen.getAllByText('Login');
    expect(titleElem).toHaveLength(2);
    expect(screen.getByRole('button').textContent).toBe('Login');
  });
  test('should render a username input', () => {
    render(<LoginComponent {...props} />);
    expect(screen.getByRole('textbox')).toHaveValue(props.initialLogin.login);
    expect(screen.getByText('Name')).toBeInTheDocument();
  });
  test('should render a password input', () => {
    const { container } = render(<LoginComponent {...props} />);
    const passwordInput = container.querySelector('input[type="password"]');
    expect(passwordInput).toHaveValue(props.initialLogin.password);
    expect(screen.getByText('Password')).toBeInTheDocument();
  });
  test('updates value of login and password field', async () => {
    const { container } = render(<LoginComponent {...props} />);
    await userEvent.type(screen.getByRole('textbox'), 'name');
    expect(screen.getByRole('textbox')).toHaveValue('name');
    await userEvent.type(
      container.querySelector('input[type="password"]'),
      'password'
    );
    expect(container.querySelector('input[type="password"]')).toHaveValue(
      'password'
    );
  });
});
