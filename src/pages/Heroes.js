import React from 'react';
import axios from 'axios';

export class Heroes extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        Heroes works.
      </div>
    )
  }

  componentDidMount() {
    this.getHeroes();
  }

  getHeroes = async () => {
    const value = await axios.get('http://eastflag.co.kr:8080/api/heroes');
    console.log(value)
  }

}