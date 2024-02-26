
import React, { Component } from 'react';

import './FormComp.css';

class FormComp extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.time = props.now;
    console.log(this.time);
    console.log("constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleSubmit = (event) => {
    alert('Вы ввели: ' + this.state.value);
    event.preventDefault();
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p class="h3">{12 < this.time < 24 ? 'Добрый день!' : 'Добрый вечер!'}</p>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Ввод:</label>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            className="form-control form"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"

          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >button</button>
      </form>
    );
  }
}

export default FormComp;