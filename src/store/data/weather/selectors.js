import {
  FEATURE_WEATHER_NAME,
  FEATURE_WEATHER_ERROR_NAME,
} from '../../constants';
import { selectDataState } from '../data.selectors';

export const selectWeather = (state) =>
  selectDataState(state)[FEATURE_WEATHER_NAME];

export const selectWeatherError = (state) =>
  selectDataState(state)[FEATURE_WEATHER_ERROR_NAME];
