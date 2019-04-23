import React from 'react';
import './assets/css/style.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import Search from "./views/Search";
import Results from "./views/Results";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/"} component={Search} exact />
        <Route path={"/Results"} component={Results} />
      </Switch>
    </Router>
  );
}

export default App;
