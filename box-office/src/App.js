import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navs from './components/Navs';

function App() {
  return (
    <div>
      <Navs />
      <Switch>
        <Route exact path="/">
          This is a homepage
        </Route>
        <Route exact path="/login">
          This is a login page
        </Route>
        <Route>This is 404 page</Route>
      </Switch>
    </div>
  );
}

export default App;
