import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Home}></Route>
        <Route exact={true} path="/login" component={Login}></Route>
        <Route exact={true} path="/signup" component={Signup}></Route>
      </Switch>
    </Router>
  );
}

export default App;
