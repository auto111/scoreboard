import React from 'react';
import axios from 'axios/index';
import Pagination from 'rc-pagination';

import "./Heroes.scss"; // global
import {Route, Switch} from "react-router-dom";
import {Hero} from "../hero/Hero";

export class Heroes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // 페이지네이션 변수
      pageSize: 10,
      totalCount: 115,
      currentPage: 1,
      heroes: []
    }
  }

  render() {
    return (
      <>
        <Switch>
          <Route path="/heroes/hero/:hero_id" component={Hero}></Route>
        </Switch>
        <div className="row">
          {this.state.heroes.map(hero => (
            <div className="col-6 col-sm-4 col-md-3 p-1 p-sm-2 p-md-3" key={hero.hero_id}>
              <div className="card" onClick={() => this.handleClick(hero.hero_id)}>
                <img src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/baseline-face-24px.svg'}
                     style={{width: '100%'}} alt={hero.name} />
                <div className="card-body">
                  <h5 className="card-title">{hero.name}</h5>
                  <p className="card-text">email: {hero.email}</p>
                  <p className="card-text">sex: {hero.sex}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Pagination total={this.state.totalCount} current={this.state.currentPage}
                    pageSize={this.state.pageSize} onChange={this.pageChange} />
      </>
    )
  }

  componentDidMount() {
    this.getHeroes();
  }

  getHeroes = async () => {
    const start_index = (this.state.currentPage - 1) * this.state.pageSize;

    const res = await axios.get(`http://eastflag.co.kr:8080/api/paged_heroes` +
      `?start_index=${start_index}&page_size=${this.state.pageSize}`);
    console.log(res); // value.data가 원하는 데이터
    this.setState({heroes: res.data.data,
                        totalCount: res.data.total
                        });
    // return res.data;
  }

  pageChange = (e) => {
    console.log(e);
    this.setState({currentPage: e}, () => {
      this.getHeroes();
    });
  }

  handleClick = (hero_id) => {
    // 코드상에서 url 이동하는 방법 : this.props.history.push(url)
    this.props.history.push(`/heroes/hero/${hero_id}`);
  }

}