import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function NavBar () {
  

   return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand" href="#">Eventos</span>
      <button className="navbar-toggler" type='button' data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/novousuario">Cadastrar</Link></li>
        </ul>
      </div>
  </nav>


   );
}