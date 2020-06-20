import React,{Component} from 'react'
import config from '../../config'
import axios from 'axios'
import '../../css/TopRated.css'
import TopRates from './TopRates'
import Card from '../../utility/Card/Card'


 class  TopRated extends Component {

    state={
        TopRatedList:[],
        TopRatedMovies:{}, 
        pageNum :1,
        totalPages:null
    }

        async componentDidMount()
        {
            const topRatedURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${config.api_key}&language=en-US&page=${this.state.pageNum}&region=US`;
            const ratedPromises =[];

            ratedPromises.push(axios.get(topRatedURL))

            Promise.all(ratedPromises).then((data)=>{
                const TopRatedMovies = data[0].data.results;
                const pages = data[0].data.total_pages;

                this.setState({
                    TopRatedList:TopRatedMovies,
                    totalPages: pages
                })
            })
        }
      
        nextPage = () => {
            let page = this.state.pageNum
            if(this.state.TopRatedList && page < this.state.totalPages)
            {
                this.setState({
                    pageNum: page += 1
                },()=> this.componentDidMount() )
            }
        } 

        prevPage = () => {
            let page = this.state.pageNum
            if(this.state.TopRatedList && page !== 1)
            {
                this.setState({
                    pageNum: page -= 1
                },()=> this.componentDidMount() )
            }
        }

     render()

     {

        const topRated = this.state.TopRatedList.map((top,i)=>{
            return(
                <div className="border" key={i}>
                    <TopRates top ={top} key={i}/>
                </div>
            )
        })


        return (
                <div className="bg-color">
                <div className="heading-primary heading-secondary">
                    <h1 className=" ">Top Rated</h1>
                </div>     
                        <Card elements={topRated}/>  
                  <div className="buttons"> 
                     <button onClick={this.prevPage}>Previous Page</button>     
                     <button onClick={this.nextPage}>Next Page</button>    
                  </div>              
                </div>
            )
     }
    
}
export default TopRated