import React, {useEffect, useState} from "react";

const Movie = ({ movie}) => {

    const imageBaseUrl = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'

    

    function check() {
        console.log(movie);
    }

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
                        <img class="movie__img" src={imageBaseUrl + movie.poster_path} alt="" />
                    </figure>
                    <div class="movie__title">
                        <span>{movie.title}</span>
                    </div>
                    <div className="movie__date">
                        {movie.release_date}
                    </div>
                    <div class="movie__description">
                    <p class="overview">{movie.overview.substring(0, 50)} <span className="more">{movie.overview.substring(51, movie.overview.length)}</span><a href="javascript:void(0)" onClick={() => showMore(movie.id)} class="show-more">more...</a></p>
                    </div>
                </div>
    )
}

export default Movie;