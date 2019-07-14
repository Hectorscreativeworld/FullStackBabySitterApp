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
      <div className="allAboutKid d-flex align-center f-d-column">
        <div className="stillAndName">
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

        <div className="AllergyMainContainer">
          <div className="allergyInfo listItems">
            <h3>{child.firstName} allergy:</h3>
            <ul>
              <li>
                {child.firstName} has {child.allergy}
              </li>
            </ul>
            <h3>Emergency:</h3>
            <p>{child.allergyInstruction}</p>
            <p>
              <strong>Emergency Contact:</strong>
            </p>
          </div>
          <div className="medBag">
            <img className="safetyStill" src={Safety} alt="Safety Still" />
          </div>
        </div>

        <div className="mainCheckListContainer">
          <div className="KidsMark listItems">
            <h2>Kids Check:</h2>
            <ul>{todos}</ul>
          </div>

          <div className="checkMarkContainer">
            <img className="CheckMark" src={CheckMark} alt="Check Mark Still" />
          </div>
        </div>

        <h2>Special Instructions</h2>
        <div className="postedImage">
          <div className="postedText">
            <p>{child.notes}</p>
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
