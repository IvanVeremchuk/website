import React from 'react';
import {NavLink as Link } from "react-router-dom"
import './index.scss';


function Navbar() {

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <input type="checkbox" id="nav-control" class="nav-control" />
          <label for="nav-control" class="toggle-button">
            <div class="wolverine">
              <div class="claws"></div> 
              <span>menu</span>
            </div>
          </label>
          <div class="navigation">
            <h1><a href="Welcome">IVAN VEREMCHUK | | WEB DEVELOPER</a></h1>
            <h1>
              <Link className={({ isActive }) => (isActive ? "nav-link-active" : "nav-link")} to="Work">
                WORK
              </Link>
            </h1>
            <h1><a href="About" >ABOUT</a></h1>
            <h1><a href="#Resume">RESUME</a></h1>
          </div>
          <Link className="nav-link   navigation-menu" to="/Welcome">
            <span className="nowrap-class">
              IVAN VEREMCHUK | | WEB DEVELOPER
            </span>
          </Link>
        </div>
          <div className="navbar-center brand-name prevent-select">
            <Link className="nav-link" to="/">
              <div className="div-logo">
                <div className="logo-a i">\</div>
                <div className="logo-a v1">\</div>
                <div className="logo-a v2">/</div>
              </div>
            </Link>
          </div>
          <div className="navbar-right navigation-menu">
            <div className="navbar-work-ch">
              <Link className={({ isActive }) => (isActive ? "nav-link-active" : "nav-link")} to="Work">
                WORK
              </Link>
              <Link className={({ isActive }) => (isActive ? "nav-link-active" : "nav-link")} to="About">
                ABOUT
              </Link>
              <Link className={({ isActive }) => (isActive ? "nav-link-active" : "nav-link")} to="Resume">
                RESUME
              </Link>
            </div>
            <div className="navbar-icons">
              <a
                className="nav-link"
                href="https://github.com/IvanVeremchuk"
                target="_blank"
                rel="noreferrer"
              >
                <span class="fa-brands fa-github fa-xl" />
              </a>
              <a
                className="nav-link"
                href="https://t.me/Ivan_w"
                target="_blank"
                rel="noreferrer"
              >
                <span class="fa-regular fa-paper-plane fa-xl" />
              </a>
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/ivan-veremchuk"
                target="_blank"
                rel="noreferrer"
              >
                <span class="fa-brands fa-linkedin-in fa-xl" />
              </a>
              <a className="nav-link" href="href=mailto:ivanveremchukdev@gmail.com">
                <span class="fa-regular fa-envelope fa-xl" />
              </a>
            </div>
          </div>
      </nav>
    </>
  );
}
  
export default Navbar;