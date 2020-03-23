import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Game from './components/container';
import Manu from './components/manu';
function App() {
  return (
    <Router>
        <Switch>
          <Route exact path='/hide-game/' component={Manu} />
          <Route exact path='/hide-game/game' component={Game} />
        </Switch>
    </Router>
  );
}

export default App;
