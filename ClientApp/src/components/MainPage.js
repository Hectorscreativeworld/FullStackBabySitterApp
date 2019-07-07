import React, { Component } from 'react'
import BabysitterHeader from './BabysitterHeader'
import MainPageForm from './MainPageForm'
class MainPage extends Component {
  render() {
    return (
      <div className="d-flex align-center f-d-column">
        <BabysitterHeader />
        <MainPageForm />
      </div>
    )
  }
}

export default MainPage
