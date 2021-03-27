import React from 'react';
import './login.css'

function Login() {
    return(
        <div className="login-content d-flex align-items-center">

            <main className="form-signin mx-auto">
                <form>
                    
                    <h1 className="h3 mb-3 fw-normal text-black font-weight-bold">Faca seu Login</h1>

                    <div className="form-floating">
                        <input type="email" class="form-control my-2" id="floatingInput" placeholder="E-mail"/>
                    </div>

                    <div className="form-floating">
                        <input type="password" class="form-control my-2" id="floatingPassword" placeholder="oi"/>
                    </div>

                    <button class="w-100 btn btn-lg btn-login" type="submit">Sign in</button>
                    <div className="mgs-login text-black text-center mx-2">
                        <span><strong>Aí sim!</strong>Você está conectado! &#128077;</span>
                        <span><strong>Ops!</strong>Verifique se a senha ou e-mail estão corretos &#128078;</span>
                    </div>

                    <div className="opcoes-login mt-3 text-center">
                        <a href="#" className="mx-2">Quero recuperar minha senha</a>
                        <span>&#9733;</span>
                        <a href="#" className="mx-2">Quero me cadastrar</a>
                    </div>
                    
                    <p className="mt-5 mb-3 text-muted">&copy; EMPRESA EXEMPLO LTDA 2020–2021</p>
                </form>
            </main>
        </div>
    )
}

export default Login;