/* about/index.js */

import React from 'react';
import '../../Assets/Styles/main.css';
import Navbar from '../../Components/Navbar/Navbar';
import Team from '../../Components/Team/teamloop';

const About = () => {

  return (
    <div className='about-body'>
      <Navbar />
      <div class="about-container">
        <div class="about-info">
          <div class="about-info-main" data-aos="fade-right" data-aos-duration="1000"
            data-aos-easing="ease-in-out" data-aos-once="true">
            <h1>About Us</h1>
            <div class="divider"></div>
            <h2>Discover the future of work with Visiple.</h2>
          </div>
          <div class="about-info-goals" data-aos="fade-left" data-aos-duration="3000"
            data-aos-easing="ease-in-out">
            <h3>Our mission</h3>
            <p>To provide a straight forward, easy to use and secure video communications</p>
            <h3>Our​ vision</h3>
            <p>Work from Anywhere Better tools for Better Meetings</p>
            <h3>Our values </h3>
            <p>Customers, Teammates, Individuals, Innovation and Flexibility </p>
            <h3>Our culture</h3>
            <p>Innovation and User focus</p>
          </div>
          <div class="about-socials">
            <a href="https://twitter.com/Visiple_"><i class="ri-twitter-fill"></i></a>
            <a href="https://www.facebook.com/visiple/"><i class="ri-facebook-fill"></i></a>
            <a href="https://www.instagram.com/visiple_/"><i class="ri-instagram-line"></i></a>
            <a href="https://www.linkedin.com/company/visiple"><i class="ri-linkedin-fill"></i></a>
          </div>
        </div>
        <div className="team-wrapper">
          <div className="team-header" data-aos="fade-up" data-aos-duration="1000">
            <h1>Meet the Team</h1>
            <div className="divider-black"></div>
          </div>
          <Team />
        </div>
      </div>
    </div>
  );
};

export default About;
