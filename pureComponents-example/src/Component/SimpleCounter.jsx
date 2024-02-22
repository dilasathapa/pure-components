import React, { Component } from "react";

class SimpleCounter extends Component{
  render(){
    console.log("simple counter rendered")
    return (
      <>
        <h3>{this.props.message}</h3>
      </>
    )
  }
}

export default SimpleCounter