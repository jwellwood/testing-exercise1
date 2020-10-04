import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { HotelCard } from '../hotel-card.component';
import { hotels } from 'common/mock/hotels.mock';

describe('hotel card tests', () => {
  const props = { ...hotels[0] };
  beforeEach(() => {
    render(<HotelCard hotel={props} />);
  });
  test('should render a card header with a title and subtitle when passed props', () => {
    const titleElem = screen.getByText(props.name);
    const subtitle = screen.getByText(props.address);
    expect(titleElem).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });
  test('should render a material UI avatar with the hotel rating', () => {
    const avatar = screen.getByLabelText('Hotel');
    expect(avatar).toHaveTextContent(props.rating.toString());
  });
  test('should render a card body with a title and a description when passed props', () => {
    const description = screen.getByText(props.description);
    expect(description).toBeInTheDocument();
  });
  test('should render three icon buttons', () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(3);
  });
  test('should render an image with the picture prop as the background url', () => {
    const image = screen.getByTitle(props.name);
    expect(image.style.backgroundImage).toEqual(`url(${props.picture})`);
  });
});
