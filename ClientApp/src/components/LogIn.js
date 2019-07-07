import React, { Component } from 'react'
import Header from './Header'
import BabyLoginForm from './BabyLogInForm'

class LogIn extends Component {
  render() {
    return (
      <div className="d-flex align-center f-d-column">
        <Header />
        <BabyLoginForm />
      </div>
    )
  }
}

export default LogIn
