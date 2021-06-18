import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Money from './views/Money';
import Statistics from './views/Statistics';
import Tags from './views/Tags';
import NoMatch from './views/NoMatch';
import EditTag from 'views/EditTag';



function App() {
  return (
    <Router>   
      <Switch>
          <Route exact path="/tags">
            <Tags />
          </Route>
          <Route exact path="/tags/:id">
            <EditTag />
          </Route>
          <Route exact path="/statistics">
            <Statistics />
          </Route>
          <Route exact path="/money">
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
