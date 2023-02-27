
import React from 'react';
import './welcome.scss';
import './welcome_pt2.scss';

import {NavLink as Link } from "react-router-dom"

function Welcome() {
    return (
      <div className="container-parent">
        <p className="mainly">
          I'm <span>Ivan Veremchuk</span> ,a<br/> 
          <span> Software Engineer</span> <br/>
          in beautiful <span>Toronto</span> 
        </p>
        <div className="break"></div>
        <Link className="box box-first-tag" to="/View_case_studies"><span class="fa-regular fa-eye fa-2xl"/><span class='separator prevent-select'>|</span><span>View <br/>Case Studies</span></Link>
        <Link className="box box-second-tag" to="/Just_for_fun"><span class="fa-solid fa-wand-magic-sparkles fa-2xl"/><span class='separator prevent-select'>|</span><span>Just <br/>for Fun</span></Link>
      </div>
    );
  }

export default Welcome;