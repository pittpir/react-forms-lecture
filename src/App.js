// bring in React and Component instance from react
import React, {Component} from 'react'

// define our Hello component
class Hello extends Component {
  constructor (props) {
    // make call to parent class' (Component) constructor
    super()
    // define an initial state
    this.state = {
      age: 5,
      counter: 0
    }
  }
  handleYearChangeOnClick = (event) => {
  	this.setState({
  		age: this.state.age + 1
  	})
  }

  // what should the component render
  render () {
    // Make sure to return some UI
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <p>You are {this.state.age} years old</p>
        <p>The initial count is {this.state.counter}</p>
        <button onClick={this.handleYearChangeOnClick}>Another Great Year</button>
      </div>
    )
  }
}

export default Hello;
