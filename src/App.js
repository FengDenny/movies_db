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
       {/* For localhost production: localhost:300/ */}
      {/* <Route   exact path ="/" component={Home}/> */}
       {/* for github upload  fengdenny.github.io/movies_db*/}
      <Route   exact path ="/movies_db" component={Home}/>
      {/* Top Rated Route */}
      <Route   exact path ="/top_rated" component={TopRated}/>
    </div>
    </Router>
  );
}

export default App;
