import './App.css';
import './Assets/Styles/main.css';
import './Assets/Images/Visiple_logo_1.png';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className="main-head" data-aos="fade-down" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
        <div className="index-container">
          <div className="index-row">
            <div className="index-content">
              <h4>Welcome to Visiple</h4>
              <div className="divider"></div>
              <div className="index-txt-wrapper">
                <h1>Where Remote Work Meets</h1>
                <h1>Freedom</h1>
              </div>
              <div className="index-buttons-parent">
                <a href="signup.html" className="btn btn-primary btn-lg btn-media">Sign up</a>
                <a href="about.html" className="btn btn-primary btn-lg btn-media">Learn More <i className="ri-arrow-drop-right-line"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
}

export default App;
