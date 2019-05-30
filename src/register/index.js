import React, { Component } from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    position: absolute;
    margin-left: 90%;
    width: 16%;
    display: inline-flex;
    justify-content: center;
`
const Form1 = styled.form`
    position: absolute;
    width: 100%;
    padding-left: 5%;
    height: auto;
    padding-bottom: 2%;
    padding-top: 2%;
    border-radius: 2px;
`
const Labels = styled.label`
    font-size: 125%;
    font-family: "Lobster";
    line-height: 2vw;
`
const FancyButton = styled.button`
    width: 30vh;
    border-radius: 10px;
    background: #00fffe59;
    font-family: 'Lobster';
    font-size: 2vh;
`
const Inputs = styled.input`
    width: 30vh;
    font-family: 'Anonymous Pro';
    font-size: 2vh;
`

const PressyMcPressFace=styled.button`
    margin-left: 11.5vw;
    margin-top: 1.2vh;
    text-align: center;
    width: 7vh;
    font-family: cursive;
    height: 3vh;
    border: 1px solid;
    border-radius: 2px;
    line-height: 2.7vh;
    font-size: 81%;
    font-weight: 800;
    box-shadow: 0 0 5px #c0ffff;
    cursor: pointer;
    z-index: 10;
`
class Register extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      email: '',
      password: '',
      verify_password: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleRegister(this.state)
  }
  justLogin = ()=>{
    var login = document.getElementById("login").value
    this.props.fuckingLogin(login)
  }
  lift=() => {
    this.props.liftUp({clicked:false})
  }
  render(){
    return (
      <Wrapper>
        <PressyMcPressFace onClick={this.lift}>X</PressyMcPressFace>
      <Form1 onSubmit={this.handleSubmit} style={{'float':'right','border':'solid black','marginTop':'0'}}>
        <Labels>
          Username:
          <Inputs type='text' name='username' onChange={this.handleChange}/><br/>
        </Labels>
        <Labels>
          Email:
          <Inputs type='email' name='email' onChange={this.handleChange}/><br/>
        </Labels>
        <Labels>
          Password:
          <Inputs type='text' name='password' onChange={this.handleChange}/><br/>
        </Labels>
        <Labels>
          Verify Password:
          <Inputs type='text' name='verify_password' onChange={this.handleChange}/><br/>
        </Labels>
        <FancyButton type='submit'>Register</FancyButton><br/>
        <Labels>
          Just Login:
          <Inputs type='text' id='login' placeholder="Username"/><br/>
          <Inputs type='text' id='login' placeholder="Password"/><br/>
        </Labels>
        <FancyButton type='button' onClick={this.justLogin}>Login</FancyButton>
      </Form1>
      </Wrapper>
      )
  }
}

export default Register;
