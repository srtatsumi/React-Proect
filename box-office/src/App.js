import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import Starred from './pages/Starred';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/starred">
        <Starred />
      </Route>
      <Route>
        <Page404 />
      </Route>
    </Switch>
  );
}

export default App;
