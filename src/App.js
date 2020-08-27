import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <Navigation />
      <Route path='/Dashboard_campamentos/' exact component={LandingPage}/>
    </Router>
  );
}

export default App;
