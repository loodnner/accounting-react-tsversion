import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Money from './views/Money';
import Statistics from './views/Statistics';
import Label from './views/Label';
import NoMatch from './views/NoMatch';



function App() {
  return (
    <Router>   
      <Switch>
          <Route path="/label">
            <Label />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Route path="/money">
            <Money />
          </Route>
          <Route exact path="/">
          <Redirect to="/money"/>
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch> 
    </Router>
  );
}


export default App;
