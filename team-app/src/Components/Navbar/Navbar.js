import React from 'react';
import '../../Assets/Styles/navbar.css';
import logo from '../../Assets/Images/Visiple_logo_1.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="logo">
        <img src={logo} alt='Visiple.com' />
      </Link>
      <ul className="nav-ulist">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/whyus">Why Visiple</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <ion-icon name="person-circle-outline" id="btn-userpage" size="large"></ion-icon>
      </ul>
      <div className="bx bx-menu" id="menu-icon"></div>
    </nav>
  );
}

export default Navbar;
