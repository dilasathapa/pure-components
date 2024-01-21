import React, { PureComponent } from 'react';

class PureReactComponent extends PureComponent {
  render() {
    console.log('PureReactComponent rendered');
    return <div>{this.props.message}</div>;
  }
}

export default PureReactComponent;