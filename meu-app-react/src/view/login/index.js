import React, {  useState } from 'react';
import './login.css';
import { Link, Redirect } from 'react-router-dom';
import firebase from '../../config/firebase';
import 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';

function Login(){
    
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();


    const dispatch = useDispatch();


    function Logar() {
        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            setMsgTipo('sucesso');
            setTimeout(() => {
                dispatch({type: 'LOG_IN', usuarioEmail: email });

            },2000);
            

        }).catch(erro => {
            setMsgTipo('erro');

        });

    }


    return(
            
        <div className="login-content d-flex align-items-center">

            {useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='/' /> : null}

            <main className="form-signin mx-auto">
                <form>
                    
                    <h1 className="h3 mb-3 fw-normal text-black font-weight-bold">Faça seu Login</h1>

                    <div className="form-floating">
                        <input onChange= {(e) => setEmail(e.target.value)} type="email" className="form-control my-2" id="floatingInput" placeholder="E-mail"/>
                        <label for="floatingInput">Email</label>
                    </div>

                    <div className="form-floating">
                        <input onChange= {(e) => setSenha(e.target.value)} type="password" className="form-control my-2" id="floatingPassword" placeholder="Senha"/>
                        <label for="floatingPassword">Password</label>
                    </div>

                    <button onClick={Logar} class="w-100 btn btn-lg btn-login" type="button">Logar</button>
                    
                    
                    <div className="mgs-login text-black text-center mx-2">
                        {msgTipo === 'sucesso' && <span><strong>Aí sim!</strong>Você está conectado! &#128077;</span>}
                        {msgTipo === 'erro' && <span><strong>Ops!</strong>Verifique se a senha ou e-mail estão corretos &#128078;</span>}  
                    </div>

                    <div className="opcoes-login mt-3 text-center">
                        <a href="/novousuario" className="mx-2">Esqueceu a senha?</a>
                        <span>&#9733;</span>
                        <Link to='novousuario' className="mx-2">Não tem uma conta?</Link>
                    </div>
                    
                    <p className="mt-5 mb-3 text-muted">&copy; EMPRESA EXEMPLO LTDA 2020–2021</p>
                </form>
            </main>
            
        </div>
    )
}
export default Login;