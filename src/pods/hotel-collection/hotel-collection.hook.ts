import * as React from 'react';
import { HotelEntityVm } from './api/hotel-collection.vm';
import { getHotelCollection } from './api/hotel-collection.api';
import { mapFromApiToVm } from './api/hotel-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useHotelCollection = () => {
  const [hotelCollection, setHotelCollection] = React.useState<HotelEntityVm[]>(
    []
  );

  const loadHotelCollection = async () => {
    const result = await getHotelCollection();
    setHotelCollection(mapToCollection(result, mapFromApiToVm));
  };

  return { hotelCollection, loadHotelCollection };
};
