import React, { Component } from 'react'
import BabysitterHeader from './BabysitterHeader'
import ParentProfileForm from './ParentProfileForm'

class ParentProfile extends Component {
  render() {
    return (
      <div className="d-flex align-center f-d-column">
        <BabysitterHeader />
        <ParentProfileForm />
      </div>
    )
  }
}

export default ParentProfile
