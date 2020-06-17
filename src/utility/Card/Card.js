import React, { Component } from 'react'
import '../../css/Card.css'

 class Card extends Component {
    render() {
        return (
            <div className="cards">
                {this.props.elements}
            </div>
        )
    }
} 

export default Card