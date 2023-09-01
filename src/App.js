import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Admin from "./components/Admin";


function App() {
  return(
    <div className="App">
    <Router>
      <Switch>
        <Route path="/auth">
          <Admin />
        </Route>
        <Route path="/" >
          <Home />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}
export default App;