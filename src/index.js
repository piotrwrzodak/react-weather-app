import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, ReactReduxContext } from 'react-redux';
import { store, history } from './store';
import './index.css';
import { App } from './components/App';
import { ConnectedRouter } from 'connected-react-router';

ReactDOM.render(
  <Provider store={store} context={ReactReduxContext}>
    <ConnectedRouter history={history} context={ReactReduxContext}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
