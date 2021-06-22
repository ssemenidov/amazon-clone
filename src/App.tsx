import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Basket from "./components/Basket/Basket";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import PassReset from "./components/PassReset/PassReset";
import SignUp from "./components/SignUp/SignUp";
import Checkout from "./components/Checkout/Checkout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe(
  "pk_test_51J5814KHWr3E9rCy5aKAp2MtEfz6iayAwuJq6sWAeiQMPyZCnIVK3lrdFEeF8n6fwzJEpHAfVRxDdBoLKm1t5lHl00U7SkR2dS"
);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffb020",
    },
    secondary: {
      main: "#000",
    },
  },
});

function App() {
  return (
    <div className="app">
      <Router>
        <ThemeProvider theme={theme}>
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
            <Route exact path="/basket">
              <Header></Header>
              <Basket></Basket>
            </Route>
            <Route exact path="/checkout">
              <Header></Header>
              <Elements stripe={promise}>
                <Checkout></Checkout>
              </Elements>
            </Route>
            <Route exact path="/">
              <Header></Header>
              <Home></Home>
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
