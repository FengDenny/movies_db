import React, { Component } from 'react'
import axios from 'axios'
import config from '../../config'
import Card from '../../utility/Card/Card'
import AirsToday from './AirsToday'

// https://api.themoviedb.org/3/tv/airing_today?api_key=ad72e3da31fb5a89ff269c553aa812c6&language=en-US&page=1




 class AirToday extends Component {

 state={
     airsTodayList:[],
     airsToday:{},
     pageNum:1,
     totalPages:null,
     
 }

 async componentDidMount(){ 

    // const pageNumID = this.props.match.params.pageID
    const airingTodayURL = `https://api.themoviedb.org/3/tv/airing_today?api_key=${config.api_key}&language=en-US&page=${this.state.pageNum}`
    const airingPromises = [];

    airingPromises.push(axios.get(airingTodayURL))

    Promise.all(airingPromises).then((data)=>{
        const airsToday = data[0].data.results
        const pages = data[0].data.total_pages

        this.setState({ 
            airsTodayList:airsToday,
            totalPages:pages
        })

    })

 }

 nextPage = () => {
    let page = this.state.pageNum
    if(this.state.airsTodayList && page < this.state.totalPages)
    {
        this.setState({
            pageNum: page += 1
        },()=> this.componentDidMount() )
    }
} 

prevPage = () => {
    let page = this.state.pageNum
    if(this.state.airsTodayList && page !== 1)
    {
        this.setState({
            pageNum: page -= 1
        },()=> this.componentDidMount() )
    }
}


    render() {
        const Airing = this.state.airsTodayList.map((air,i) => {
            return(
                <div className="border" key={i}>
                <AirsToday airs ={air} key={i}/>
            </div>
            )
        })

        
        return (
            <div className="bg-color">
                <div className="heading-primary heading-secondary">
                     <h1>Airing Today</h1>
                </div>  
                    <Card elements={Airing}/> 
                    <div className="buttons"> 
                     <button onClick={this.prevPage}>Previous Page</button>     
                     <button onClick={this.nextPage}>Next Page</button>    
                  </div>     
            </div>
        )
    }
}
export default AirToday