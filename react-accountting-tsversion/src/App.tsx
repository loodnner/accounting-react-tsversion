import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from 'styled-components';
import Nav from "./components/Nav";

const Wrapper = styled.div`
height:100vh;
display: flex;
flex-direction: column;
`

const Main = styled.div`
flex-grow:1;
overflow:auto;
`



function App() {
  return (
    <Router>   
      <Wrapper>
      <Main>
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
        </Main>
      <Nav />
      </Wrapper>
    </Router>
  );
}

function Money() {
  return <h2>Money</h2>;
}

function Label() {
  return <h2>Label</h2>;
}

function Statistics() {
  return <h2>Statistics</h2>;
}

function NoMatch() {
  return (
    <div>"输错地址啦"</div>
  );
}

export default App;
