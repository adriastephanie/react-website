import React, {  useState } from 'react';
import './recuperar-senha.css';
//import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import firebase from '../../config/firebase';
import 'firebase/auth';


    
function UsuarioRecuperarSenha(){
    const [email, setEmail] = useState();
    const [msg, setMsg] = useState();

    function recuperarSenha(){
        firebase.auth().sendPasswordResetEmail(email).then(resultado => {
            setMsg('Enviamos o link para seu e-mail');
        }).catch(erro => {
            setMsg('Verifique se seu e-mail está correto');
        })
    }
    return(
        <>
         <NavBar/>
             <form className="text-center form-login mx-auto mt-5">
             <h2 className="mb-3 font-weight-bold">recuperacao</h2>
             <div className="form-floating">
                  <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" id="recuperar-senha" placeholder="Email"/>
                    <label for="recuperar-senha">Email</label>
            </div>
             <button onClick={recuperarSenha} className="w-100 btn btn-lg btn-enviar" type="button">Enviar</button>
             <div className="msg my-4 text-center">
                 <span>{msg}</span>
             </div>
             </form>
        </>
    )

}

export default UsuarioRecuperarSenha;