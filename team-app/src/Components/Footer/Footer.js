import React from 'react';
import '../../Assets/Styles/footer.css';



const Footer = () => {
    return (
        <footer>
            <ul className="footer-ulist">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="whyus.html">Services</a></li>
                <li><a href="pdf/Visiple - Terms & Conditions.pdf">Terms & Conditions</a></li>
                <li><a href="contact.html">Support</a></li>
            </ul>
            <div className="footer-icons">
                <a href="https://twitter.com/Visiple_"><i className="ri-twitter-fill"></i></a>
                <a href="https://www.facebook.com/visiple/"><i className="ri-facebook-fill"></i></a>
                <a href="https://www.instagram.com/visiple_/"><i className="ri-instagram-line"></i></a>
                <a href="https://www.linkedin.com/company/visiple"><i className="ri-linkedin-fill"></i></a>
            </div>
        </footer>
    );
}

export default Footer;
