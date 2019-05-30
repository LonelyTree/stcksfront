import React, {Component} from 'react';
import '../App.css';
import styled from 'styled-components'

const Wrapper=styled.div`
    position: absolute;
    margin-left: 3vh;
`
const Title=styled.h1`
    font-family: 'lobster';
    position: absolute;
    margin-left: 42vw;
    margin-top: 42vw;
    width: 37vh;
    height: auto;
    display: inline;
`
const Press=styled.button`
    position: absolute;
    font-family: 'lobster';
`
const Form1=styled.form`
    position: absolute;
    margin-top: 45vw;
    margin-left: 83vh;
    font-family: 'lobster';
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
                        <select id = "mySelect">
                            <option value="https://rasamalaysia.com/wp-content/uploads/2018/07/brown-butter-garlic-noodles1.jpg">Noodles</option>
                            <option value="https://hips.hearstapps.com/vidthumb/images/delish-u-rice-2-1529079587.jpg">Rice</option>
                            <option value="https://s3.amazonaws.com/bncore/wp-content/uploads/2018/06/bbqmaintaste.jpg">Korean Barbecue</option>
                        </select>
                        <Press type="submit">Eat this!</Press>
                    </Form1>
            </Wrapper>




        )
    }
}
export default Background