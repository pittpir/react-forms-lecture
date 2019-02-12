/*
import React from 'react'


const Puppieslist = (props) => {



	return (
		<li key={props.key}> 
			<p>{props.dogs2.name}
			<input type="button" value="Delete" onClick={this.handleErase} />
			</p>
		</li>
		)
}

export default Puppieslist
*/


import React, {Component} from 'react'

export default class Puppylist extends Component {


     deleteDog(item,index){
       console.log(item)
       console.log(index)

       this.props.deleteDog(index);
   }

/*	
	handleErase4 = (event) => {
		event.preventDefault();
		//this.props.login(this.state.username);
		//let dog = this.state;
		
		let moose = {
			balance: this.state.balance,
		}

		console.log(this.props.dogs2);

		console.log(moose);
		this.props.deleteDog();
		//console.log(this.props.key);
	
	}
*/
/*
	render() {
	return(
		<li> 
			<p>{this.props.dogs2.name}
				<input type="button" value="Delete" onClick={this.handleErase} />
				<p onClick={this.delete.bind(this, el)}>{el}</p>
			</p>
		</li>
		)
	}
*/
render() {
        const listPups = this.props.dogs.map((item, index) => {
            return (
                <li key={index}>
                    <h1>{item.name}
                    <input type="button" value="Delete" onClick={this.deleteDog.bind(this,item,index)} /> </h1>
                </li>

            )
        })
        return (
            <ul>
                {listPups}
            </ul>
        )
    }






}


//clear inputs
//delete a dog
//update a dog
