import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import 'tailwindcss/dist/base.min.css'
import tw, { css } from 'twin.macro'

function World() {
  return (
    <>
      <h1>Hello World!</h1>
    </>
  );
}

function Hello() {
  return (<>
    <h2 css={
      [tw`bg-green-200`, css`color: red;`]
    }>
      Hello</h2>
    <NavLink css={
      [tw`cursor-pointer`]
    } to="/world">
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