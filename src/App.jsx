import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  Dashboard,
  About
} from './pages'


const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  )
}

export default App
