import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../../css/Discover2020.css'

 class DiscoverMovies extends Component {
    render() {
        const imageUrl = "http://image.tmdb.org/t/p/w300"
        const {poster_path, title,id, popularity} = this.props.popular

        return (
            <div className="card">
                <Link to={`/discover_2020/${id}`}>
                    <img src={`${imageUrl}${poster_path}`} alt ="Upcoming" />
                </Link>
                <div className="card-title">{title}</div>
        <div className="popularity">{popularity}%</div>
            </div>
        )
    }
}
export default DiscoverMovies
