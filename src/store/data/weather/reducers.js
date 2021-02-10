import * as weatherAT from './action-types';

const initialState = {
  weather: {},
  error: null,
};

export default function weatherReducers(state = initialState, action) {
  switch (action.type) {
    case weatherAT.SET_WEATHER: {
      return {
        ...state,
        weather: action.payload,
      };
    }
    case weatherAT.SET_WEATHER_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case weatherAT.CLEAR_WEATHER: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
