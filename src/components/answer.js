import React, {Component} from 'react';
import '../App.css';
import styled from 'styled-components'
import Confetti from 'react-dom-confetti';

const Wrapper=styled.div`
    height: 100%;
    width: 200%;
`
const Title=styled.h1`
    font-family: 'lobster';
    position: absolute;
    margin-left: 39vw;
    font-size: 1500%;
`
const config = {
    angle: "58",
    spread: "16",
    startVelocity: "27",
    elementCount: "40",
    dragFriction: "0.07",
    duration: "10000",
    stagger: "0",
    width: "11px",
    height: "10px",
    colors: ["#000", "#333", "#666"]
    };

class Answer extends Component{
    state={
        good: false,
        loaded: false
    }
    componentDidMount() {
        this.setState({loaded: true})
    }
    render(){
        return(
            <Wrapper >
                {console.log(this.state.loaded)}

                <Confetti
                    active={this.state.loaded}
                    style={{
                    position: 'absolute',
                    width: '10%',
                    marginLeft: '46vw',
                    height: '10%',
                    marginTop: '25vh',
                    background: 'blue'
                    }} config={config} />

                {this.state.good
                ? <Title>YES!</Title>
                : <Title>NO!</Title>
                }
            </Wrapper>
        )
    }
}
export default Answer



