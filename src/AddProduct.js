import React, { Component } from 'react'

export default class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = props.products;
    }
    
  render() {
    return (
      <div>AddProduct</div>
    )
  }
}
