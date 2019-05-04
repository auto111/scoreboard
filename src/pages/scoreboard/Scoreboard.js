import React from 'react';
import Header from "../../components/Header";
import AddFormPlayer from "../../components/AddFormPlayer";
import {connect} from "react-redux";
import {Player} from "../../components/Player";

import styles from './Scoreboard.module.css';

class Scoreboard extends React.Component {
  /*
  maxId = 4;

  handleRemovePlayer = (id) => {
    this.setState(prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    }));
  }


  // 스코어 증가, 감소 콜백 함수
  handleChangeScore = (id, delta) => {
    console.log(id, delta);
    this.setState(prevState => {
      const player = prevState.players.find(item => item.id === id);
      player.score = player.score + delta;
      return {
        players: [...prevState.players]
      }
    })
  }
  */

  /*
  handleAddPlayer = (name) => {
    console.log(name);
    this.setState(prevState => ({
      players: [...prevState.players, {id: ++this.maxId, score: 0, name}]
    }))
  }
  */

  render() {
    return (
      <div className={styles.scoreboard}>
        {/* {title: 'My Scoreboard', totalPlayers: 11} */}
        <Header title="My Scoreboard" players={this.props.players} />

        {
          this.props.players.map(player => <Player name={player.name}
                                                   removePlayer={this.handleRemovePlayer}
                                                   id={player.id}
                                                   key={player.id}
                                                   score={player.score}  changeScore={this.handleChangeScore}/>)
        }
        <AddFormPlayer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.playerReducer.players
});

export default connect(mapStateToProps)(Scoreboard);