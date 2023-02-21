import { MovieList, MovieCard, Header } from "./Home-styles";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Home() {

    const [movies, setMovies] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        const API_KEY = process.env.REACT_APP_API_KEY

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
            setMovies(data.results)
        })    
    }, [])

    return (
        <div>
            <Header>
                <h1>Movies</h1>
                <p>veja detalhes dos filmes mais populares do dia de acordo com o TMDB</p>
            </Header>        
            <MovieList>
                {movies.map(movie => {
                    return(
                        <MovieCard key={movie.id}>
                            <Link to={`/details/${movie.id}`}>
                                <img src={`${image_path}${movie.poster_path}`} alt={`Poster ${movie.title}`}/>
                                <span>{movie.title}</span>                               
                            </Link>
                        </MovieCard>                        
                    )
                })}
            </MovieList>
        </div>
    )
}

export default Home;