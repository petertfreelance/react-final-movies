import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import ContcatImg from '../assets/contact-movie-img.png';

const Contact = () => {
    return (
        <>
            <Header />
            <div className="row">
            <div className="contact-body">
                <div className="contact-info">
                    <p>Contact me for more information regarding site or functionality at: </p>
                    <p>Tel: (480) 299-5151</p>
                    <p>Email: petertfreelance@gmail.com</p>

                </div>
                <div className="contact-info">
                    <img src={ContcatImg} alt="Contact Movie Image"/>
                </div>
            </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact;