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
        <div className="childMainContainer d-flex align-center f-d-column">
          <div className="allAboutKid d-flex align-center f-d-column">
            <div className="stillAndName ">
              <div
                className="kidsPhoto"
                style={{
                  backgroundImage: 'url(' + this.props.child.photo + ')'
                }}
              />
              <h2 className="helloText">Hello I'm {child.firstName}</h2>
            </div>
            <div>
              <h3>A little bit about {child.firstName}</h3>
            </div>
            <section className="childParagraph d-flex align-center f-d-column">
              <p>{child.bio}</p>
            </section>

            <div className="medBag">
              <h3>{child.firstName} allergy:</h3>

              <img className="safetyStill" src={Safety} alt="Safety Still" />
            </div>
            <ul>
              <li>
                {child.firstName} has {child.allergy}
              </li>
            </ul>
            <p>{child.allergyInstruction}</p>

            <div className="KidsMark">
              <h2>Kids Check:</h2>
              <img
                className="CheckMark"
                src={CheckMark}
                alt="Check Mark Still"
              />
            </div>
            <ul>{todos}</ul>

            <h2>Special Notes</h2>
            <div className="SpecialNotes">
              <p className="noteText">{child.notes}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ChildDashBoard.propTypes = {
  child: PropTypes.object.isRequired
}
export default ChildDashBoard
