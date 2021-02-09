import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { FEATURE_DATA_NAME } from './constants';
import weatherReducers from './data/weather/reducers';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    [FEATURE_DATA_NAME]: weatherReducers,
  });

export default rootReducer;
