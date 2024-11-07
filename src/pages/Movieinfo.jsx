import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Movieinfo = () => {
    let navigate = useNavigate();
    let movieData = '';
    const { movieid } = useParams()
    const [movie, setMovie] = useState([])
    const [genrelist, setGenreList] = useState('')
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'

    const genres = {
        12:'Adventure',
        14:'Fantasy',
        16:'Animation',
        18:'Drama',
        28:'Action',
        35:'Comedy',
        36:'History',
        53:'Thriller',
        80:'Crime',
        878:'Science Fiction',
        10749:"Romance",
        10751:'Family',
        10752: 'War'

    }

    

    async function getMovieInfo(id) {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTQwNzIwNTRkNDFhMTZlNWZkM2FhNzY2MTgyNjczNSIsIm5iZiI6MTcyODg2NDI3OC4xOTI3NTksInN1YiI6IjY3MGM1ZGQ1M2JiNDU1N2M2NjliZDY3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ti66TBc3pP40Ou45YW8VfpgrzkOAUBIf1tw1UAo3g0c'
            }
        };

        const authentication = await (fetch('https://api.themoviedb.org/3/authentication', options)
            .then(response => response.json())
            .then(response => console.log(''))
            .catch(err => console.error(err)));


        movieData = await axios.get('https://api.themoviedb.org/3/account/719ef349785fecd706a9b04f07619433/favorite/movies', options)



        if (movieData && id) {
            movieData.data.results.forEach(element => {
                if (element.id == id.slice(1, id.length)) {

                    setMovie(element);
                }
            })
        }

        getGenreNames(movie.genre_ids);




    }

    function getGenreNames(genresMovie) {
        
        let prevState =''
        
        if(genresMovie) {
            genresMovie.forEach(function(key, index) {
               
                if(genres[key]) {
                    if(!prevState) {
                        prevState = genres[key]
                    } else {
                        prevState = prevState +", "+genres[key];
                    }
                }
            })
        }

        setGenreList(prevState);
    }

    useEffect(() => {
        getMovieInfo(movieid)
    }, [])

    useEffect(() => {
        getGenreNames(movie.genre_ids)
    }, [movie])



    return (
        <>
            <div className="movieInfo">
                <Header />
                <div className="row">
                    <div className="flex-row-container">
                        <Link to="/movies" className="return-btn"><i class="fa-solid fa-left-long"></i>Back</Link>
                    </div>
                    <div className="flex-row-container">
                        <div className="image-container">
                            <figure class="movie__img--wrapper">
                                <img class="movie__img" src={imageBaseUrl + movie.poster_path} alt={movie.title} />
                            </figure>
                        </div>
                        <div className="movie-informaion">
                            <h2>{movie.title}</h2>
                            <h3>Release Date: {movie.release_date}</h3>
                            <h4>Original Language: {movie.original_language}</h4>
                            <h4>Genres: {genrelist}</h4>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Movieinfo