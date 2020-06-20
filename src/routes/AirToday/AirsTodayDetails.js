import React, { Component } from 'react'
import axios from 'axios'
import config from '../../config'

class AirsTodayDetails extends Component {
    state={ 
        AiringDetails:{}
    }

    async componentDidMount(){

        const airingID = this.props.match.params.airingID
        const singleTVURL =`https://api.themoviedb.org/3/tv/${airingID}?api_key=${config.api_key}` 

        axios.get(singleTVURL).then((res)=>{
            this.setState({
                AiringDetails:res.data
            })
        })

     }



    render() {

        const AiringDetails = this.state.AiringDetails
        const imageURL = `http://image.tmdb.org/t/p/w300${AiringDetails.poster_path}`;

        return (
            <div className="bg-color">
                <div className="heading-primary heading-secondary">
                    <h1>{AiringDetails.name}</h1>
                </div>
                <div className="popularity popularity-overview">
                    <p>Popularity: {AiringDetails.popularity}%</p>
                </div>
                <div className="image-width">
                    <img src={imageURL} alt="cover" />
                </div>
                <div className="p-overview">
                    <p>{AiringDetails.overview}</p>
                </div>
            </div>
        )
    }
}
export default AirsTodayDetails