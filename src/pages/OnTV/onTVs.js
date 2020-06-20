import React, { Component } from 'react'
import {Link } from 'react-router-dom'

 class onTVs extends Component {
    render() 
    {
        const imageUrl = "http://image.tmdb.org/t/p/w300"
        const {poster_path, name,id, popularity} = this.props.shows    
        return (
            <div className="card">
                <Link to = {`/on_tv/${id}`}>
                    <img src={`${imageUrl}${poster_path}`} alt="on tv" />
                </Link>
                <div className="card-title">{name}</div>
                <div className="popularity">{popularity}</div>
            </div>
        )
    }
}
export default onTVs