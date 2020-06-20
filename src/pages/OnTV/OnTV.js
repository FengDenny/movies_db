import React, { Component } from 'react'
import axios from 'axios'
import config from '../../config'
import Card from '../../utility/Card/Card'
import Shows from  './onTVs'
class OnTV extends Component {

    state={
        showsList:[],
        showing:{},
        pageNum:1,
        totalPages:null
    }

    async componentDidMount(){
            const showURL = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${config.api_key}&language=en-US&page=${this.state.pageNum}`
            const showsPromises= [];

            showsPromises.push(axios.get(showURL))

            Promise.all(showsPromises).then((data)=> {
               const shows = data[0].data.results
               const pages = data[0].data.total_pages

               this.setState({
                   showsList:shows,
                   totalPages:pages
               })
            })

    }

    nextPage = () => {
        let page = this.state.pageNum
        if(this.state.showsList && page < this.state.totalPages)
        {
            this.setState(
                { pageNum: page +=1
                }, ()=> this.componentDidMount())
        }
    }
    prevPage = () => {
        let page = this.state.pageNum
        if(this.state.showsList && page !== 1)
        {
            this.setState(
                { pageNum: page -=1
                }, ()=> this.componentDidMount())
        }
    }


    render() {

        const showsList = this.state.showsList.map((show, i)=>{
            return(
                <div className="border" key={i}>
                    <Shows shows ={show} key={i} />
                </div>
            )
        })


        return (
            <div className="bg-color">
                <div className="heading-primary heading-secondary">
                    <h1>Shows on TV</h1>
                </div>
                <Card elements={showsList} />
                <div className="buttons"> 
                     <button onClick={this.prevPage}>Previous Page</button>     
                     <button onClick={this.nextPage}>Next Page</button>    
                  </div>  
            </div>
        )
    }
}

export default  OnTV