import { mapFromApiToVm } from '../hotel-collection.mapper';
import { hotelApiResponse } from 'common/mock/hotels-response.mock';

describe('hotel collection tests', () => {
  const hotel = hotelApiResponse[0];
  const result = mapFromApiToVm({ ...hotel });
  const resultObject = Object.keys(result);

  test('should return an object with six key value pairs', () => {
    expect(resultObject).toHaveLength(6);
  });
  test('should return an object with correct keys', () => {
    expect(resultObject).toEqual([
      'id',
      'picture',
      'name',
      'description',
      'rating',
      'address',
    ]);
  });
});
