

  import React, {Component} from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import '../App.css';
import { NavLink } from 'react-router-dom';




class Chopsticks extends Component{
    constructor(props) {
        super(props);
        this.state = {
            listOfSticks: [{length:'idk'}],
        };
      }

      getChopsticks = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/v1/chopsticks', {
            credentials: 'include'
          });
    
    
          if(response.ok){
            const responseParsed = await response.json();
            console.log(responseParsed)
            this.setState({
                listOfSticks:responseParsed
            })
          }
        } catch(err){
          console.log(err)
        }
    
      }

     

      componentDidMount(){
        this.getChopsticks()
      }


      render(){
          return(
              <div style={{'backgroundColor':'yellow','height':'50%','width':'50%'}}> 
                  <h2>Your chopsticks</h2>
                  <h4>{this.state.listOfSticks.map((element,index)=>
                  <h2>
                  {element.length+"   "} 
                  {element.width+"   "} 
                  {element.color+"   "}
                  <button type="submit" onClick={()=>{this.props.changeSticks(element)}}>Eat with these</button>
                  </h2>)}</h4>

            </div>




          )
      }
    }
export default Chopsticks