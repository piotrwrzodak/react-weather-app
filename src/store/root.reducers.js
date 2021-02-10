import { combineReducers } from 'redux';

import { FEATURE_DATA_NAME, FEATURE_WEATHER_NAME } from './constants';
import weatherReducers from './data/weather/reducers';

export default combineReducers({
  [FEATURE_DATA_NAME]: weatherReducers,
});
