import React, { useState } from 'react';
import './home.css';
import {Link} from 'react-router-dom';
import NavBar from '../../components/navbar';

function Home(){
    return(
        <h1>
            <NavBar/>
        </h1>
    )
}

export default Home;