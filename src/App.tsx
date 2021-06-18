import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Busket from "./components/Busket/Busket";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import PassReset from "./components/PassReset/PassReset";
import SignUp from "./components/SignUp/SignUp";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffb020",
    },
    secondary: {
      main: "#ffb020",
    },
  },
});

function App() {
  return (
    <div className="app">
      <Router>
        <ThemeProvider theme={theme}>
          <Header></Header>
          <Switch>
            <Route exact path="/sign-in">
              <SignIn></SignIn>
            </Route>

            <Route exact path="/lost-password">
              <PassReset></PassReset>
            </Route>
            <Route exact path="/sign-up">
              <SignUp></SignUp>
            </Route>
            <Route exact path="/busket">
              <Busket></Busket>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
