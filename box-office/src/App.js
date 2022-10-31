import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is a homepage
      </Route>
      <Route exact path="/login">
        This is a login page
      </Route>
      <Route>This is 404 page</Route>
    </Switch>
  );
}

export default App;
