import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import firebase from '../../config/firebase';

//COMPONENTS
import Navbar from '../../components/NavBar';
import EventoCard from '../../components/evento-card';


function Home({ match }) {

    const [eventos, setEventos] = useState([]);
    const [pesquisa, setPesquisa] = useState('');
    let listaEventos = [];

    const usuarioEmail = useSelector(state => state.usuarioEmail);

    useEffect(() => {

        if (match.params.parametro) {
            firebase.firestore().collection('eventos').where('usuario', '==', usuarioEmail).get().then(async (resultado) => {
                await resultado.docs.forEach(doc => {
                    if (doc.data().titulo.indexOf(pesquisa) >= 0) {
                        listaEventos.push({
                            id: doc.id,
                            ...doc.data()
                        });
                    }
                });
                setEventos(listaEventos);
            });
        } else {
            firebase.firestore().collection('eventos').get().then(async (resultado) => {
                await resultado.docs.forEach(doc => {
                    if (doc.data().titulo.indexOf(pesquisa) >= 0) {
                        listaEventos.push({
                            id: doc.id,
                            ...doc.data()
                        });
                    }
                });
                setEventos(listaEventos);
            });
        }
    });

    return (
        <>
            <Navbar />

            <div className="row ml-5 mr-5 p-3">
                <h2 className="mx-auto p-4 titulo-home">Eventos Cadastrados</h2>
                <input onChange={(e) => setPesquisa(e.target.value)} type="text" className="form-control text-center" placeholder="Pesquisar evento pelo título..." />
            </div>

            <div className="row p-3">
                {eventos.map(item => <EventoCard key={item.id} id={item.id} img={item.foto} titulo={item.titulo} detalhes={item.detalhes} visualizacoes={item.visualizacoes} />)}
            </div>

        </>
    );
}

export default Home;