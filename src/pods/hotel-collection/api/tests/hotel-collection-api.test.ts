import { mockData } from './hotel-mock-data';
import axios from 'axios';
import { getHotelCollection } from '../hotel-collection.api';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('hotel collection API tests', () => {
  test('should call get on axios and return the mocked data', async () => {
    mockedAxios.get.mockResolvedValue({
      data: [...mockData],
    });
    const hotels = await getHotelCollection();
    expect(hotels).toHaveLength(1);
    expect(hotels[0].name).toEqual('Motif Seattle');
  });
});
