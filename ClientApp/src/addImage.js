import React, { Component } from 'react'

class addImage extends Component {
  render() {
    return (
      <div>
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
      </div>
    )
  }
}

export default addImage
