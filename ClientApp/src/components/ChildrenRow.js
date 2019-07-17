import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ChildRow.css'
import { Button } from 'reactstrap'

// import { triggerAsyncId } from 'async_hooks'

class ChildrenRow extends Component {
  handleOnClick = e => {
    console.log(this.props.child, 'look at me Hector')
    this.props.onViewChild(this.props.child)
  }

  render() {
    const child = this.props.child
    let todos = child.checkList.map((x, i) => {
      return <li key={i}>{x.description}</li>
    })
    return (
      <div className="childSummary d-flex align-center f-d-column">
        <section className="KidsMainText">
          <div className="kidsWrapper">
            <div
              className="kidsPhoto"
              style={{ backgroundImage: 'url(' + this.props.child.photo + ')' }}
            />
            <div>
              <div className="kidsName">{this.props.child.firstName}</div>
              <div className="kidsParagraph">
                <p className="kidsBio">{this.props.child.bio}</p>
                <span className="linkChildInfo" onClick={this.handleOnClick}>
                  <strong>READ MORE</strong>
                </span>
              </div>
              <Button
                className="removeButton"
                color="danger"
                onClick={() => this.props.removeChild(this.props.child.id)}
              >
                Remove Item
              </Button>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

ChildrenRow.propTypes = {
  child: PropTypes.object.isRequired,
  onViewChild: PropTypes.func
}
export default ChildrenRow
