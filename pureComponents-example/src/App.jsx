import React from "react";
import { Component } from "react";
import SimpleCounter from "./Component/SimpleCounter";
import PureCounter from "./Component/PureCounter";

class App extends Component{
  constructor(){
    super();
    this.state = {
      message : "Squad 51"
    }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({ message : "vels"})
    }, 2000)
  }
  render(){
    return (
      <>
        <SimpleCounter message={this.state.message}/>
        <PureCounter message={this.state.message} />

      </>
    )
  }
}

export default App;