import React, { Component } from 'react'
import axios from 'axios'
import config from '../../config'
import BackBtn from '../../utility/Back-btn/BackBtn'

 class TopRatedDetails extends Component {

    state={
        topDetails:{}
    }

    componentDidMount(){
        const topID = this.props.match.params.topRatedID
        const singleMovieUrl =`https://api.themoviedb.org/3/movie/${topID}?api_key=${config.api_key}` 
        axios.get(singleMovieUrl).then((res)=> {
            // console.log(res.data)
            this.setState({
                topDetails:res.data
            })
        })
    }
    

    render() {
            const topDetails = this.state.topDetails
            const imageURL = `http://image.tmdb.org/t/p/w300${topDetails.poster_path}`;
        return (
            <div className="bg-color">
                <div className="heading-primary heading-secondary">
                    <h1>{topDetails.title}</h1>
                </div>
                <div className="popularity popularity-overview">
                    <p>Popularity: {topDetails.popularity}%</p>
                    </div>
                <div className="image-width">
                    <img src={imageURL} alt="top rated" />
                </div>
                <BackBtn />
                <div className="p-overview">
                    <p>{topDetails.overview}</p>
                </div>
            </div>
        )
    }
}
export default TopRatedDetails