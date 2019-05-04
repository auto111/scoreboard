import React from 'react';
import PropTypes from 'prop-types';
import {changeScore} from "../redux/actions";
import {connect} from "react-redux"

import classNames from "classnames";

import styles from '../pages/scoreboard/Scoreboard.module.css';

class Counter extends React.Component {
  static propTypes = {
    changeScore: PropTypes.func,
    id:PropTypes.number,
    score:PropTypes.number
  };

  constructor() {
    super();
  }

  render() {
    return (
      <div className={styles.counter}>
        <button className={classNames(styles['counter-action'],styles.decrement)}
                onClick={() => this.props.changeScore(this.props.id, -1)}> - </button>
        <span className={styles["counter-score"]}>{this.props.score}</span>
        <button className={classNames(styles["counter-action"], styles.increment)}
                onClick={() => this.props.changeScore(this.props.id, 1)}> + </button>
      </div>
    );
  }
}

export default connect(null, {changeScore})(Counter);

