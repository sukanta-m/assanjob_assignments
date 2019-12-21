import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Continents from './containers/continents';
import Continent from "./containers/continent";

export default function () {
  return (
    <div className="main-wrapper">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Continents} />
          <Route exact path="/continents" component={Continents} />
          <Route exact path="/continents/:code" component={Continent} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
