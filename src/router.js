import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Test from "./testComponent";
import Game from "./tick-tack-toe";

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/Test" component={Test} />
      <Route exact path="/Game" component={Game} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;
