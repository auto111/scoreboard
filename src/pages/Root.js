import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import {Menu} from "./Menu";
import Scoreboard from "./scoreboard/Scoreboard";
import {Index} from "./heroes/Index";

export class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Menu></Menu>
        <div className="container" style={{backgroundColor:"#fff"}}>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/heroes" component={Index}></Route>
            <Route path="/scoreboard" component={Scoreboard}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }

}