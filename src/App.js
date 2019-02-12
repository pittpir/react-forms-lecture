import React, { Component } from 'react';
import Login from './Login/Login';
import MainContainer from './MainContainer/MainContainer';
import './App.css';


class App extends Component {
  state = {
    logged: false,
    username: '',
    horse: []
  }

  login = (username) => {
    this.setState({
      logged: true,
      username: username
    })
  }


  render() {
    return (
      <div className="App">
      {this.state.logged ? <MainContainer username={this.state.username} /> : <Login login={this.login}/> }
      </div>
    );
  }
}

export default App;
