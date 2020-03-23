import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Game from './components/container';
import Manu from './components/manu';
function App() {
  return (
    <Router>
        <Switch>
          <Route exact path='/' component={Manu} />
          <Route exact path='/game' component={Game} />
        </Switch>
    </Router>
  );
}

export default App;
