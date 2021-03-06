import React, { Component } from 'react'
import './SplashPage.js'
import './SplashPage.css'
class SplashPage extends Component {
  componentDidMount() {
    this.refs.splashVideo.play()
  }

  render() {
    return (
      <section className="mainContainer">
        <header className="v-header header-container">
          <div className="fullscreen-video-wrap">
            <video ref="splashVideo" autoPlay muted loop>
              <source
                src="https://res.cloudinary.com/dck5acco0/video/upload/v1562625593/SafeSitter/BabySitterSplashPageVideo_anqvat.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <div className="header-overlay" />

          <div className="header-content">
            <a href="https://localhost:5001/login" className="SplashEnter-btn ">
              Enter
            </a>
          </div>
        </header>
      </section>
    )
  }
}

export default SplashPage
