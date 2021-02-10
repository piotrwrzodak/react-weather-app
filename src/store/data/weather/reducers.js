import * as weatherAT from './action-types';

const initialState = {
  weather: {},
};

export default function weatherReducers(state = initialState, action) {
  switch (action.type) {
    case weatherAT.SET_WEATHER: {
      return {
        ...state,
        weather: action.payload,
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
