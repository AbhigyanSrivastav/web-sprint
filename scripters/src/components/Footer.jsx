import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
    return (
        <div className="footer">
            <p>&copy; {new Date().getFullYear()} Your Website. All Rights Reserved.</p>
            <div className="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Contact</a>
            </div>
        </div>
    );
};

export default Footer;
