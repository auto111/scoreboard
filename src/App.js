import React from 'react';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import AddFormPlayer from './components/AddFormPlayer';


class App extends React.Component {
  maxId = 4;

  state = {
    players: [
      {name: 'LDK', score: 0, id: 1},
      {name: 'HONG', score: 0, id: 2},
      {name: 'KIM', score: 0, id: 3},
      {name: 'PARK', score: 0, id: 4},
    ]
  };

  // 스코어 증가, 감소 콜백 함수
  handleChangeScore = (id, delta) => {
    this.setState(prevState => {
      const player = prevState.players.find(item => item.id === id);
      player.score = player.score + delta;
      return {...prevState.players}
    })
  };

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(item => item.id !== id)
      }
    })
  };

  handleAddPlayer = (name) => {
    console.log(name);

    this.setState(prevState => ({
      players: [...prevState.players, {id: ++this.maxId, score: 0, name}]
    }))
  };


  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" players={this.state.players} totalPlayers={this.state.players.length} />

        {/*Players List*/}
        { this.state.players.map(item => <Player name={item.name} score={item.score}
                                                 changeScore={this.handleChangeScore}
                                                 key={item.id.toString()} removePlayer={this.handleRemovePlayer}
                                                 id={item.id} />)
        }
        <AddFormPlayer addPlayer={this.handleAddPlayer} />
      </div>

    );
  }
}

export default App;