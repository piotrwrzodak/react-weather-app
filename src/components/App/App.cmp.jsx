import React, { useState } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Weather } from '../Weather';
import { Home } from '../Home';
import { NotFound } from '../NotFound';
import { dateBuilder } from '../../services/dateBuilder';

export function App(props) {
  const [query, setQuery] = useState('');

  return (
    <HashRouter>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home query={query} setQuery={setQuery} />
          </Route>
          <Route path="/:cityId">
            <Weather
              dateBuilder={dateBuilder}
              props={props}
              query={query}
              setQuery={setQuery}
            />
          </Route>
          <Route path="/place-not-found">
            <NotFound />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
