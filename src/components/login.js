import React, {Component} from 'react';
import '../App.css';
import styled from 'styled-components'

const LogMeIn = styled.div`
    position: absolute;
    margin-left: 89vw;
    margin-top: 2vh;
    font-family: 'lobster';
    font-size: 2vw;
    border-bottom: solid;
    padding: 1vh;
    cursor: pointer;
`

class Login extends Component{
    onClick=() => {
        this.props.liftUp({clicked:true})
    }
    render() {
        return (<LogMeIn onClick={this.onClick}>
                Login/Register
                </LogMeIn>)
    }
}

export default Login