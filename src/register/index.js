import React, { Component } from 'react';

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
    //this.props.handleLogin(login)
  }
  render(){
    return (
      <div>
      <form onSubmit={this.handleSubmit} style={{'float':'right','border':'solid black','marginTop':'0'}}>
        <label>
          Username:
          <input type='text' name='username' onChange={this.handleChange}/><br/>
        </label>
        <label>
          email:
          <input type='email' name='email' onChange={this.handleChange}/><br/>
        </label>
        <label>
          password:
          <input type='text' name='password' onChange={this.handleChange}/><br/>
        </label>
        <label>
          verify_password:
          <input type='text' name='verify_password' onChange={this.handleChange}/><br/>
        </label>
        <button type='submit'>Register</button><br/>
        <label>
          just login:
          <input type='text' id='login'/><br/>
        </label>
        <button type='button' onClick={this.justLogin}>Login</button>
        <button type='button' onClick={this.props.logout}>Logout</button>
      </form>

      </div>

      )
  }
}

export default Register;
