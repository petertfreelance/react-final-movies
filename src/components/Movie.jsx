import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";

const Movie = ({ movie}) => {

    const imageBaseUrl = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'

    let navigate = useNavigate()



    function showMore(id) {
        let movie = document.getElementById(id);
    
        let description = movie.querySelector('.movie__description').querySelector('.overview');
    
        if (description) {
            if (description.classList.contains("active")) {
                description.querySelector(".show-more").innerHTML = "more..."
                description.classList.remove("active")
        
            } else {
                description.classList +=' active'
                description.querySelector(".show-more").innerHTML = "less..."
            }
        }
    }

    

    return (
        <div id={movie.id} class="movie">
                    <figure class="movie__img--wrapper">
                        <Link to={"/movies/movieinfo/:"+ movie.id} ><img class="movie__img" src={imageBaseUrl + movie.poster_path} alt="" /></Link>
                    </figure>
                    <div class="movie__title">
                        <Link to={"/movies/movieinfo/:"+ movie.id} ><span>{movie.title}</span></Link>
                    </div>
                    <div className="movie__date">
                        {movie.release_date}
                    </div>
                    <div class="movie__description">
                    <p class="overview">{movie.overview.substring(0, 50)}<Link to={"/movies/movieinfo/:"+ movie.id} class="show-more">more...</Link></p>
                    </div>
                </div>
    )
}

export default Movie;