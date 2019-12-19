import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { style, text, id, onClick, isDisabled } = this.props;
    const props = {
      style: style,
      id: id,
      onClick: onClick,
      disabled: isDisabled
    };
    return (
      <button className='btn btn-primary' {...props}>
        {text}
      </button>
    );
  }
}

export default Button;
