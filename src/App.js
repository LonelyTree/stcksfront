import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './register';
import Inputs from './components/Inputs'
import Chopsticks from './components/Chopsticks'
import Background from './components/Background'
import StickList from './components/StickList'


class App extends Component {
  state = {
    chopstickLength: '90px',
    chopstickWidth: '20px',
    chopstickColor: 'yellow',
    chopstickSize:null,
    backgroundURL: null,
    logged:null
  }
  setChopsticks = (awry) => {
    let newItem={
      length:awry[0],
      width:awry[1],
      color:awry[2],
      message:awry[4],
      owner:this.state.logged
    }
    this.setState({
      chopstickLength:awry[0],
      chopstickWidth:awry[1],
      chopstickColor:awry[2],
      chopstickMessage:awry[4],
      chopstickSize:parseInt(awry[0],10),
      listOfSticks: [{length:'idk'}],
    })
    if(this.state.logged){
      this.setState({
        listOfSticks:[...this.state.listOfSticks,newItem]
      })
    }
 
  }

  addToList = (list)=>{
    this.setState({
      listOfSticks:list
    })
  }

  fuckingLogin = (username) => {
    this.setState({
      logged:username
    })
  }

getBackground = (background) => { 
  this.setState({
    backgroundURL:background
  })
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
      this.setState({
        logged: response.username
      })
    } catch(err){
      console.log(err)
    }
  }
  changeSticks= (newSticks) => {

    this.setState({
      chopstickLength:newSticks.length,
      chopstickWidth:newSticks.width,
      chopstickColor:newSticks.color,
      chopstickMessage:newSticks.message
    })

    
    
  }

  render() {
    return (
      <div style={{backgroundImage:`url(${this.state.backgroundURL})`}}>
        <h1 style={{'marginLeft':'50%'}}>GoodSticks</h1>
        <Register fuckingLogin={this.fuckingLogin} handleRegister={this.handleRegister}/>
        <h2>Is it good?</h2>
        <Chopsticks message={this.state.chopstickMessage} width={this.state.chopstickWidth} length={this.state.chopstickLength} color={this.state.chopstickColor}/>
        <Inputs owner={this.state.logged} pushChopsticks={this.setChopsticks}/>
        <Background getBackground={this.getBackground}/>
        {this.state.logged?<StickList newList={this.state.listOfSticks} addToList={this.addToList} owner={this.state.logged} changeSticks={this.changeSticks}/>:null}
      </div>
    )
  }
}

export default App;
