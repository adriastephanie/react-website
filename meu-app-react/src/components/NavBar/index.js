import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function NavBar () {
  

   return (

    <nav className="navbar navbar-expand-lg">
      <span className="navbar-brand text-black font-weight-bold">Logo</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars text-black"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/novousuario">Cadastrar</Link></li>
        </ul>
      </div>
  </nav>


   );
}