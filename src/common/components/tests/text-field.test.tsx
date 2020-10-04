import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { TextField } from '../forms/text-field';

describe('Form components test', () => {
  let inputElem;
  beforeEach(() => {
    const inputProps = {} as never;
    const metaProps = {};
    render(<TextField input={inputProps} meta={metaProps} />);
    inputElem = screen.getByRole('textbox') as HTMLInputElement;
  });
  test('should match snapshot', () => {
    expect(inputElem).toMatchSnapshot();
  });
  test('should render a text field', () => {
    expect(inputElem).toBeInTheDocument();
  });
  test('should have empty value without user interaction', () => {
    expect(inputElem).toHaveValue('');
  });
  test('should update value of text field when user enters text', () => {
    const userEnteredValue = 'Hello World!';
    fireEvent.change(inputElem, { target: { value: userEnteredValue } });
    expect(inputElem).toHaveValue(userEnteredValue);
  });
  test('should not show error paragraph if metadata does not have error', () => {
    const inputProps = {} as never;
    const metaProps = {};
    const { container } = render(
      <TextField input={inputProps} meta={metaProps} />
    );
    expect(container.querySelector('p')).not.toBeInTheDocument();
  });
  test('should show error paragraph if metadata has error', () => {
    const inputProps = {} as never;
    const metaProps = {
      error: 'error',
      touched: true,
      submitError: true,
      dirtySinceLastSubmit: false,
    };
    render(<TextField input={inputProps} meta={metaProps} />);
    expect(screen.getByText('error')).toBeInTheDocument();
  });
});
