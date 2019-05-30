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
    angle: "50",
    spread: "25",
    startVelocity: "27",
    elementCount: "20",
    dragFriction: "0.06",
    duration: "5000",
    stagger: "0",
    width: "11px",
    height: "10px",
    colors: ["#000", "#333", "#666"]
    };

class Answer extends Component{
    state={
        good: true,
        loaded: false
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({loaded: true})
        }, (Math.floor(Math.random() * 3000)+0));
        
    }
    render(){
        return(
            <Wrapper >
                {console.log(this.state.loaded)}

                <Confetti active={this.state.loaded} config={config}/>

                {this.state.good
                ? <Title>YES!</Title>
                : <Title>NO!</Title>
                }
            </Wrapper>
        )
    }
}
export default Answer

// sweet party horn jamming out = https://bit.ly/30S7p9b
// party horn blasting = https://bit.ly/2wzSQsR
// 

