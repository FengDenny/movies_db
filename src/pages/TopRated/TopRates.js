import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import '../../css/TopRated.css'

 class TopRates extends Component {
    render() {

        const imageUrl = "http://image.tmdb.org/t/p/w300"
        const {poster_path, title,id, popularity} = this.props.top



        return (
            <div className="card">
               <Link to={`/top_rated/${id}`}>
                   <img src={`${imageUrl}${poster_path}`} alt="Top" />
               </Link>
        <div className="card-title">{title}</div>
        <div className="popularity">{popularity}%</div>
            </div>
        )
    }
}
export default TopRates