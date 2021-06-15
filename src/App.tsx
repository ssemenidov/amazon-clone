import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Busket from "./pages/Busket";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/busket">
            <Busket></Busket>
          </Route>
          <Route exact path="/">
            <Main></Main>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
