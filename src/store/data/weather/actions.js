import * as weatherAT from './action-types';
import { replace, push } from 'connected-react-router';

const API_KEY = process.env.REACT_APP_API_KEY;

const api = {
  key: API_KEY,
  base: 'https://api.openweathermap.org/data/2.5/',
};

export const setWeather = (value) => ({
  type: weatherAT.SET_WEATHER,
  payload: value,
});

const clearState = () => {
  return (dispatch, getState) => {
    const state = getState();
    dispatch(
      replace(state.router.location.state, {
        errorStatusCode: null,
      })
    );
  };
};

export const changePath = (path) => {
  return (dispatch) => {
    clearState();
    dispatch(push(path));
  };
};

export const fetchWeather = (query) => {
  return (dispatch, getState) => {
    const state = getState();
    fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((apiData) => {
        if (apiData.cod === '404') {
          dispatch(
            replace(state.router.location.state, {
              errorStatusCode: apiData.cod,
            })
          );
        } else {
          dispatch(setWeather(apiData));
        }
      });
  };
};
