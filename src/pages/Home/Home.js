import React, { Component } from 'react'
import config from '../../config'
import axios from 'axios'
import {Link } from 'react-router-dom'
import NowPlaying from '../NowPlaying/NowPlaying'
import Theme from '../../img/Theme.jpg'
import '../../css/Home.css'

 class Home extends Component {

    state={
        nowPlayingList:[],
        nowPlayingMovies:{},
   
    }

    async componentDidMount()
    {
        const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${config.api_key}&language=en-US&page=1`
        const moviePromises = [];
               // send out all the api request at the same time using Promise.all
            // data[0] = nowPlayingUrl

        moviePromises.push(axios.get(nowPlayingUrl));
        
        Promise.all(moviePromises).then((data)=> {
            const nowPlayingMovies = data[0].data.results;
  
            this.setState({
                nowPlayingList: nowPlayingMovies,
               
            })
        })


    }


    render() {
            // console.log(this.state.nowPlayingList)
          


        return (
            <div>
                <div className="hero">
                    <div className="hero-content">
                        <h1 className="heading-primary">MovieDB Re<span className="span">mix</span></h1>
                        
                    </div>
                </div>
               <div>
                    <NowPlaying playing ={this.state.nowPlayingList} header="Now Playing" />
               </div>
            </div>
        )
    }
}

export default Home
