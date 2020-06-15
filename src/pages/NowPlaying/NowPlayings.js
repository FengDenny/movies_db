import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import '../../css/NowPlaying.css'

class NowPlayings extends Component {
    render() {

        const imageUrl = "http://image.tmdb.org/t/p/w300"
       const {poster_path, title,id} = this.props.nowPlaying

        return (
            <div>
              <Link to={`/move/${id}`}>
                   <img src={`${imageUrl}${poster_path}`} alt ="poster" />
              </Link>
              {/* <div className="title">{title}</div> */}
            </div>
        )
    }
}

export default  NowPlayings