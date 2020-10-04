import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { HotelCollectionComponent } from '../hotel-collection.component';
import { hotels } from 'common/mock/hotels.mock';

describe('hotel collection tests', () => {
  test('should render two hotels cards with their names when fed an array of two hotels', () => {
    render(<HotelCollectionComponent hotelCollection={hotels} />);
    const name1 = screen.getByText('name1');
    const name2 = screen.getByText('name2');
    expect(name1).toBeInTheDocument();
    expect(name2).toBeInTheDocument();
  });
  test('should not render anything when fed an empty array', () => {
    const { container } = render(
      <HotelCollectionComponent hotelCollection={[]} />
    );
    expect(container.firstChild).toBeEmptyDOMElement();
  });
});
