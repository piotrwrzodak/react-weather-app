import { combineReducers } from 'redux';
import { FEATURE_DATA_NAME } from '../../constants';
import * as weatherAT from './action-types';

const initialState = {
  weather: {},
};

function dataReducers(state = initialState, action) {
  switch (action.type) {
    case weatherAT.SET_WEATHER: {
      return {
        ...state,
        weather: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({
  [FEATURE_DATA_NAME]: dataReducers,
});
