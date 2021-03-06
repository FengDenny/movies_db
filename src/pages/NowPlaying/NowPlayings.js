import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import '../../css/NowPlaying.css'

class NowPlayings extends Component {
    render() {

        const imageUrl = "http://image.tmdb.org/t/p/w300"
       const {poster_path,id} = this.props.nowPlaying

        return (
            <div>
              <Link to={`/movie/${id}`}>
                   <img src={`${imageUrl}${poster_path}`} alt ="poster" />
              </Link>
              
            </div>
        )
    }
}

export default  NowPlayings