import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './utility/Navbar/Navbar'
import Home from './pages/Home/Home'
import TopRated from './pages/TopRated/TopRated'

function App() {
  return (
    <Router>
    <div className="App">
      <Route  path ="/" component={Navbar}/>
      {/* Home Page Route */}
      <Route  exact path ="/" component={Home}/>
      {/* Top Rated Route */}
      <Route   path ="/top_rated" component={TopRated}/>
    </div>
    </Router>
  );
}

export default App;
