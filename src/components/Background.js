import React, {Component} from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import '../App.css';
import { NavLink } from 'react-router-dom';




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
              <div >
              <h1>What are we eating?</h1>
              <form onSubmit={this.getSelected}>
                <select id = "mySelect">
                    <option value="https://rasamalaysia.com/wp-content/uploads/2018/07/brown-butter-garlic-noodles1.jpg">Noodles</option>
                    <option value="https://hips.hearstapps.com/vidthumb/images/delish-u-rice-2-1529079587.jpg">Rice</option>
                    <option value="https://s3.amazonaws.com/bncore/wp-content/uploads/2018/06/bbqmaintaste.jpg">Korean Barbecue</option>
                </select>
                <button type="submit">Eat this!</button>
            </form>
         

</div>




          )
      }
    }
export default Background