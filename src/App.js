import React from 'react';
import axios from "axios";
import Movie from './Movie';
import "./App.css";

class App extends React.Component{
    state = {
        isLoading: true,
        movies: [],
    }

    //axios > a peanut with chocolate around it
    //async : we need to tell JS that it takes time to get data from API
    getMovies = async () =>{
        // what do i need to wait? "AXIOS" !!
        const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        this.setState({movies, isLoading:false})
    }

    componentDidMount(){
        this.getMovies();
    }

    render(){
        // {isLoading} will get the 'isLoading' from inside of a this.state object
        const {isLoading, movies } = this.state; 
        return (
        <section className="container">
            {isLoading ? 
            (
            <div className="loader">
                <span className="loader__text">Loading...</span>
            </div>
            )
            : 
            (
                <div className="movies">
                    {/* it is a value here, so need to wrap it inside a curly bracket  */}
                    {movies.map(movie => {
                     return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres}/>
                    })}
                </div>
            )
            }
        </section>
        );
    }
}

export default App;