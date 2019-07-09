import React, { Component } from 'react'
import BabysitterHeader from './BabysitterHeader'
import BabysitterForm from './BabysitterForm'

class BabySitterProfile extends Component {
  render() {
    return (
      <div className="d-flex align-center f-d-column">
        <BabysitterHeader />
        <BabysitterForm />
      </div>
    )
  }
}

export default BabySitterProfile
