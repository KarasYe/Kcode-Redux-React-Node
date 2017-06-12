import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';

export default class AddTodo extends Component {
  render() {
    return (
      <div>
        <input type='text' ref='input' onKeyUp={this.handleEnter.bind(this)}/>
        <button onClick={ this.handleClick.bind(this) }>
          Add
        </button>
      </div>
    );
  }

  handleClick() {
    const inputNode = findDOMNode(this.refs.input);
    const text = inputNode.value.trim();
    if (text === '')
      alert('Input content invaild')
    else
      this.props.onAddClick(text);
      inputNode.value = '';
  }

  handleEnter(event) {
    if (event.keyCode === 13) {
      this.handleClick()
    }
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
};
