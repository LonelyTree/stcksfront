import React, {Component} from 'react';

import '../App.css';





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
      var height = document.getElementById("uniqueIDThree").value
      var message = document.getElementById("uniqueIDFour").value
          this.props.pushChopsticks([length,width,height,message])
          let theOwns=this.props.owner
          let objectToSend = {
              length:length,
              width:width,
              color:height,
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
              <div >
              <h1>ChopstickInfo</h1>
              <form  onSubmit={this.pushValuesUp}>
                <input id = 'uniqueIDOne' placeholder='length'/><br/>
                <input id = 'uniqueIDTwo' placeholder='width'/><br/>
                <input id = 'uniqueIDThree' placeholder='color'/><br/>
                <input id = 'uniqueIDFour' placeholder='message'/><br/>
                <button type="submit" > Submit Chopsticks</button>
                </form>
         

</div>




          )
      }
    }
export default Inputs