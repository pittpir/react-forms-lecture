import React, {Component} from 'react'

export default class DogForm extends Component {
	state = {
		name: '',
		age: '',
		breed: ''
	}
	handleChange = (event) => {
		//event.preventDefault();
		this.setState({
			[event.currentTarget.name]: event.currentTarget.value
		})
		
	}
	handleSubmit = (event) => {
		event.preventDefault();
		//this.props.login(this.state.username);
		//let dog = this.state;
		
		let dog = {
			name: this.state.name,
			age: this.state.age,
			breed: this.state.breed
		}
		//console.log(dog)
		this.props.addDog(dog);
		
		this.setState({
			name: '',
			age: '',
			breed: ''
		})

	}

	render() {
	return(
			<form onSubmit={this.handleSubmit}>
				<input type='text' name="name" placeholder="name" 
				value={this.state.name} onChange={this.handleChange} />
				<input type='age' name="age" placeholder="age" 
				value={this.state.age} onChange={this.handleChange} />
				<input type='breed' name="breed" placeholder="breed" 
				value={this.state.breed} onChange={this.handleChange} />
				<input type='submit' value="Submit"  />
			</form>	
			
		)
	}
}