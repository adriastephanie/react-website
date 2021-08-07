import React, {  useState } from 'react';
import './evento-cadastro.css';
import { Link } from 'react-router-dom';
import firebase from '../../config/firebase';
import { useSelector } from 'react-redux';
import NavBar from '../../components/NavBar';

function EventoCadastro(){

    const [msgTipo, setMsgTipo] = useState();

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
                        <input type="text" className="form-control my-2" id="titulo-evento" placeholder="Título"/>
                    </div>

                    <div>
                        <label>Tipo do evento:</label>
                        <select className="form-control" id="tipo-evento">
                            <option disabled selected value>Selecione um tipo</option>
                            <option>Festa</option>
                            <option>Teatro</option>
                            <option>Show</option>
                            <option>Evento</option>
                        </select>
                    </div>

                    <div className="form-group my-2">
                        <label>Descrição do evento:</label>
                        <textarea className="form-control" rows="3" id="descricao-evento" placeholder="Descrição do evento">

                        </textarea>
                    </div>
                    <div className="form-group row">
                        <div className="col-6">
                            <label>Data:</label>
                            <input type="date" className="form-control my-2" id="data-evento" placeholder="Data"/>
                        </div>
                        <div className="col-6">
                            <label>Hora:</label>
                            <input type="time" className="form-control my-2" id="hora-evento" placeholder="Data"/>
                        </div>
                    </div>

                    <div>
                        <label>Upload da foto:</label>
                        <input type="file" className="form-control my-2" id="upload-foto-evento"/>
                    </div>

                    <button  class="w-100 btn btn-lg btn-salvar" type="button">Salvar</button>

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