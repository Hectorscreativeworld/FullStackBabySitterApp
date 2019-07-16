import React, { Component } from 'react'
// import BabysitterHeader from './BabysitterHeader'
import BabysitterForm from './BabySitterForm'
import { PropTypes } from 'prop-types'

class BabySitterProfileUpdate extends Component {
  render() {
    return (
      <div className="d-flex align-center f-d-column">
        {/* <BabysitterHeader /> */}
        <BabysitterForm onCompleted={this.props.onCompleted} />
      </div>
    )
  }
}

BabySitterProfileUpdate.protoType = {
  onCompleted: PropTypes.func.isRequired
}
export default BabySitterProfileUpdate
