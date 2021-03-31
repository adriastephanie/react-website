import React, { Fragment, useState } from 'react';
import './usuario-novo.css';
import Navbar from '../../components/navbar'
import firebase from '../../config/firebase';
import 'firebase/auth';


function NovoUsuario() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState();
    const [carregando, setCarregando] = useState();

    function cadastrar(){

        setCarregando(1);

        setMsgTipo(null);

        if(!email || !senha){
            setMsgTipo('erro')
            setMsg('Você precisa informar o email e senha para fazer o cadastro')
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado => 
            {
                setCarregando(0);
                setMsgTipo('sucesso')


            }).catch(erro => 
                { setCarregando(0);
                    setMsgTipo('erro')
                    
                    switch(erro.message) 
                    {
                        case 'Password should be at least 6 characters':
                            setMsg('A senha deve ter pelo menos 6 caracteres!');
                            break;

                        case 'The email address is already in use by another account.':
                            setMsg('Este email já está sendo utilizado por outro usuário');
                            break;
                        
                        case 'The email address is badly formatted.':
                            setMsg('O formato do e-mail é inválido');
                            break;
                        
                        default:
                            setMsg('Não foi possível cadastrar. Tente Novamente mais tarde.');
                            break;
                    }

            })

    
    }
    
    return(
        <Fragment>

            <Navbar/>

            <div className='form-cadastro'>
                <form className='text-center form-login mx-auto mt-5'>
                    <h1 className='h3 text-black font-weight-bold'>Cadastro</h1>

                    <input onChange= {(e) => setEmail(e.target.value)} type="email" className='form-control my-2' placeholder="Email"></input>
                    <input onChange= {(e) => setSenha(e.target.value)} type="password" className='form-control my-2' placeholder="Senha"></input>

                    {
                        carregando ? <div class="spinner-border text-info" role="status"><span class="sr-only">Loading...</span></div>
                        : <button onClick={cadastrar} class="w-100 btn-lg btn-cadastro" type="button">Cadastre-se</button>
                    }

                    
                    <div className="mgs-login text-black text-center mx-2">
                        
                        {msgTipo === 'sucesso' && <span><strong>Aí sim!</strong>Você está cadastrado em nosso site!!! &#128077;</span>}
                        {msgTipo === 'erro' && <span><strong>Ops!</strong> {msg} &#128078;</span>}
                            
                            
                    </div>
                </form>

            </div>
        </Fragment>
    )

}

export default NovoUsuario;