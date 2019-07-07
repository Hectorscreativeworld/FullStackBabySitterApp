import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import LogIn from './components/LogIn'
import Register from './components/Register'
import BabySitterLogIn from './components/BabySitterLogIn'
import ParentLogIn from './components/ParentLogIn'
import MainPage from './components/MainPage'
import PageNotFound from './components/PageNotFound'
import './BabysitterLogin.css'

function App() {
  // const displayName = App.name
  const [loggedInUser, setLoggedIn] = useState({})
  const setLogOn = userInfo => {
    console.log('user has logged in')
    setLoggedIn(userInfo)
  }
  return (
    <Switch>
      <Route exact path="/" component={LogIn} />
      {!loggedInUser.username && (
        <Route
          exact
          path="/Register"
          component={props => <Register {...props} setLoggedIn={setLogOn} />}
        />
      )}
      <Route exact path="/BabySitterLogIn" component={BabySitterLogIn} />
      <Route exact path="/ParentLogIn" component={ParentLogIn} />
      <Route exact path="/MainPage" component={MainPage} />
      <Route exact path="/*" component={PageNotFound} />
    </Switch>
  )
}
export default App
