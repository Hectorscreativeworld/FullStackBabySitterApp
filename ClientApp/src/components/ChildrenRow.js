import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ChildRow.css'

class ChildrenRow extends Component {
  handleOnClick = e => {
    this.props.onViewChild(this.props.child)
  }

  render() {
    return (
      <div className="childSummary" onClick={this.handleOnClick}>
        <div
          className="kidsPhoto"
          style={{ backgroundImage: 'url(' + this.props.child.photo + ')' }}
        />
        <div className="col-sm-4">{this.props.child.firstName}</div>
        <div className="kidsBio">{this.props.child.bio}</div>
        <div className="col-sm-4">{this.props.child.gender}</div>
      </div>
    )
  }
}

ChildrenRow.propTypes = {
  child: PropTypes.object.isRequired,
  onViewChild: PropTypes.func
}
export default ChildrenRow
