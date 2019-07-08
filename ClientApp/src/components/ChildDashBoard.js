import React, { Component } from 'react'
import Header from './Header'
import '../ChildDashBoard.css'
import Safety from '../Images/Safety.png'
import CheckMark from '../Images/Check_Sample.png'

class ChildDashBoard extends Component {
  render() {
    return (
      <div className="d-flex align-center f-d-column">
        <div className="mainContainer">
          <Header />
          <hr />
          <div className="stillAndName">
            <button id="avatar-btn" name="avatar" onClick={this.handleBtnClick}>
              Insert Image
            </button>
            <h2>Hello I'm Milia</h2>
          </div>
          <div>
            <h3>Kids Bio</h3>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
          </div>
          <hr />
          <div className="medBag">
            <h3>Kids allergy:</h3>

            <img className="safetyStill" src={Safety} alt="Safety Still" />
          </div>
          <ul>
            <l>*Peanuts</l>
          </ul>
          <p>Incase emergency epipe located on top of microwave.</p>
          <hr />
          <div className="KidsMark">
            <h2>Kids Check:</h2>
            <img className="CheckMark" src={CheckMark} alt="Check Mark Still" />
          </div>
          <ul>
            <li>Dinner</li>
            <li>Dinner</li>
            <li>Dinner</li>
            <li>Dinner</li>
          </ul>
          <hr />
          <h2>Special Notes</h2>
          <div className="SpecialNotes">
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
          </div>
          <hr />
          <h2> How are things going:</h2>
          <div className="SpecialNotes">
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
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

export default ChildDashBoard
