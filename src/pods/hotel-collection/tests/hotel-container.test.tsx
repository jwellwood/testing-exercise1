import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { HotelCollectionContainer } from '../hotel-collection.container';

describe('hotel container tests', () => {
  test('should render the hotel collection component', async () => {
    const { getByTestId } = render(<HotelCollectionContainer />);
    expect(getByTestId('collection')).toBeInTheDocument();
  });
});
