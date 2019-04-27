import React from 'react';
import PropTypes from 'prop-types';
import {changeScore} from "../redux/actions";
import {connect} from "react-redux";

class Counter extends React.Component {
  static propTypes = {
    changeScore: PropTypes.func,
    id:PropTypes.number,
    score:PropTypes.number
  }

  constructor() {
    super();
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"
                onClick={() => this.props.changeScore(this.props.id, -1)}> - </button>
        <span className="counter-score">{this.props.score}</span>
        <button className="counter-action increment"
                onClick={() => this.props.changeScore(this.props.id, 1)}> + </button>
      </div>
    );
  }
}

export default connect(null, {changeScore})(Counter);

