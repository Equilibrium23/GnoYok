import React, { Component } from 'react'
import { FormControl, InputLabel, Input, FormHelperText, Container, Button } from '@mui/material';

export default class AddProduct extends Component {
  
  handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
    console.log(e.target);
  }

  constructor()
  {
    this.a1 = "";
    this.a2 = "";
  }

  render() {
    return (
      <Container maxWidth="sm">
        <form onSubmit={this.handleSubmit}>
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" value={this.a1}/>
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input1">Email address</InputLabel>
            <Input id="my-input1" aria-describedby="my-helper-text1" value={this.a2}/>
            <FormHelperText id="my-helper-text1">We'll never share your email.</FormHelperText>
          </FormControl>
          <Button type="submit">Submit</Button>
        </form>
      </Container>
    )
  }
}
