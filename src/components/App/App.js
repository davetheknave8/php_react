import React, {Component} from 'react';
import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Pets from '../Pets/Pets';
import Owners from '../Owners/Owners';


class App extends Component {

  render(){

  return (
    <div className="App">
      <Router>
        <Switch>
          <Redirect exact from="/" to="/pets" />
        </Switch>
        <Route 
        exact 
        path="/pets"
        component={Pets}
        />
        <Route
        exact
        path="/owners"
        component={Owners}
        />
      </Router>
    </div>
  );
  }
}

export default App;
