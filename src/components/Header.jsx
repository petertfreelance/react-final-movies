import React, {useEffect, useState} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import logo from '../assets/logo (2).png';

const Header = () => {

  let navigate = useNavigate()
  const {id} = useParams();
  const [searchId, setSearchId] = useState(id)
  const searchButton = document.getElementById('search-submit');
    

  function searchActive(searchValue) {
    if(searchValue){
      if(!searchButton.classList.contains('active')) {
        searchButton.classList.add('active')
      }
    } else {
      if(searchButton.classList.contains('active')) {
        searchButton.classList.remove('active')
      }
    }
  }
    return(
        
        <>
        <section id="top">
        <div class="overlay"></div>
        <nav>
          <Link to="/">
          <figure>
              <img id="personal-logo" src={logo} alt="Movies!" />
            </figure>
            </Link>
            
            <ul class="nav__link--list">
              <li class="nav__link">
                <Link to="/" className="
                  nav__link--anchor
                  link__hover-effect
                  link__hover-effect--black
                ">Home</Link>
              </li>
              <li class="nav__link">
                <Link to="/movies" className="
                  nav__link--anchor
                  link__hover-effect
                  link__hover-effect--black
                ">Movies</Link>
              </li>
              <li class="nav__link">
                <Link to="/contact" className="
                  nav__link--anchor
                  link__hover-effect
                  link__hover-effect--black
                ">Contact</Link>
              </li>
              
            </ul>
          </nav>
          <header class="header">    
            <div class="header-content">
                <h1 class="title">Browse our Movies</h1>
                <div class="search-container">
                    <input id="search" class="search-input input-text" value={searchId} placeholder="Search Movies..." 
                    onChange={(event) => 
                    {
                      setSearchId(event.target.value);
                      searchActive(event.target.value)}
                    } 
                    onKeyPress={(event) => {
                      if(event.key === 'Enter') {
                        if(searchId) {
                          navigate(`/movies/:${searchId}`);
                        } else {
                          navigate('/movies')
                        }
                        
                      }
                    }}
                    />
                    <button 
                    id="search-submit" 
                    className="search-submission"
                    onClick={(event) => {
                      navigate(`/movies/:${searchId}`);
                    }}
                    ><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
          </header>
    </section>
        </>
    )
}
export default Header;