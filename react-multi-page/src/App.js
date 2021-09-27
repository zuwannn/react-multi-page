import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Navigation } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
