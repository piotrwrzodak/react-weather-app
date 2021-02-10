import * as weatherAT from './action-types';
import { push, replace } from 'connected-react-router';

const API_KEY = process.env.REACT_APP_API_KEY;

const api = {
  key: API_KEY,
  base: 'https://api.openweathermap.org/data/2.5/',
};

export const setWeather = (value) => ({
  type: weatherAT.SET_WEATHER,
  payload: value,
});

const clearWeather = () => ({
  type: weatherAT.CLEAR_WEATHER,
});

export const changePath = (path) => {
  return (dispatch, getState) => {
    dispatch(clearWeather());
    const state = getState();
    dispatch(
      push({
        pathname: path,
        state: {
          ...state.router.location.state,
          errorStatusCode: null,
        },
      })
    );
  };
};

export const fetchWeather = (query) => {
  return (dispatch, getState) => {
    const state = getState();
    console.log(state.router);
    fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((apiData) => {
        if (apiData.cod === '404') {
          dispatch(
            replace({
              pathname: `/react-weather-app/${query}`,
              state: {
                ...state.router.location.state,
                errorStatusCode: apiData.cod,
              },
            })
          );
        } else {
          dispatch(setWeather(apiData));
        }
      });
  };
};
