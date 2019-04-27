import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";
import {AddFormPlayer} from "./components/AddFormPlayer";

class App extends React.Component {
  maxId = 4;

  state = {
    players: [
      {name: 'LDK', score: 0, id: 1},
      {name: 'HONG', score: 0, id: 2},
      {name: 'KIM', score: 0, id: 3},
      {name: 'PARK', score: 0, id: 4}
    ]
  }

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

  handleAddPlayer = (name) => {
    console.log(name);
    this.setState(prevState => ({
      players: [...prevState.players, {id: ++this.maxId, score: 0, name}]
    }))
  }

  render() {
    return (
      <div className="scoreboard">
        {/* {title: 'My Scoreboard', totalPlayers: 11} */}
        <Header title="My Scoreboard" players={this.state.players} />

        {
          this.state.players.map(player => <Player name={player.name}
                                                   removePlayer={this.handleRemovePlayer}
                                                   id={player.id}
                                                   key={player.id}
                                                   score={player.score}  changeScore={this.handleChangeScore}/>)
        }
        <AddFormPlayer addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;