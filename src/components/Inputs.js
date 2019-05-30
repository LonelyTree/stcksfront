import React, {Component} from 'react';
import '../App.css';
import styled from 'styled-components'

const Wrapper=styled.div`
    position: absolute;
    margin-top: 65vh;
    margin-left: 5vw;
`

const Header=styled.div`
    position: absolute;
    height: 25vh;
    width: 12vw;
    margin-top: -5vh;
    margin-left: 0.5vw;
    font-family: 'Lobster';
    font-size: 2vw;
`

const Form1 = styled.form`
    position: absolute;
`
const UseMe = styled.input`
    text-align: center;
    font-family: "Lobster";
    margin-top: .3vw;
    font-size: 1vw;
    border-radius: .14vw;
    border: .5px solid #00000038;
    box-shadow: 0px 20px 1vw 0px #00000040;
`
const PokeMe=styled.button`
    border-radius: 0vw 0vw .5vw .5vw;
    margin-top: 0.5vh;
    font-family: 'Lobster';
    font-size: 1vw;
    margin-left: 1.7vw;
    box-shadow: 0px 18px 20px 0px #0000002e;
    cursor: pointer;
`
class Inputs extends Component{
    constructor(props) {
        super(props);
        this.state = {
            scar: null,
        };
      }

      pushValuesUp = async (e) => {
        e.preventDefault()
      var length = document.getElementById("uniqueIDOne").value+"px"
      var width = document.getElementById("uniqueIDTwo").value+'px'
      var color = document.getElementById("uniqueIDThree").value
      var message = document.getElementById("uniqueIDFour").value
          this.props.pushChopsticks([length,width,color,message])
          let theOwns=this.props.owner
          let objectToSend = {
              length:length,
              width:width,
              color:color,
              message:message,
              owner:theOwns,
              created_by_id:'Reed'
          }
          try {

            const registerCall = await fetch('http://localhost:8000/api/v1/chopsticks', {
              method: 'POST',
              body: JSON.stringify(objectToSend),
              credentials: 'include',
              headers: {
                'Content-Type': 'application/json'
              }
            })
            const response = await registerCall.json()
            console.log(response, 'from the flask server on localhost:8000')
          } catch(err){
            console.log(err)
          }
    }

      render(){
          return(
              <Wrapper >
              <Header>ChopstickInfo</Header>
                <Form1  onSubmit={this.pushValuesUp}>
                  <UseMe id = 'uniqueIDOne' placeholder='length'/><br/>
                  <UseMe id = 'uniqueIDTwo' placeholder='width'/><br/>
                  <UseMe id = 'uniqueIDThree' placeholder='color'/><br/>
                  <UseMe id = 'uniqueIDFour' placeholder='message'/><br/>
                  <PokeMe type="submit" > Submit Chopsticks</PokeMe>
                </Form1>
              </Wrapper>
          )
      }
    }
export default Inputs