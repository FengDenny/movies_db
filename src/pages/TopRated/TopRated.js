import React,{Component} from 'react'
import config from '../../config'
import axios from 'axios'
import '../../css/TopRated.css'
import TopRates from './TopRates'
import Card from '../../utility/Card/Card'

 class  TopRated extends Component {

    state={
        TopRatedList:[],
        TopRatedMovies:{}
    }

        async componentDidMount()
        {
            const topRatedURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${config.api_key}&language=en-US&page=1&region=US`;
            const ratedPromises =[];

            ratedPromises.push(axios.get(topRatedURL))

            Promise.all(ratedPromises).then((data)=>{
                const TopRatedMovies = data[0].data.results;

                this.setState({
                    TopRatedList:TopRatedMovies
                })


            })

        }

     render()
     {

        const topRated = this.state.TopRatedList.map((top,i)=>{
            return(
                <div key={i}>
                    <TopRates top ={top} key={i}/>
                </div>
            )
        })


        console.log(this.state.TopRatedList)
        return (
                <div className="bg-color">
                <div className="heading-primary heading-secondary">
                    <h1 className=" ">Top Rated</h1>
                </div>
                <Card elements={topRated}/>
                </div>
            )
     }
    
}
export default TopRated