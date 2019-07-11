import React, { Component } from 'react'
import ParentProfileForm from './ParentProfileForm'
import PropTypes from 'prop-types'

class ParentProfile extends Component {
  render() {
    return (
      <div className="d-flex align-center f-d-column">
        <ParentProfileForm onCompleted={this.props.onCompleted} />
      </div>
    )
  }
}

ParentProfile.propTypes = {
  onCompleted: PropTypes.func.isRequired
}
export default ParentProfile
