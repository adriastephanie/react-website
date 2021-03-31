import React, { Fragment, useState } from 'react';
import './login.css';
import { Link, Redirect } from 'react-router-dom';
import Navbar from '../../components/navbar';
import firebase from '../../config/firebase';
import 'firebase/auth';
import {useSelector, useDispatch } from 'react-redux';
import ModalComponent from '../../view/popup';

function Login(){
    
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [modal, setModal] = useState(false);


    const dispatch = useDispatch();

    function Logar() {
        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            setMsgTipo('sucesso');
            dispatch({type: 'Log_IN', usuarioEmail: email});

        }).catch(erro => {
            setMsgTipo('erro');

        });

    }

    function handleModal() {
        setModal(!modal) 
    }


    return(
        <>
            <Navbar/>
            <div className="login-content d-flex align-items-center">
                {
                    useSelector(state => state.usuarioLogado > 0 ? <Redirect to='/' /> : null)
                }

                <main className="form-signin mx-auto">
                    <form>
                        
                        <h1 className="h3 mb-3 fw-normal text-black font-weight-bold">Faça seu Login</h1>

                        <div className="form-floating">
                            <input onChange= {(e) => setEmail(e.target.value)} type="email" class="form-control my-2" id="floatingInput" placeholder="E-mail"/>
                        </div>

                        <div className="form-floating">
                            <input onChange= {(e) => setSenha(e.target.value)} type="password" class="form-control my-2" id="floatingPassword" placeholder="Senha"/>
                        </div>

                        <button onClick={Logar} class="w-100 btn btn-lg btn-login" type="button">Logar</button>
                        
                        
                        <div className="mgs-login text-black text-center mx-2">
                            {msgTipo === 'sucesso' && <span><strong>Aí sim!</strong>Você está conectado! &#128077;</span>}
                            {msgTipo === 'erro' && <span><strong>Ops!</strong>Verifique se a senha ou e-mail estão corretos &#128078;</span>}
                            
                            
                        </div>

                        <div className="opcoes-login mt-3 text-center">
                            <a href="#" className="mx-2">Quero recuperar minha senha</a>
                            <span>&#9733;</span>
                            <Link to='novousuario' className="mx-2">Quero me cadastrar</Link>
                            <button className="w-100 btn btn-lg btn-login" type="button" onClick={handleModal}>Modal</button>
                            

                        </div>
                        
                        <p className="mt-5 mb-3 text-muted">&copy; EMPRESA EXEMPLO LTDA 2020–2021</p>
                    </form>
                </main>
                <ModalComponent handleClose={handleModal} show={modal} title="Experimento 1">
                <form>
  
                     <div className="mb-3">
                         <label className="form-label">Primeiro Nome:</label><br/>
                         <input type="text" class="form-control" id="recipient-name" placeholder="Digite seu Nome aqui"></input><br/>
    
                         <label>Ultimo Sobrenome:</label><br/>
                         <input type="text" className="form-control" name="LastName" placeholder="Digite seu Sobrenome aqui"></input><br/>
    
                         <label for="fname">Email:</label><br/>
                         <input type="email" className="form-control" name="email" placeholder="Digite seu E-mail"></input><br/>
                     </div>
    
                     <div class="mb-3 form-check">
                         <label >Qual o seu sexo?</label><br/>
                         <input type="radio" name="sexo" value="masculino"/>Masculino <br/>
                         <input type="radio" name="sexo" value="feminino"/>Feminino <br/>
    
                     </div>
    
                     <div class="mb-3 form-check">
                         <label for="fname">Quais dos esportes abaixo você pratica?</label><br/>
                         <input type="checkbox" name="esporte" value="natacao" />Natação<br/>
                         <input type="checkbox" name="esporte" value="volei" />Vôlei<br/>
    
                    </div>
    
                                    
                     <label for="cidade">Qual sua Cidade?</label><br/>
                     <select name="cidade" className="form-control" id="cidade">
                         <option value="saopaulo">São Paulo</option>
                         <option value="manaus">Manaus</option>
                         <option value="campinas">Campinas</option>
                         <option value="fortaleza">Fortaleza</option>
                     </select>
    
                 </form>
                </ModalComponent>
                
            </div>
            
        </>
    )
}

export default Login;

