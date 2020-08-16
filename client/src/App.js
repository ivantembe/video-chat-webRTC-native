import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateRoom from "./components/CreateRoom";
import Room from "./components/Room";

import "rsuite/dist/styles/rsuite-default.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CreateRoom} />
        <Route path="/room/:roomID" component={Room} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
