import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Header />
            <div className="home-body">
                <div className="home-cta">
                    
                    <button className="home-link">See Movies</button>
                    <Link to="/contact" className="home-link">Contact</Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;