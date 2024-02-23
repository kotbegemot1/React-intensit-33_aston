
import React, { Component } from 'react';

import './FormComp.css';

class FormComp extends Component {
  render() {
    return (
      <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Ввод:</label>
    <input type="email" className="form-control form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default FormComp;