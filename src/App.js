import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './utility/Navbar/Navbar'
import Home from './pages/Home/Home'
import NowPlayingDetails from './routes/NowPlaying/NowPlayingDetails'
import TopRated from './pages/TopRated/TopRated'
import TopRatedDetails from './routes/TopRated/TopRatedDetails'
import Discover2020 from './pages/Discover/Discover2020'
import DiscoverDetails from './routes/Discover/DiscoverDetails'
import AirToday from './pages/AirToday/AirToday'
import AirTodayDetails from './routes/AirToday/AirsTodayDetails'
import OnTV from './pages/OnTV/OnTV'
import OnTVDetails from './routes/OnTV/OnTVDetails'

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
      {/* Now Playing Details */}
      <Route exact path ="/movie/:nowPlayingID" component={NowPlayingDetails}/>

      {/* Top Rated Route */}
      <Route   exact path ="/top_rated" component={TopRated}/>
      <Route   exact path ="/top_rated/:topRatedID" component={TopRatedDetails}/>

      {/* Year 2020 Movies */}
      <Route exact path ='/discover_2020' component ={Discover2020} />
      <Route  exact path ='/discover_2020/:discoverID' component={DiscoverDetails} />

      {/* Shows Airing Today */}
      <Route exact path ='/airing' component={AirToday} />
      <Route exact path ='/airing/:airingID' component={AirTodayDetails} />
      {/* Show On TV */}
      <Route exact path ='/on_tv' component={OnTV} />
      <Route exact path ='/on_tv/:tvID' component={OnTVDetails} />
    </div>
    </Router>
  );
}

export default App;
