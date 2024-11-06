import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Movie from "../components/Movie";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Movies = () => {

    const id = useParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState();
    let [searchId, setSearchId] = useState()

    

    async function renderMovies(filter) {


        setLoading(true);
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTQwNzIwNTRkNDFhMTZlNWZkM2FhNzY2MTgyNjczNSIsIm5iZiI6MTcyODg2NDI3OC4xOTI3NTksInN1YiI6IjY3MGM1ZGQ1M2JiNDU1N2M2NjliZDY3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ti66TBc3pP40Ou45YW8VfpgrzkOAUBIf1tw1UAo3g0c'
            }
          };
    
          const authentication =await (fetch('https://api.themoviedb.org/3/authentication', options)
          .then(response => response.json())
          .then(response => console.log(''))
          .catch(err => console.error(err)));
          
        
    
        const moviewrapper = document.getElementById('shop');
        const movieData = await axios.get('https://api.themoviedb.org/3/account/719ef349785fecd706a9b04f07619433/favorite/movies', options)


        console.log(movieData.data.results);
        setMovies(movieData.data.results);

        console.log("here:")
        console.log(movies);

        if(searchId && movies) {
            updateMovieLists(searchId);
            
        }

        if(movies) {
            setLoading(false);
        }

        
    }

    function updateMovieLists(filter) {

        // console.log("here:")
        // console.log(movies)
        // console.log(filter)
        const filtered_array = [];

        if(filter != 'RELASE_DATE_ASC' && filter != 'RELASE_DATE_DSC' && filter != 'ALPHABETICAL') {
            
            movies.forEach(element => {

                if(element.title.toLowerCase().includes(filter)) {
                    
                    filtered_array.push = element;
                }
            });
            // console.log(filtered_array)
    
            setMovies({filtered_array});
        } else if (filter == 'RELASE_DATE_ASC') {
            
            filtered_array = movies;
            filtered_array.sort((a,b) => {return a.release_date.localeCompare(b.release_date)})
            setMovies(filtered_array);

        } else if (filter == 'RELASE_DATE_DSC') {
            filtered_array = movies;
            filtered_array.sort((a,b) => {return b.release_date.localeCompare(a.release_date)})
            setMovies(filtered_array);
            
        } else if (filter == 'ALPHABETICAL') {
            filtered_array = movies;
            filtered_array.sort((a,b) => {return a.title.localeCompare(b.title)})
            setMovies(filtered_array);
           
        }
    } 
    
    
    useEffect(() => {
        if (id.filter) {
            setSearchId(id.filter.slice(1, id.length))
        }
        
        renderMovies();
    }, []);
    
    

    return (
        <>
            <Header />
            <div class="row movie-section">
      <div class="filter-container">
        <span>Sort By: </span>
        <select name="" id="filter" onchange="renderMovies(event)">
          <option value="" selected>Sort</option>
          <option value="RELASE_DATE_ASC">Oldest Release</option>
          <option value="RELASE_DATE_DSC">Latest Release</option>
          <option value="ALPHABETICAL">A - Z</option>
        </select>
      </div>
      <div class={"shop-container " + loading ? "movies__loading":""} id="shop">
        
        {
            loading ? <i className="fas fa-spinner movies__loading-spinner"></i>
            : () => {(movies.map((movie) => {
                console.log(movie);
                return <Movie movie={movie} key={movie.id} />;
            }))}
            
        }
        
    </div>
    </div>
            <Footer />
        </>
    )
}

export default Movies;