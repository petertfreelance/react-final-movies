import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Movie from "../components/Movie";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const Movies = () => {

    let navigate = useNavigate()
    const id = useParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState();

    let movieData ='';
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
        
        
        if(!movieData) {
            movieData = await axios.get('https://api.themoviedb.org/3/account/719ef349785fecd706a9b04f07619433/favorite/movies', options)
        }

        if(movies.length === 0 && movieData ) {
            setMovies(movieData);
        }
        
        setMovies(movieData.data.results);

    
        if(filter) {
            updateMovieLists(filter);
            
        } 

        setLoading(false);
        
    }

    function updateMovieLists(filter) {

        let filtered_array = [];
        let sorted_array = [];

        setLoading(true);

        if(filter && filter != 'RELASE_DATE_ASC' && filter != 'RELASE_DATE_DSC' && filter != 'ALPHABETICAL') {
            
            movies.forEach(element => {

                if(element.title.toLowerCase().includes(filter)) {
                    
                    filtered_array.push(element);
                }
            });

            console.log("filtered:")
            console.log(filtered_array)
            setMovies(filtered_array);

        } else if (filter == 'RELASE_DATE_ASC') {
            
            sorted_array = movies;
            setMovies(['placeholder']);
            sorted_array.sort((a,b) => {return a.release_date.localeCompare(b.release_date)})
            console.log('here:')
            console.log(sorted_array)
            setMovies(sorted_array);

        } else if (filter == 'RELASE_DATE_DSC') {
            sorted_array = movies;
            setMovies([]);
            sorted_array.sort((a,b) => {return b.release_date.localeCompare(a.release_date)})
            setMovies(sorted_array);
            
        } else if (filter == 'ALPHABETICAL') {
            sorted_array = movies;
            setMovies([]);
            sorted_array.sort((a,b) => {return a.title.localeCompare(b.title)})
            setMovies(sorted_array);
           
        }
    } 
    
    
    useEffect(() => {
        console.log(id.filter)
        if (id.filter) {
            renderMovies(id.filter.slice(1, id.length))
        } else {
            renderMovies()
        }
        

    }, []);

    useEffect(() => {
        console.log(id.filter)
        if (id.filter) {
            renderMovies(id.filter.slice(1, id.length))
        } else {
            renderMovies()
        }
        

    }, [id]);

    useEffect(() => {
        
        console.log("Updated movies:", movies);
    }, [movies]);

    

    return (
        <>
            <Header />
            <div class="row movie-section">
      <div class="filter-container">
        <span>Sort By: </span>
        <select name="" defaultValue="" id="filter" onChange={(e) => {renderMovies(e.target.value)}}>
          <option value="" selected>Sort</option>
          <option value="RELASE_DATE_ASC">Oldest Release</option>
          <option value="RELASE_DATE_DSC">Latest Release</option>
          <option value="ALPHABETICAL">A - Z</option>
        </select>
      </div>
      <div class={loading ? "movies__loading":"" + " shop-container "} id="shop">
      <i className="fas fa-spinner movies__loading-spinner"></i>
        
      {movies && !loading && movies.map((movie) => {
                  return <Movie movie={movie} key={movie.id} />;
                })}
        
    </div>
    </div>
            <Footer />
        </>
    )
}

export default Movies;