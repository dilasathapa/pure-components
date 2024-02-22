import React, {PureComponent } from "react";

class PureCounter extends PureComponent{
  render(){
    console.log("pure counter rendered")

    return (
      <>
        <h3>{this.props.message}</h3>
      </>
    )
  }
}

export default PureCounter;