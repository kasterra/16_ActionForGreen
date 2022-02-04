import React from "react";
import HomeContainer from "components/Home/containers/HomeContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeContainer} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
