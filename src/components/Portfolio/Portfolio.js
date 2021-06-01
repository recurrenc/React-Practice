import React from "react";
import Side from "./comps/nav/Side";
import "./MainStyle.css";
import GitStats from "./comps/pages/GitStats";
import Acheivements from "./comps/pages/Acheivements";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Portfolio = () => {
  return (
    <div>
      <Side />

      <Router>
        <Switch>
          <Route path="/gitstat">
            <GitStats />
          </Route>
          <Route path="/acheivements">
            <Acheivements />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Portfolio;
