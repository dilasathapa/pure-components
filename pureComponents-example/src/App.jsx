import './App.css'
import React from 'react';
import PureReactComponent from './Component/PureCounter';
import RegularComponent from './Component/SimpleCounter';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      message : "Hello there"
    }
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({message : "updated message"})
    },2000)
  }

  render(){
    return (
      <>
      <RegularComponent message={this.state.message}/>
      <PureReactComponent message={this.state.message}/>
      
      </>
    )
  }
}

export default App
