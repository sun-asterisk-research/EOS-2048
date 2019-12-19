import React from 'react';

class Cell extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return <span className='cell'>{''}</span>;
  }
}

export default Cell;
