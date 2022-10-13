import React from 'react'

export class Todo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      todo: [],
      query: ""
    }
  }

  handleChange (e) {
    console.log(this)
    this.setState({
      query: e.target.value
    })
  }

  render () {
    const { query, todo } = this.state

    return (
      <>
        <div>
          <h1> Todo App </h1>
          <input value={query} onChange={this.handleChange} placeholder="add something" />
          <button>Add Todo</button>
        </div>
      </>
    )
  }
}


export default Todo
