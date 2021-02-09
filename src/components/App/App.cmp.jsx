import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Weather } from '../Weather';
import { Home } from '../Home';
import { NotFound } from '../NotFound';
import { dateBuilder } from '../../services/dateBuilder';
import ErrorHandler from '../../services/ErrorHandler';

export function App(props) {
  const [query, setQuery] = useState('');

  return (
    <BrowserRouter>
      <ErrorHandler props={props}>
        <div
          className={
            10 > new Date().getMonth() > 4 || props.weather.main?.temp > 16
              ? 'app'
              : 'app app--cold'
          }
        >
          <Switch>
            <Route exact path="/">
              <Home props={props} query={query} setQuery={setQuery} />
            </Route>
            <Route path="/current-weather/:cityId">
              <Weather
                dateBuilder={dateBuilder}
                props={props}
                query={query}
                setQuery={setQuery}
              />
            </Route>
            <Route path="/place-not-found">
              <NotFound props={props} />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </ErrorHandler>
    </BrowserRouter>
  );
}

export default App;
