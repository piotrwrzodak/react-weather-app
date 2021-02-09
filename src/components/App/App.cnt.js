import { connect } from 'react-redux';
import { compose } from 'redux';
import { selectWeather } from '../../store/data/weather/selectors';
import { changePath, fetchWeather } from '../../store/data/weather/actions';

import App from './App.cmp';

const mapState = (state, ownProps) => ({
  weather: selectWeather(state),
  location: state.router.location,
});

const mapDispatch = (dispatch, ownProps) => ({
  fetchApi: (city) => dispatch(fetchWeather(city)),
  changePath: (path) => dispatch(changePath(path)),
});

export default compose(connect(mapState, mapDispatch))(App);
