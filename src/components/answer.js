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
    margin-top: 20vh;
    margin-left: 34vw;
    font-size: 17vw;
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
        loaded: false,
        play: false,
        // url: ['https://bit.ly/30S7p9b','https://bit.ly/2wzSQsR','https://bit.ly/2MhR0aY']
    }
    // audio=new Audio(this.state.url[Math.floor(Math.random()* this.state.url.length)+0])

    // togglePlay = () => {
    //     this.setState({ play: !this.state.play }, () => {
    //     this.state.play ? this.audio.play() : this.audio.pause();
    //     });
    // }
    componentDidMount() {
        setTimeout(() => {
            // this.togglePlay(),
                this.setState({loaded: true})
        }, (Math.floor(Math.random() * 3000)+0));
        
    }
    render(){
        return(
            <Wrapper >
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
// happy birthday = https://bit.ly/2MhR0aY

