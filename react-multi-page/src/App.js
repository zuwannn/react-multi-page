import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Navigation, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          
        </Switch>
        <Footer />  
      </Router>
    </div>
  );
}

export default App;
