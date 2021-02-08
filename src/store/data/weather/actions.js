import * as weatherAT from './action-types';

const api = {
  key: 'your key:)',
  base: 'https://api.openweathermap.org/data/2.5/',
};

export const setWeather = (value) => ({
  type: weatherAT.SET_WEATHER,
  payload: value,
});

export const fetchWeather = (query) => {
  return (dispatch, getState) => {
    fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        dispatch(setWeather(result));
      });
  };
};
