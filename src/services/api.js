import axios from 'axios';
import {XRAPIDAPI_URL, XRAPIDAPI_HOST, XRAPIDAPI_APIKEY} from '@env';

const api = axios.create({
  baseURL: XRAPIDAPI_URL,
  headers: {
    'x-rapidapi-key': XRAPIDAPI_APIKEY,
    'x-rapidapi-host': XRAPIDAPI_HOST,
    useQueryString: true,
  },
});

export default api;
