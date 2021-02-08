import { connect } from 'react-redux';
import { compose } from 'redux';
import { selectWeather } from '../../store/data/weather/selectors';
import { fetchWeather } from '../../store/data/weather/actions';

import App from './App.cmp';

const mapState = (state, ownProps) => ({
  weather: selectWeather(state),
});

const mapDispatch = (dispatch, ownProps) => ({
  fetchApi: (city) => dispatch(fetchWeather(city)),
});

export default compose(connect(mapState, mapDispatch))(App);
