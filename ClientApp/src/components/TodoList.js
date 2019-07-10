import React, { Component } from 'react'
import TodoItems from './TodoItems'
import './TodoList.css'
import PropTypes from 'prop-types'

class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: []
    }

    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  addItem(e) {
    e.preventDefault()

    if (this._inputElement.value !== '') {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      }
      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        }
      })
    }

    this._inputElement.value = ''

    console.log(this.state.items)
    this.props.onChange([...this.state.items])
  }
  deleteItem(key) {
    var filteredItems = this.state.items.filter(function(item) {
      return item.key !== key
    })
    this.setState({
      items: filteredItems
    })
  }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <input ref={a => (this._inputElement = a)} placeholder="enter task" />

          <button onClick={this.addItem}>add</button>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    )
  }
}

TodoList.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default TodoList
