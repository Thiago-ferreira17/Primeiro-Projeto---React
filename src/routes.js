import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Containers/Home";
import Users from "./Containers/Users";

function Routes() {
  return (
    <Router>
      <Route path="/" Component={Home} />
      <Route path="/usuarios" Component={Users} />
    </Router>
  );
}

export default Routes;
