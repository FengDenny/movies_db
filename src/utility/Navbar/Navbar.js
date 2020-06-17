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
                        <Link to ="/movies_db"><h1 className="heading-primary">MDBR</h1></Link>
                    </div>
                <nav>
                    <div className="nav-links-left">
                        <div className="dropdown">
                            <div className="dropdown-btn">
                                {/* For localhost production: host:300/ */}
                                {/* <Link to="/">Movies <FontAwesomeIcon icon={faCaretSquareDown} /> </Link> */}
                                {/* for github upload  fengdenny.github.io/movies_db*/}
                                <h1 className="nav-h1-1">Movies <FontAwesomeIcon icon={faCaretSquareDown} /> </h1>
                                < div className="dropdown-content">
                                    <Link  to ="/top_rated">Top Rated</Link>
                                    <Link to ="discover_2020">Popular</Link>
                                </div>
                            </div>
                        </div>  
                        <div className="dropdown-2">
                            <div className="dropdown-btn-2">
                                <h1 className="nav-h1-1">TVshows <FontAwesomeIcon icon={faCaretSquareDown} /></h1>  
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