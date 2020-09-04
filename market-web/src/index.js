import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

function World() {
  return <h1>Hello World!</h1>
}

function Hello() {
  return (<>
    <h1>Hello</h1>
    <NavLink to="/world">
      hello who?
</NavLink>
  </>);
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route exact path="/">
          <Hello />
        </Route>
      <Route path="/world">
        <World />
      </Route>

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);