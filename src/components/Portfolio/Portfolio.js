import React from "react";
import Side from "./comps/nav/Side";
import "./MainStyle.css";
import GitStats from "./comps/pages/GitStats";
import Acheivements from "./comps/pages/Acheivements";
import LifeEvents from "./comps/pages/LifeEvents";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Portfolio = () => {
  return (
    <div>
      <BrowserRouter>
        <Side />
        <Switch>
          <Route path="/home">
            <h1>Home Page</h1>
          </Route>
          <Route path="/gitstat">
            <GitStats />
          </Route>
          <Route path="/acheivements">
            <Acheivements />
          </Route>
          <Route path="/lifeEvent">
            <LifeEvents />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Portfolio;
