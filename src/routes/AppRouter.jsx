import React from "react";
import HomeContainer from "components/Home/containers/HomeContainer";
import DashboardContainer from "components/Dashboard/containers/DashboardContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/dashboard" exact component={DashboardContainer} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
