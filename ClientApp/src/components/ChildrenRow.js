import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ChildRow.css'

class ChildrenRow extends Component {
  handleOnClick = e => {
    console.log(this.props.child)
    this.props.onViewChild(this.props.child)
  }

  render() {
    const child = this.props.child
    let todos = child.checkList.map((x, i) => {
      return <li key={i}>{x.description}</li>
    })
    return (
      <div className="childSummary" onClick={this.handleOnClick}>
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
                <a className="linkChildInfo" href="url">
                  link text
                </a>
              </div>
            </div>
          </div>
          <hr />
          <h2> How are things going:</h2>
          <div className="SpecialNotes">
            <p>{child.currentStatus}</p>
          </div>
          <div className="sendStill">
            <label htmlFor="avatar">Choose a profile picture:</label>

            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
            />
            <button>SUBMIT</button>
          </div>
          <hr />
          <h1 className="KidsAwesomeText">"Kids are Awesome"</h1>
          <hr className="lastYellowLine" />
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
