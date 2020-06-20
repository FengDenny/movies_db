import React, { Component } from 'react'
import {Link } from 'react-router-dom'

 class AirsToday extends Component {
    render() {

        const imageUrl = "http://image.tmdb.org/t/p/w300"
        const {poster_path, name,id, popularity} = this.props.airs

        return (
            
            <div className="card"> 
                 <Link to={`/airing/${id}`}>      
                     <img src ={`${imageUrl}${poster_path}`} alt="airing"/>
                 </Link>
               <div className="card-title">{name}</div>
               <div className="popularity">{popularity}%</div>
            </div>
        )
    }

}

export default AirsToday