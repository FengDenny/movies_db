import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import Home from './Routes/Home/Home'
import Navbar from './utility/Navbar/Navbar'
import Home from './pages/Home/Home'

function App() {
  return (
    <Router>
    <div className="App">
      <Route  exact path ="/" component={Navbar}/>
      <Route  exact path ="/" component={Home}/>
    </div>
    </Router>
  );
}

export default App;