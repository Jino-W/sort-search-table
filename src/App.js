import React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom"
// import './App.css';
import TableSort from "./components/tableFilter"

function App() {
  return (
    <Router>
      <div>
        <h2>Dynamic Table Sort</h2>
        <Link to ="/table" >Dynamic Table</Link>
        <Route path = "/table" component={TableSort} />
      </div>
    </Router>
  );
}

export default App;
