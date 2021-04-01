import api from './api';

export const getHousesCall = async () => {
  try {
    const result = await api.get(
      `/properties/v2/list-for-rent?city=Miami&limit=10&state_code=FL&sort=relevance&offset=0`,
    );

    return result;
  } catch (error) {
    console.log({error});
    return error;
  }
};

export const getHouseDetail = async ({property_id}) => {
  try {
    const result = await api.get(
      `/properties/v2/detail?property_id=${property_id}`,
    );

    return result;
  } catch (error) {
    console.log({error});
    return error;
  }
};
