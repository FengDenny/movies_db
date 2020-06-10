import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import Home from './Routes/Home/Home'
import Navbar from './Navbar/Navbar'

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path ="/" component={Navbar}/>
      {/* <Route exact path ="/" component={Home}/> */}
    </div>
    </Router>
  );
}

export default App;
