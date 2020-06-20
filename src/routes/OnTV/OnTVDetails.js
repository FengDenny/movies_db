import React, { Component } from 'react'
import axios from 'axios'
import config from '../../config'
import BackBtn from '../../utility/Back-btn/BackBtn'

 class OnTVDetails extends Component {

    state={
        onTVDetails:{}
    }

        async componentDidMount(){
            const onTVID = this.props.match.params.tvID
            const singleTVURL =`https://api.themoviedb.org/3/tv/${onTVID}?api_key=${config.api_key}` 

            axios.get(singleTVURL).then((res)=> {
                this.setState({
                    onTVDetails: res.data
                })
            })
        }

      


    render() {

        const onTVDetails = this.state.onTVDetails
        const imageURL = `http://image.tmdb.org/t/p/w300${onTVDetails.poster_path}`;

        return (
            <div className="bg-color">
                <div className="heading-primary heading-secondary">
                       <h1>{onTVDetails.name}</h1> 
                </div>
                <div className="popularity popularity-overview">
                    <p>Popularity: {onTVDetails.popularity}%</p>
                </div>
                <div className="image-width">
                    <img src={imageURL} alt="on tv"/>
                </div>
                 <BackBtn />
                <div className="p-overview">
                    <p>{onTVDetails.overview}</p>
                </div>
                
            </div>
        )
    }
}
export default OnTVDetails