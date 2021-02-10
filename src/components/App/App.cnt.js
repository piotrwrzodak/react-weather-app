import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  selectWeather,
  selectWeatherError,
} from '../../store/data/weather/selectors';
import { fetchWeather } from '../../store/data/weather/actions';

import App from './App.cmp';

const mapState = (state, ownProps) => ({
  weather: selectWeather(state),
  error: selectWeatherError(state),
});

const mapDispatch = (dispatch, ownProps) => ({
  fetchApi: (city) => dispatch(fetchWeather(city)),
});

export default compose(connect(mapState, mapDispatch))(App);
