import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import CardGeneration from "../CardGeneration/CardGeneration";
import NavBar from "../NavBar/NavBar";

class Wrapper extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div>
            <NavBar />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/CardGeneration" component={CardGeneration} />
            </Switch>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default Wrapper;
