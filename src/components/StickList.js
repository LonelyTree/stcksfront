

  import React, {Component} from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import '../App.css';
import { NavLink } from 'react-router-dom';




class Chopsticks extends Component{
    constructor(props) {
        super(props);
        this.state = {
            listOfSticks: [{length:'idk'}],
            moduleShowing: false,
            idToSend:null
        };
      }

      getChopsticks = async () => {
        try {
          const response = await fetch(`http://localhost:8000/api/v1/chopsticks/list/${this.props.owner}`, {
            credentials: 'include'
          });
    
    
          if(response.ok){
            const responseParsed = await response.json();
            console.log(responseParsed)
            await this.setState({
                listOfSticks:responseParsed
            })
            this.addThings()
          }
        } catch(err){
          console.log(err)
        }
    
      }

      addThings = ()=>{
          this.props.addToList(this.state.listOfSticks)
      }

     

      componentDidMount(){
        this.getChopsticks()
      }


      render(){
          return(
              <div style={{'backgroundColor':'yellow','height':'50%','width':'50%'}}> 
                  <h2>Your chopsticks</h2>
                  {console.log(this.props)}
                  {this.props.newList==undefined?undefined:this.props.newList.map((element,index)=>
                  
                  <h2>
                  {element.length+"   "} 
                  {element.width+"   "} 
                  {element.color+"   "}
                  
                  <button type="submit" onClick={()=>{this.props.changeSticks(element)}}>Eat with these</button>
                  <button
                  onClick={async () => {
                    try {
                      const response = await fetch(`http://localhost:8000/api/v1/chopsticks/${element.id}`, {
                        method: 'DELETE',
                        credentials: 'include',
                        headers: {
                          'Content-Type': 'application/json'
                        }
                      });
                
                
                      if(response.ok){
                        const responseParsed = await response.json();
                        console.log(responseParsed)
                      }
                      this.getChopsticks()
                    } catch(err){
                      console.log(err)
                    }
                
                  }}
                  >Delete</button>
                  <button
                  onClick={
                      ()=>{
                          
                              this.setState({
                                  moduleShowing:true,
                                  idToSend:element.id
                              })
                          
                      }
                  }>Update</button>
                  </h2>)}
                  {this.state.moduleShowing?
                  <form>
                <input id = 'uniqueIDFive' placeholder='length'/>
                <input id = 'uniqueIDSix' placeholder='width'/>
                <input id = 'uniqueIDSeven' placeholder='color'/>
                <input id = 'uniqueIDEight' placeholder='message'/>
                <button onClick={
                    async ()=>{
                        var length = document.getElementById("uniqueIDFive").value
                        var width = document.getElementById("uniqueIDSix").value
                        var color = document.getElementById("uniqueIDSeven").value
                        var message = document.getElementById("uniqueIDEight").value
                            let objectToSendOne = {
                                length:length.toString()+'px',
                                width:width.toString()+'px',
                                color:color.toString(),
                                message:message,
                                owner:this.props.owner,
                                created_by_id:'Reed'
                            }
                            try {

                                const registerCall = await fetch(`http://localhost:8000/api/v1/chopsticks/${this.state.idToSend}`, {
                                  method: 'PUT',
                                  body: JSON.stringify(objectToSendOne),
                                  credentials: 'include',
                                  headers: {
                                    'Content-Type': 'application/json'
                                  }
                          
                                })
                          
                                const response = await registerCall.json()
                                console.log(response, 'from the flask server on localhost:8000')
                                this.getChopsticks()
                          
                              } catch(err){
                                console.log(err)
                                this.getChopsticks()
                              }
                    }
                } type="button" > Update Chopsticks</button>
                </form>:undefined}
                  

            </div>




          )
      }
    }
export default Chopsticks