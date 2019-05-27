import React, {Component} from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import '../App.css';
import { NavLink } from 'react-router-dom';




class Chopsticks extends Component{
    constructor(props) {
        super(props);
        this.state = {
            scar: null,
        };
      }

      render(){
          return(
              <div className="chopstickHolder" style={{'height':this.props.height}} >
<div className="chopstick" style={{'height':this.props.length,'width':this.props.width,'backgroundColor':this.props.color,'float':'left'}}>{this.props.message}</div>
<div className="chopstick" style={{'height':this.props.length,'width':this.props.width,'float':'right','backgroundColor':this.props.color, 'marginLeft':'20px', 'marginRight':'90%'}}>{this.props.message}</div>
</div>




          )
      }
    }
export default Chopsticks