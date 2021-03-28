import React, { Fragment } from 'react';
import Navbar from './components/NavBar'
import CarouselHome from './components/CarouselHome'
import { BrowserRouter as Router, Route} from 'react-router-dom';

/*Páginas*/
import Login from './view/login';
import NovoUsuario from './view/usuario-novo';


function App() {
  return(
    <Router>
      <Route exact path='/' component={Login} />
      <Route exact path='/novousuario' component={NovoUsuario} />
    </Router>
  );
}

export default App;
