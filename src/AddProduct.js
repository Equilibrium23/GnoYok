import React, { Component } from 'react'
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

export default class AddProduct extends Component {
  
  render() {
    return (
    <FormControl>
      <InputLabel htmlFor="my-input">Email address</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
      <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
    </FormControl>
    )
  }
}
