import * as weatherAT from './action-types';

const API_KEY = process.env.REACT_APP_API_KEY;

const api = {
  key: API_KEY,
  base: 'https://api.openweathermap.org/data/2.5/',
};

export const setWeather = (value) => ({
  type: weatherAT.SET_WEATHER,
  payload: value,
});

export const setWeatherError = (value) => ({
  type: weatherAT.SET_WEATHER_ERROR,
  payload: value,
});

const clearWeather = () => ({
  type: weatherAT.CLEAR_WEATHER,
});

export const fetchWeather = (query) => {
  return (dispatch, getState) => {
    dispatch(clearWeather());
    const state = getState();
    fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((apiData) => {
        if (apiData.cod === '404') {
          dispatch(setWeatherError(404));
        } else {
          dispatch(setWeather(apiData));
        }
      });
  };
};
