import React, { Component } from 'react'
import Header from './Header'
import BabyLoginForm from './BabyLogInForm'

class LogIn extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')
    if (token && user) {
      window.location.href = '/landing'
    }
  }
  render() {
    return (
      <div className="d-flex align-center f-d-column">
        <Header />
        <BabyLoginForm setLoggedIn={this.props.setLoggedIn} />
      </div>
    )
  }
}

export default LogIn
