import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
        <section>
            <footer>
                <div className="copyright">
                <span>
                &copy; Peter Talavera. All Rights Reserved
                </span>
                </div>
                <div className="contact-link">
                    <Link to="/contact">Contact</Link>
                </div>
            </footer>
        </section>
        </>
    )
}

export default Footer