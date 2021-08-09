import React, {  useState } from 'react';
import './evento-cadastro.css';
import { Link } from 'react-router-dom';
import firebase from '../../config/firebase';
import { useSelector } from 'react-redux';
import NavBar from '../../components/NavBar';

function EventoCadastro(){

    const [carregando, setCarregando] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [titulo, setTitulo] = useState();
    const [tipo, setTipo] = useState();
    const [detalhe, setDetalhe] = useState();
    const [data, setData] = useState();
    const [hora, setHora] = useState();
    const [foto, setFoto] = useState();
    const usuarioEmail = useSelector(state => state.usuarioEmail);

    const storage = firebase.storage();
    const db = firebase.firestore();


    function cadastrar(){
        setMsgTipo(null);
        setCarregando(1);
        
        storage.ref(`imagens/${foto.name}`).put(foto).then(() => {
            db.collection('eventos').add({
                titulo: titulo,
                tipo: tipo,
                detalhe: detalhe,
                data: data,
                hora: hora,
                usuario: usuarioEmail,
                visualizacoes: 0,
                foto: foto.name,
                publico: 1,
                criacao: new Date()
            }).then(() => {
                setMsgTipo('sucesso');
                setCarregando(1);
            }).catch(erro => {
                setMsgTipo('erro');
                setCarregando(0);
        });
    });
}    

    return(
        <>
            <NavBar/>
            <div className="col-12 mt-3">
                <div className="row text-center mb-4">
                    <h3 className="h3 mb-3 fw-normal text-black font-weight-bold">Novo Evento</h3>

                </div>
                <form className="form-group">
                    <div>
                        <label>Título:</label>
                        <input onChange= {(e) => setTitulo(e.target.value)} type="text" className="form-control my-2" id="titulo-evento" placeholder="Título"/>
                    </div>

                    <div>
                        <label>Tipo do evento:</label>
                        <select onChange= {(e) => setTipo(e.target.value)} className="form-control" id="tipo-evento">
                            <option disabled selected value>Selecione um tipo</option>
                            <option>Festa</option>
                            <option>Teatro</option>
                            <option>Show</option>
                            <option>Evento</option>
                        </select>
                    </div>

                    <div className="form-group my-2">
                        <label>Descrição do evento:</label>
                        <textarea onChange= {(e) => setDetalhe(e.target.value)} className="form-control" rows="3" id="descricao-evento" placeholder="Descrição do evento">

                        </textarea>
                    </div>
                    <div className="form-group row">
                        <div className="col-6">
                            <label>Data:</label>
                            <input onChange= {(e) => setData(e.target.value)} type="date" className="form-control my-2" id="data-evento" placeholder="Data"/>
                        </div>
                        <div className="col-6">
                            <label>Hora:</label>
                            <input onChange= {(e) => setHora(e.target.value)} type="time" className="form-control my-2" id="hora-evento" placeholder="Data"/>
                        </div>
                    </div>

                    <div>
                        <label>Upload da foto:</label>
                        <input onChange= {(e) => setFoto(e.target.files[0])} type="file" className="form-control my-2" id="upload-foto-evento"/>
                    </div>

                    <div class="row">
                        {
                            carregando > 0 ? <div class="spinner-border text-info mx-auto" role="status"><span className="sr-only">Loading...</span></div>
                        : <button onClick={cadastrar} class="w-100 btn btn-lg btn-salvar" type="button">Salvar</button>
                        }
                    </div>

                </form>

                <div className="mgs-login text-black text-center mx-2">
                        {msgTipo === 'sucesso' && <span><strong>Aí sim!</strong>Seu evento foi publicado! &#128077;</span>}
                        {msgTipo === 'erro' && <span><strong>Ops!</strong>Verifique se os campos estão corretos &#128078;</span>}  
                </div>

            </div>
        </>
    )

}

export default EventoCadastro;