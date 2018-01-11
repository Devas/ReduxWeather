import axios from 'axios';

const API_KEY = '6a1355041c3ad724a629b09cd984494f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url,  { crossdomain: true });

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
