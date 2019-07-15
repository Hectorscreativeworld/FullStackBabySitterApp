import React, { Component } from 'react'
import axios from 'axios'
import { PropTypes } from 'prop-types'

class AddJob extends Component {
  constructor(props) {
    super(props)
    this.state = {
      babySitter: props.babySitter,
      children: []
    }
  }

  handleSubmit = () => {
    console.log('add a Job')
  }

  componentDidMount() {
    let self = this
    axios
      .get('api/child')
      .then(function(response) {
        self.setState({
          children: response.data
        })
        console.log(response.data)
      })
      .catch(function(error) {
        console.log(error)
      })
  }
  childChanged = childId => {
    this.setState({ childSelected: childId })
  }

  render() {
    if (this.state.loaded === false) {
      return ''
    }
    let children = this.state.children.map(x => {
      let id = '' + x.id
      let ssId = 'ss_elem' + id
      let child = x.firstName
      let selected = '' + x.id === this.state.childSelected
      return (
        <li
          area-selected={selected}
          role="option"
          id={ssId}
          key={id}
          onClick={() => this.childChanged(x.id)}
        >
          {child}
        </li>
      )
    })
    return (
      <div>
        <h1>add Job</h1>
        <form onSubmit={this.handleSubmit}>
          <ul id="children_list" role="listbox" aria-labelledby="ss_elem">
            {children}
          </ul>

          <fieldset>
            <button type="submit">submit</button>
          </fieldset>
        </form>
      </div>
    )
  }
}

AddJob.protoType = {
  onCompleted: PropTypes.func.isRequired,
  babySitter: PropTypes.object.isRequired
}
export default AddJob
