import React from "react";
import UsersList from "./components/UsersList/UsersList";
import { Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={UsersList} />
      </Switch>
    </div>
  );
};

export default App;
