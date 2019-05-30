import React, {Component} from 'react';
import '../App.css';
import styled from 'styled-components'

const Wrapper=styled.div`
    position: absolute;
    margin-left: 3vh;
`
const Title=styled.h1`
    font-family: 'lobster';
    font-size: 3vw;
    position: absolute;
    margin-left: 37.5vw;
    margin-top: 78vh;
    width: 37vw;
    height: auto;
    display: inline;
`
const Press=styled.button`
    position: absolute;
    font-family: 'lobster';
    font-size: 1vw;
    width: 6vw;
    height: 3.89vh;
    border: 1px black solid;
    border-left-style: none;
    border-right-style: none;
    cursor: pointer;
`
const Form1=styled.form`
    position: absolute;
    margin-top: 86vh;
    margin-left: 46vw;
    font-family: 'lobster';
`
const Listy=styled.select`
    background: #00ffe1;
    width: 13vw;
    height: 4vh;
    margin-left: -3.5vw;
    border-width: .03vw;
    -webkit-appearance: inner-spin-button;
    -webkit-border-radius: 1vw 0vw 0vw 1vw;
    text-align: -webkit-center;
    padding-left: 3vw;
    border: 1px black;
    font-family: 'Lobster';
    font-size: 1.2vw;
    box-shadow: -20px 0px 5vw 20px #00000029;
`

class Background extends Component{
    constructor(props) {
        super(props);
        this.state = {
            scar: null,
        };
    }

    getSelected = (e) => {
        e.preventDefault()
    let myThing= document.getElementById("mySelect").value
    this.props.getBackground(myThing)
    }

    render(){
        return(
            <Wrapper >
                <Title>What are we eating?</Title>
                    <Form1 onSubmit={this.getSelected}>
                        <Listy id = "mySelect">
                            <option value="https://rasamalaysia.com/wp-content/uploads/2018/07/brown-butter-garlic-noodles1.jpg">Noodles</option>
                            <option value="https://hips.hearstapps.com/vidthumb/images/delish-u-rice-2-1529079587.jpg">Rice</option>
                            <option value="https://s3.amazonaws.com/bncore/wp-content/uploads/2018/06/bbqmaintaste.jpg">Korean Barbecue</option>
                        </Listy>
                        <Press type="submit">Eat this!</Press>
                    </Form1>
            </Wrapper>




        )
    }
}
export default Background