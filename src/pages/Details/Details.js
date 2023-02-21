import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "./Details-styles";

function Details() {

    const { id } = useParams()
    const [movie, setMovie] = useState({})
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() =>{
        const API_KEY = process.env.REACT_APP_API_KEY

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR&page=1&include_adult=false
        `)
        .then(response => response.json())
        .then(data => {

            const { title, poster_path, overview, release_date } = data
            const movie = {
                id,
                title,
                sinopse: overview,
                image: `${image_path}${poster_path}`,
                releaseDate: release_date
            }
            setMovie(movie)
        })

    }, [id])
    
    return(
        <Container>
            <div className="movie">
                <img src={movie.image} alt={movie.sinopse}/>
                <h1>
                    {movie.title}
                </h1>
                <span>
                    {movie.sinopse}
                </span>
                <span>
                    <label>Data de lançamento: </label>{movie.releaseDate}
                </span>
                <Link to="/">
                    <button>
                        Voltar
                    </button>
                </Link>
            </div>
        </Container>
    )
}

export default Details;