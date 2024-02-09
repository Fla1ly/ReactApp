import './Assets/Styles/main.css';
import './Assets/Images/Visiple_logo_1.png';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='index-body'>
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
                <a href="/about" className="btn btn-primary btn-lg btn-media">Learn More <i className="ri-arrow-drop-right-line"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
