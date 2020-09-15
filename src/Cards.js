import React, { Component } from "react";
import {Route, NavLink} from 'react-router-dom'

export class Cards extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
   
  render() {
    return (
      <div className="conatiner" style={{height:"350px", width:"400px", border:" solid black" }}>
          <div className="row"> <img style={{width:"350px", height:"200px",textAlign:"center",marginLeft:"30px"}}
          src={this.props.srcc}
          alt="barbeque"
        /></div>
       
         <div className='row'>
    <div className="col-6">{this.props.name}</div>
             <div className="col-6">⭐⭐⭐⭐ <span>4.4</span></div>
         </div>
         <p> Pan India</p>
         <div className="row">
             <div className="col-6 text-left">🤍</div>
             <div className="col-6"><button><NavLink to={this.props.path}>Buy Now</NavLink></button> </div>
         </div>
      </div>
    );
  }
}

export default Cards;
