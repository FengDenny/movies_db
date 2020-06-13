import React, { Component } from 'react'
import {Link } from 'react-router-dom'

 class TopRates extends Component {
    render() {

        const imageUrl = "http://image.tmdb.org/t/p/w300"
        const {poster_path, title,id} = this.props.top


        return (
            <div>
               <Link to={`/top_rated/${id}`}>
                   <img src={`${imageUrl}${poster_path}`} alt="Top" />
               </Link>
               <div className="title">{title}</div>
            </div>
        )
    }
}
export default TopRates