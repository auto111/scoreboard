import React from 'react';

export const Statistics = (props) => {
  const totalPlayers = props.players.length;
  const totalScore = props.players.reduce((total, player) => total + player.score, 0);


  return (
    <table>
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Score:</td>
          <td>{totalScore}</td>
        </tr>
      </tbody>
    </table>
  );
};


export default Statistics;