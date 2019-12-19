import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { placeholder, id, onChange, required, type, value, name } = this.props;
    const props = {
      id,
      onChange,
      required,
      placeholder,
      type,
      value,
      name
    };
    return <input className='form-control mb-3' {...props} />;
  }
}

export default Input;
