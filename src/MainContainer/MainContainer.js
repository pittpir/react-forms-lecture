import React, {Component} from 'react'
import DogForm from '../Login/DogForm'
import Puppylist from './Puppylist';
//import PuppylistErase from './PuppylistErase';
//import Login from '../Login/Login';


export default class MainContainer extends Component {
	state = {
		dogs: [ {name: 'pop', age: 2, breed: 'horse'} ],
		index: 1
	}

  addDog = (dog) => {
    let newDogs = this.state.dogs
    newDogs.push(dog)

    //this.state.dogs.push(dog)
    //console.log(dog)
    this.setState({      
    	dogs: newDogs
    })
  }

  //delete dog here
  deleteDog = (index) => {
  	
  	let deleteDogs = this.state.dogs
  	deleteDogs.splice(index,1);
  	console.log(deleteDogs)

  	    this.setState({      
    	dogs: deleteDogs
    })
  }
//update a dog here


	render() {
    //const dogsComposed = this.state.dogs.map((items, index) => {
      //return <Puppylist dogs2={items} key={index} />
      //})		
	return(
		<div>
			<h1> Hello {this.props.username}</h1>
			<div className="list-wrapper">
				<ul className="list"> 
					<Puppylist deleteDog={this.deleteDog} dogs={this.state.dogs} />
				</ul>
			</div>		
				<DogForm addDog={this.addDog}/>	
			
			
		</div>
		)
	}
}

//<ul className="list"> {dogsComposed} </ul>