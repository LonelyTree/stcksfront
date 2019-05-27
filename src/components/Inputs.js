import React, {Component} from 'react';

import '../App.css';





class Inputs extends Component{
    constructor(props) {
        super(props);
        this.state = {
            scar: null,
        };
      }

      pushValuesUp = (e) => {
        e.preventDefault()
      var length = document.getElementById("uniqueIDOne").value+"px"
      var width = document.getElementById("uniqueIDTwo").value+'px'
      var height = document.getElementById("uniqueIDThree").value
      var message = document.getElementById("uniqueIDFour").value
          this.props.pushChopsticks([length,width,height,message])
    }

      render(){
          return(
              <div >
              <h1>ChopstickInfo</h1>
              <form  onSubmit={this.pushValuesUp}>
                <input id = 'uniqueIDOne' placeholder='length'/>
                <input id = 'uniqueIDTwo' placeholder='width'/>
                <input id = 'uniqueIDThree' placeholder='color'/>
                <input id = 'uniqueIDFour' placeholder='message'/>
                <button type="submit" > Submit Chopsticks</button>
                </form>
         

</div>




          )
      }
    }
export default Inputs