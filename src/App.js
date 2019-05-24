import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './register';


class App extends Component {

  componentDidMount (){
   this.getDogs()

  }
  handleRegister = async (data) => {
    try {

      
    } catch(err){
      console.log(err)
    }
  }
  getDogs = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/dogs', {
        credentials: 'include'
      });


      if(response.ok){
        const responseParsed = await response.json();
        console.log(responseParsed)
      }
    } catch(err){
      console.log(err)
    }

  }
  render() {
    return (
      <div className="App">
        <Register handleRegister={this.handleRegister}/>
      </div>
    )
  }
}

export default App;
