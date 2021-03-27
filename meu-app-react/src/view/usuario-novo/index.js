import React, { useState } from 'react';
import './usuario-novo.css';
import firebase from '../../config/firebase';
import 'firebase/auth';

function NovoUsuario() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState();

    function cadastrar(){
        setMsgTipo(null);

        if(!email || !senha){
            setMsgTipo('erro')
            setMsg('Você precisa informar o email e senha para fazer o cadastro')
            return;
        }

        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            setMsgTipo('sucesso');

        }).catch(erro => {
            alert('erro');

        });
    }

    return(
        <div className='form-cadastro'>
            <form className='text-center form-login mx-auto mt-5'>
                <h1 className='h3 text-black font-weight-bold'>Cadastro</h1>

                <input onChange= {(e) => setEmail(e.target.value)} type="email" className='form-control my-2' placeholder="Email"></input>
                <input onChange= {(e) => setSenha(e.target.value)} type="password" className='form-control my-2' placeholder="Senha"></input>

                <button onClick={cadastrar} class="w-100 btn-lg btn-cadastro" type="button">Logar</button>

                <div className="mgs-login text-black text-center mx-2">
                    
                    {msgTipo === 'sucesso' && <span><strong>Aí sim!</strong>Você está cadastrado em nosso site!!! &#128077;</span>}
                    {msgTipo === 'erro' && <span><strong>Ops!</strong> {msg} &#128078;</span>}
                        
                        
                </div>
            </form>

        </div>
    )

}

export default NovoUsuario;