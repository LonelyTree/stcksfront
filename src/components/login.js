import React, {Component} from 'react';
import '../App.css';
import styled from 'styled-components'

const LogMeIn = styled.div`
    position: absolute;
    margin-left: 90vw;
    margin-top: 5vh;
    font-family: 'lobster';
    font-size: 140%;
    border-bottom: solid;
    padding: 1vh;
    cursor: pointer;
`

class Login extends Component{
    render(){
        return (<LogMeIn>
                Login/Register
                </LogMeIn>)
    }
}

export default Login