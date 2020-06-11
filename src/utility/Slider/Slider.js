import React, { Component } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/Slider.css"
import SlickSlider from 'react-slick'

 class Slider extends Component {
    render() {

        const settings ={
            dots: false,
            infinite: true,
            speed: 1000,
            arrows:true,
            slidesToShow: 4, 
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }]
            }  

        return (
            <div className="slick">
                 {/* Universal slider with this.props.elements */}
                <SlickSlider {...settings}>
                    {this.props.elements}
                </SlickSlider>
            </div>
        )
    }
}

export default Slider