import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Results from "./pages/Result";
import Saved from "./pages/Saved";
import NoResult from "./pages/NoResult";
// import Navbar from "./components/navbar";
// import Jumbotron from "./components/jumbotron";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/saved" component={Saved} />
        <Route component={NoResult} />
      </Switch>
    </div>
  </Router>
);

export default App;