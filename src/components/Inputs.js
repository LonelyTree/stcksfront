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
`

const Form1 = styled.form`
    position: absolute;
`
const UseMe = styled.input`
background:blue
`
const PokeMe=styled.button`
background:blue
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