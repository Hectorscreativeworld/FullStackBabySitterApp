import React, { Component } from 'react'
import Header from './Header'
import '../ChildDashBoard.css'
import Safety from '../Images/Safety.png'
import CheckMark from '../Images/Check_Sample.png'
import PropTypes from 'prop-types'

class ChildDashBoard extends Component {
  handleBtnClick = e => {
    console.log('clicked')
  }
  render() {
    const child = this.props.child
    let todos = child.checkList.map((x, i) => {
      return <li key={i}>{x.description}</li>
    })

    return (
      <div className="d-flex align-center f-d-column">
        <div className="childMainContainer">
          {/* <Header /> */}
          <hr />
          <div className="stillAndName">
            <button id="avatar-btn" name="avatar" onClick={this.handleBtnClick}>
              Insert Image
            </button>
            <h2>Hello I'm {child.firstName}</h2>
          </div>
          <div>
            <h3>Kids Bio</h3>
          </div>
          <section>
            <ul>
              <li>
                {child.firstName} has {child.allergy}
              </li>
            </ul>
          </section>
          <hr />
          <div className="medBag">
            <h3>Kids allergy:</h3>

            <img className="safetyStill" src={Safety} alt="Safety Still" />
          </div>
          <ul>
            <li>
              {child.firstName} has {child.allergy}
            </li>
          </ul>
          <p>{child.allergyInstruction}</p>
          <hr />
          <div className="KidsMark">
            <h2>Kids Check:</h2>
            <img className="CheckMark" src={CheckMark} alt="Check Mark Still" />
          </div>
          <ul>{todos}</ul>
          <hr />
          <h2>Special Notes</h2>
          <div className="SpecialNotes">
            <p>{child.notes}</p>
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
        </div>
      </div>
    )
  }
}

ChildDashBoard.propTypes = {
  child: PropTypes.object.isRequired
}
export default ChildDashBoard
