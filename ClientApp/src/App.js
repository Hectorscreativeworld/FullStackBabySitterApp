import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LogIn from './components/LogIn'
import Register from './components/Register'
import SplashPage from './components/SplashPage'
import FindABabySitter from './components/FindABabySitter'
import ParentDashBoard from './components/ParentDashBoard'
import './BabysitterLogin.css'
import BabySitterDashBoard from './components/BabySitterDashBoard'
// import ParentProfile from './components/ParentProfile'
// import MainPage from './components/MainPage'
// import ChildDashBoard from './components/ChildDashBoard'
// import PageNotFound from './components/PageNotFound'

function App() {
  // const displayName = App.name

  var token = localStorage.getItem('token')
  var user = null
  try {
    user = JSON.parse(localStorage.getItem('user'))
  } catch (error) {
    console.log(error)
  }
  console.log('display Token')
  console.log(token)
  console.log(!token)
  console.log(user)
  console.log(user && user.userName)
  console.log(user && user.isBabySitter)

  return (
    <Switch>
      <Route exact path="/" component={SplashPage} />
      <Route exact path="/login" component={props => <LogIn {...props} />} />
      <Route
        exact
        path="/Register"
        component={props => <Register {...props} />}
      />
      {token && user && user.isBabySitter && (
        <Route exact path="/landing" component={BabySitterDashBoard} />
      )}
      {token && user && user.isParent && (
        <Route exact path="/landing" component={ParentDashBoard} />
      )}
      {token && user && user.isParent && (
        <Route exact path="/ChildrenGrid" component={ParentDashBoard} />
      )}
      ~
      {token && user && user.isParent && (
        <Route exact path="/FindABabySitter" component={FindABabySitter} />
      )}
      <Route exact path="/*" component={LogIn} />
    </Switch>
  )
}
export default App
