import React from 'react';
import './leaderboard.css';
import RowRank from './Row';
class LeaderBoard extends React.Component {
  render() {
    return (
      <div className='container leaderboard'>
        <div className='leadheader'>
          <h2>Leaderboard</h2>
        </div>
        <RowRank rank='#' name='Name' score='Score' />
        {this.props.users.map((item, index) => (
          <RowRank rank={index + 1} name={item.vaccount} score={item.score} key={index} />
        ))}
      </div>
    );
  }
}

export default LeaderBoard;
