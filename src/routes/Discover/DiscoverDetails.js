import React, { Component } from 'react'
import axios from 'axios'
import config from '../../config' 
import BackBtn from '../../utility/Back-btn/BackBtn'

class DiscoverDetails extends Component { 
     state={
         // declare an empty object
            discoverDetail:{}
        }

        async componentDidMount()
        {
            const discoverMovieID = this.props.match.params.discoverID 
        const singleMovieUrl =`https://api.themoviedb.org/3/movie/${discoverMovieID}?api_key=${config.api_key}`
         axios.get(singleMovieUrl).then((res)=>{
            // console.log(res.data)
            this.setState({
                discoverDetail:res.data
            })
         })
        }




    render() {

      
            console.log(this.state.discoverDetail)

            const discoverDetail = this.state.discoverDetail
            const imageURL = `http://image.tmdb.org/t/p/w300${discoverDetail.poster_path}`;

        return (
            <div className="bg-color">
            <div className="heading-primary heading-secondary">
                <h1>{discoverDetail.title}</h1>
            </div>
            <div className="popularity popularity-overview">
                <p>Popularity: {discoverDetail.popularity}%</p>
            </div>
            <div  className="image-width">
                   <img src ={imageURL} alt="discover"/>
            </div>
            <BackBtn />
                <div className="p-overview">
                    <p>{discoverDetail.overview}</p>
                </div>
            </div>
           
        )
    }
}
export default DiscoverDetails