import React, { Component } from 'react';


class Lista extends Component {
  render() {
  
    return (
      <div>
        <li>{this.props.item}</li>
      </div>
    );
  }
}

export default Lista;
