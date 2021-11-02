import React from 'react';
import './Nav.css';
import logo from './images/f.png';

const Nav = () => {
    return (
       <div className="navjs" >
       <header className="header">

          <div className="user">
              <img src={logo} alt=""/>
              <h3>Salhi Fayza</h3>
              <p>Front-End & Back-End </p>
              <p>Developer</p>
          </div>

          <nav className="navbar">
              <a href="/">Home</a>
              <a href="/Products">Products</a>
              <a href="/Services">Services</a>
              <a href="/Portfolio">Portfolio</a>
              <a href="/Contact">Contact</a>
          </nav>

      </header>
         </div>
    )
}
export default Nav;
