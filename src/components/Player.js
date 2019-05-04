import React from 'react';
import Counter from "./Counter";

import styles from '../pages/scoreboard/Scoreboard.module.css';

export class Player extends React.PureComponent {
  render() {
    // console.log('rendered', this.props);
    const {removePlayer, id, name, score} = this.props;

    return (
      <div className={styles.player}>
    <span className={styles["player-name"]}>
      {/*this.props.removePlayer에 id를 넘겨주는 함수 선언문*/}
      <button className={styles["remove-player"]} onClick={ () => removePlayer(id) }>x</button>
    </span>
        <span className={styles["player-name"]}>
      {name}
    </span>
        <Counter score={score} id={id} />
      </div>
    );
  }
}

// Todo: removePlayer를 redux로 변경