import { mapToCollection } from '../collection.mapper';

describe('collection mapper tests', () => {
  let result;
  let collection;
  const mapFunction = jest.fn();
  beforeEach(() => {
    result = mapToCollection(collection, mapFunction);
  });
  test('should return an empty array for undefined', () => {
    collection = undefined;
    expect(result).toEqual([]);
  });
  test('should return an empty array for null', () => {
    collection = null;
    expect(result).toEqual([]);
  });
  test('should return an empty array for empty array', () => {
    collection = [];
    expect(result).toEqual([]);
  });
  test('should call mapFn when collection is an array with any data', () => {
    collection = [{ id: 1 }];
    mapToCollection(collection, mapFunction);
    expect(mapFunction).toHaveBeenCalled();
  });
});
