import React, { Component } from 'react'
import '../../css/Navbar.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareDown} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faCaretSquareDown);

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <div className="nav-logo">
                        <Link to ="/"><h1 className="heading-primary">MDBR</h1></Link>
                    </div>
                <nav>
                    <div className="nav-links-left">
                        <div className="dropdown">
                            <div className="dropdown-btn">
                                <Link to="/home">Movies <FontAwesomeIcon icon={faCaretSquareDown} /> </Link>
                                < div className="dropdown-content">
                                    <Link to ="/">Now Playing</Link>
                                    <Link to ="/">Upcoming</Link>
                                </div>
                            </div>
                        </div>  
                        <div className="dropdown-2">
                            <div className="dropdown-btn-2">
                                <Link to="/home">TVshows <FontAwesomeIcon icon={faCaretSquareDown} /></Link>  
                                < div className="dropdown-content-2">
                                    <Link to ="/">Airs Today</Link>
                                    <Link to ="/">On TV</Link>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </nav>

                </div>
                
            </div>
        )
    }
}

export default  Navbar