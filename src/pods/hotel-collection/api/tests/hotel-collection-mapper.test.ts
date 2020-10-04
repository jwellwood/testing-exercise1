import { mapFromApiToVm } from '../hotel-collection.mapper';
import { mockData } from './hotel-mock-data';

describe('hotel collection tests', () => {
  const hotel = mockData[0];
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
