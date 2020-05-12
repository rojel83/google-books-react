import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav"
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Jumbotron from "./components/Jumbotron";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Jumbotron />
          <Switch>
            {/* renders the Search page when "/" route is hit */}
            <Route exact path="/" component={Search} />
            {/* renders the Search page when "/search" route is hit */}
            <Route exact path="/search" component={Search} />
            {/* renders the Saved page when "/saved" route is hit */}
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;