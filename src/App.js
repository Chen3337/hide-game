import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Game from './components/container';
import Manu from './components/manu';
import Score from './components/score';
function App() {
  return (
    <Router>
        <Switch>
          <Route exact path='/hide-game/' component={Manu} />
          <Route exact path='/hide-game/game/' component={Game} />
          <Route exact path='/hide-game/endgame/:score' component={Score} />
          <Route path='*' component={Manu} />
        </Switch>
    </Router>
  );
}

export default App;
