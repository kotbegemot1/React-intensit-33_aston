
import React, { Component } from 'react';

import './FormComp.css';

class FormComp extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
    
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount()");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate()");
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate()");
  }

  handleChange = (event) => {
    this.setState(() => ({input: event.target.value}))
    console.log(this.state)
  }

  render() {
    return (
      <>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Ввод:</label>
          <input 
          type="email" 
          className="form-control form" 
          id="exampleInputEmail1" 
          aria-describedby="emailHelp" 
          placeholder="Enter email" 

          />
        </div>
        <button type="button" className="btn btn-primary">Submit</button>
      </>
    );
  }
}

export default FormComp;