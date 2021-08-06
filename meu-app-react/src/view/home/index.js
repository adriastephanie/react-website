import React, { useState } from 'react';
import './home.css';
import NavBar from '../../components/NavBar';
import { useSelector } from 'react-redux';

function Home(){
    return(
        <>
            <NavBar/>
            <h1>{useSelector(state => state.usuarioEmail)}</h1>
            <h2>logado: {useSelector(state => state.usuarioLogado)}</h2>
        </>
    )
}

export default Home;