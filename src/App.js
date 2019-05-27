import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './register';
import Inputs from './components/Inputs'
import Chopsticks from './components/Chopsticks'
import Background from './components/Background'


class App extends Component {

  state = {
    chopstickLength: '90px',
    chopstickWidth: '20px',
    chopstickColor: 'yellow',
    chopstickSize:null,
    backgroundURL: null

  }

  setChopsticks = (awry) => {
    this.setState({
      chopstickLength:awry[0],
      chopstickWidth:awry[1],
      chopstickColor:awry[2],
      chopstickMessage:awry[4],
      chopstickSize:parseInt(awry[0],10)
    })

  }

getBackground = (background) => { 
  this.setState({
    backgroundURL:background
  })
}

  componentDidMount (){
   this.getDogs()

  }
  handleRegister = async (data) => {
    try {

      const registerCall = await fetch('http://localhost:8000/users/registration', {
        method: 'POST',
        body: JSON.stringify(data),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }

      })

      const response = await registerCall.json()
      console.log(response, 'from the flask server on localhost:8000')

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
      <div style={{backgroundImage:`url(${this.state.backgroundURL})`}}>
        <h1>GoodSticks</h1>
        <h2>Is it good?</h2>
        
        <Chopsticks message={this.state.chopstickMessage} width={this.state.chopstickWidth} length={this.state.chopstickLength} color={this.state.chopstickColor}/>
        
        <Inputs pushChopsticks={this.setChopsticks}/>
        <Background getBackground={this.getBackground}/>
        <Register handleRegister={this.handleRegister}/>
      

        
      </div>
    )
  }
}

export default App;
