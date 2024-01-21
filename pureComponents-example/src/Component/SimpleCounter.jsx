import React, { Component } from 'react';

class RegularComponent extends Component {
  render() {
    console.log('RegularComponent rendered');
    return <div>{this.props.message}</div>;
  }
}

export default RegularComponent;