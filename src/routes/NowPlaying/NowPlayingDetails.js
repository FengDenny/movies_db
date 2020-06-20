import React, { Component } from 'react'
import axios from 'axios'
import config from '../../config' 
import BackBtn from '../../utility/Back-btn/BackBtn'

 class NowPlayingDetails extends Component {

    state={
        // declare an empty object
        nowPlayingDetails:{}
    }

    componentDidMount()
    {

        const movieID = this.props.match.params.nowPlayingID 
        const singleMovieUrl =`https://api.themoviedb.org/3/movie/${movieID}?api_key=${config.api_key}`


        axios.get(singleMovieUrl).then((res)=> {
            // console.log(res.data)
            this.setState({
                nowPlayingDetails:res.data
            })
        })
    }

    render() {

        console.log(this.state.nowPlayingDetails)

        const nowPlayingDetails = this.state.nowPlayingDetails
        const imageURL = `http://image.tmdb.org/t/p/w300${nowPlayingDetails.poster_path}`;
        return (
            <div className="bg-color">
                <div className ="heading-primary heading-secondary">
                <h1>{nowPlayingDetails.title}</h1>
            </div>
            <div className="popularity popularity-overview">
                <p>Popularity: {nowPlayingDetails.popularity}%</p>
            </div>
            <div className ="image-width">
                 <img src={imageURL} alt="show"/>
            </div>
                <BackBtn />
            <div className ="p-overview">
                <p>{nowPlayingDetails.overview}</p>           
               
            </div>
            
            
            </div>
          
        )
    }
}
export default NowPlayingDetails