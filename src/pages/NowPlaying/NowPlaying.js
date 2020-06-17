import React from 'react'
import NowPlayings from './NowPlayings'
import SlickSlider from '../../utility/Slider/Slider'
import '../../css/NowPlaying.css'

 

 function NowPlaying(props) {
    
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
             <h1 className="primary-color">{props.header}</h1>
        </div>
        <div className="movie-slick">
           <SlickSlider elements={playing} />
        </div>

        </>
    )
}

export default NowPlaying