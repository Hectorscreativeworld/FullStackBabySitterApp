import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import LogIn from './components/LogIn'
import Register from './components/Register'
import BabySitterLogIn from './components/BabySitterLogIn'
import ParentLogIn from './components/ParentLogIn'
import MainPage from './components/MainPage'
import PageNotFound from './components/PageNotFound'
import './BabysitterLogin.css'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/BabySitterLogIn" component={BabySitterLogIn} />
        <Route exact path="/ParentLogIn" component={ParentLogIn} />
        <Route exact path="/MainPage" component={MainPage} />
        <Route exact path="/*" component={PageNotFound} />
      </Switch>
    )
  }
}
