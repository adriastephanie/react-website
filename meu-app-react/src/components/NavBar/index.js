import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { Fragment } from 'react';

export default function NavBar () {

    const dispatch = useDispatch();
  

   return (

    <nav className="navbar navbar-expand-lg">
      <span className="navbar-brand text-black font-weight-bold">Logo</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars text-black"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          {
            useSelector(state => state.usuarioLogado) > 0 ? 
            <>
              <li className="nav-item"><Link className="nav-link" to="#">Publicar Evento</Link></li>
              <li className="nav-item"><Link className="nav-link" to="#">Meus Eventos</Link></li>
              <li className="nav-item"><Link className="nav-link" onClick={() => dispatch({type: 'LOG_OUT'})}>Sair</Link></li>
              
            </>
            :
            <>
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/novousuario">Cadastrar</Link></li>
            
            </>

            
          } 
        </ul>
      </div>
  </nav>


   );
}