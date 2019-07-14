import React, { Component } from 'react'
import BabyLoginForm from './BabyLogInForm'
import logo from '../Images/Header_Sample.png'

class LogIn extends Component {
  componentDidMount() {
    // const token = localStorage.getItem('token')
    // const user = localStorage.getItem('user')
    // if (token && user) {
    //   window.location.href = '/landing'
    // }
    localStorage.clear()
  }
  render() {
    return (
      <div className="d-flex align-center f-d-column">
        <div className="logo-container">
          <img className="header-still" src={logo} alt="Header" />
        </div>
        <BabyLoginForm setLoggedIn={this.props.setLoggedIn} />
      </div>
    )
  }
}

export default LogIn
