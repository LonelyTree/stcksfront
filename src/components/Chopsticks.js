import React, {Component} from 'react';
import '../App.css';
import styled from 'styled-components'

const ChopstickHolder=styled.div`


`
const ChopStick1=styled.div`

`
const Chopstick2=styled.div`

`


class Chopsticks extends Component{
    constructor(props) {
        super(props);
        this.state = {
            scar: null,
        };
    }

    render(){
        return(
            <ChopstickHolder className="chopstickHolder">
                {/* <ChopStick1 className="chopstick">{this.props.message}</ChopStick1>
                <Chopstick2 className="chopstick" >{this.props.message}</Chopstick2> */}
            </ChopstickHolder>
        )
    }
}
export default Chopsticks

// height:${this.props.height}


// height:${this.props.length};
// width:${this.props.width};
// backgroundColor:${this.props.color};



// height:${this.props.length};
// width:${this.props.width};
// backgroundColor:${this.props.color};
// display:block;
// marginLeft:100px;
// clear:right;
// marginRight:90%