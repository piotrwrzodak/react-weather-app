import { FEATURE_WEATHER_NAME } from '../../constants';
import { selectDataState } from '../data.selectors';

export const selectWeather = (state) =>
  selectDataState(state)[FEATURE_WEATHER_NAME];
