import React from 'react'
import NowPlayings from './NowPlayings'
import {Link } from 'react-router-dom'
import SlickSlider from '../../utility/Slider/Slider'

 

 function NowPlaying(props) {
    
    console.log(props.playing)

    const playing = props.playing.map((nowPlaying,i) => {
        return(
            <div key={i}>
                <NowPlayings nowPlaying = {nowPlaying} key={i}/>
            </div>
        )
    })




    return (
        <>
        <div className="heading-margin">
             <h1>{props.header}</h1>
        </div>
        <div className="movie-slick">
           <SlickSlider elements={playing} />
        </div>

        </>
    )
}

export default NowPlaying