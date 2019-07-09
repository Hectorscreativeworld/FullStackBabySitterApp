import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import LogIn from './components/LogIn'
import Register from './components/Register'
import BabySitterProfile from './components/BabySitterProfile'
import ParentProfile from './components/ParentProfile'
import MainPage from './components/MainPage'
import ChildDashBoard from './components/ChildDashBoard'
import SplashPage from './components/SplashPage'
import PageNotFound from './components/PageNotFound'
import './BabysitterLogin.css'

function App() {
  // const displayName = App.name
  const [loggedInUser, setLoggedIn] = useState({})
  const setLogOn = userInfo => {
    console.log('user has logged in')
    console.log(userInfo)
    setLoggedIn(userInfo)
  }
  return (
    <Switch>
      {!loggedInUser.userName && (
        <Route
          exact
          path="/"
          component={props => <LogIn {...props} setLoggedIn={setLogOn} />}
        />
      )}
      {!loggedInUser.userName && (
        <Route
          exact
          path="/Register"
          component={props => <Register {...props} setLoggedIn={setLogOn} />}
        />
      )}
      {loggedInUser.userName && loggedInUser.isBabySitter && (
        <Route exact path="/*" component={BabySitterProfile} />
      )}
      {loggedInUser.userName && loggedInUser.isParent && (
        <Route exact path="/*" component={ParentProfile} />
      )}
      <Route exact path="/MainPage" component={MainPage} />
      <Route exact path="/ChildDashBoard" component={ChildDashBoard} />
      <Route exact path="/SplashPage" component={SplashPage} />
      <Route exact path="/*" component={PageNotFound} />
    </Switch>
  )
}
export default App
