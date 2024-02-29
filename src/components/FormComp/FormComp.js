
import React, { Component } from 'react';
import Dogs from '../Dogs/Dogs'

import './FormComp.css';

class FormComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      isButtonDisabled: false
    };

    this.inputRef = React.createRef();

    this.time = props.now;

    // console.log("constructor");
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('getDerivedStateFromProps');
  //   return null;
  // }

  // componentDidMount() {
  //   console.log('componentDidMount');
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate');
  //   return true;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('getSnapshotBeforeUpdate');
  //   return null;
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log('componentDidUpdate');
  // }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount');
  // }

  handleSubmit = (event) => {
    alert('Вы ввели: ' + this.state.value);
    event.preventDefault();
  }

  handleChange = (event) => {
    const value = event.target.value;
    const isButtonDisabled = value.toLowerCase().includes('реакт');
    this.setState({ value, isButtonDisabled });
  }

  handleFocusClick = () => {
    // Устанавливаем фокус в инпут
    this.inputRef.current.focus();
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <p className="h3">{6 < this.time < 18 ? 'Добрый день!' : 'Добрый вечер!'}</p>
          <div className="form-group">
            <label htmlFor="exampleInput">Ввод:</label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              ref={this.inputRef}
              className="form-control form"
              id="exampleInput"
            />
          </div>
          <button
            type="submit"
            disabled={this.state.isButtonDisabled}
            className="btn btn-primary"
          >button</button>
        </form>
        <button
          type='button'
          style={{ marginTop: '10px' }}
          onClick={this.handleFocusClick}
          className="btn btn-primary"
        >focus</button>
        <Dogs />
      </>
    );
  }
}

export default FormComp;