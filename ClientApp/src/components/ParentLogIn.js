import React, { Component } from 'react'
import BabysitterHeader from './BabysitterHeader'
import ParentLoginForm from './ParentLoginForm'

class ParentLogIn extends Component {
  render() {
    return (
      <div className="d-flex align-center f-d-column">
        <BabysitterHeader />
        <ParentLoginForm />
      </div>
    )
  }
}

export default ParentLogIn
