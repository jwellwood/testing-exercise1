import { renderHook } from '@testing-library/react-hooks';
import { useHotelCollection } from '../hotel-collection.hook';

describe('hotel collection hook tests', () => {
  test('should return an array for hotelCollection, and a function for loadHotelCollection ', () => {
    const { result } = renderHook(() => useHotelCollection());
    expect(Array.isArray(result.current.hotelCollection)).toBe(true);
    expect(result.current.loadHotelCollection).toEqual(expect.any(Function));
  });
});
