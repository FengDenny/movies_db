import React, { Component } from 'react'
import axios from 'axios'
import Card from '../../utility/Card/Card'
import config from '../../config'
import "../../css/Discover2020.css"
import DiscoverMovies from '../../pages/Discover/DiscoverMovies'

class Discover2020 extends Component {

    state={
        popularList:[],
        popularMovie:{},
        pageNum :1,
        totalPages:null
    }


   async componentDidMount(){
        const popularUrl =`https://api.themoviedb.org/3/discover/movie?api_key=${config.api_key}&language=en-US&include_adult=false&include_video=false&page=${this.state.pageNum}&primary_release_year=2020`
        const popularPromise = []
        popularPromise.push(axios.get(popularUrl))
        Promise.all(popularPromise).then((data) => {
            const popularMovieList = data[0].data.results
            const pages = data[0].data.total_pages


            this.setState({ 
                popularList:popularMovieList,
                totalPages:pages
            })


        })
    }

    nextPage = () => {
        let page = this.state.pageNum

        if(this.state.popularList && this.state.pageNum < this.state.totalPages)
        {
            this.setState({ 
                pageNum: page +=1 
            }, () => this.componentDidMount())
        }

 }

 prevPage = () => {
    let page = this.state.pageNum
    if(this.state.popularList && this.state.pageNum !== 1)
    {
        this.setState({
            pageNum: page -= 1
        },()=> this.componentDidMount() )
    }
}

    render() {
        const popular = this.state.popularList.map((popular,i) => {
            return(
                <div className="border" key={i}>
                    <DiscoverMovies popular={popular} key ={i} />
                </div>
            )
        })

        return (
            <div className="bg-color">
                 <div className="heading-primary heading-secondary discover-heading">
                <h1> Discover New Movies </h1>
            </div> 
            <Card elements={popular}/>  
            <div className="buttons">
                            
               <button onClick={this.prevPage}>Previous Page</button>     
             <button onClick={this.nextPage}>Next Page</button>    
                </div> 
            </div>
         
        )
    }
}
export default Discover2020