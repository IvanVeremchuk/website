import React from 'react';
import './index.css';
  
const Navbar = () => {
  return (
    <nav className="footer">
      <a className="footer-link" href="https://github.com/IvanVeremchuk" target="_blank" rel="noreferrer" >
        <span class="fa-brands fa-github fa-xl" />
      </a>
      <a className="footer-link" href="https://proton.me/mail" target="_blank" rel="noreferrer">
        <span class="fa-regular fa-paper-plane fa-xl" />
      </a>
      <a className="footer-link" href="https://www.linkedin.com/in/ivan-veremchuk" target="_blank" rel="noreferrer" >
        <span class="fa-brands fa-linkedin-in fa-xl" />
      </a>
      <a className="footer-link" href="href=mailto:eduard.ivan@proton.me">
        <span class="fa-regular fa-envelope fa-xl" />
      </a>
    </nav>
  );
};
  
export default Navbar;
