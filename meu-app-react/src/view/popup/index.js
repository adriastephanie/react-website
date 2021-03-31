import React, { Fragment, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './popup.css';

function ModalEx() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Modal
        </Button>

        
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Experimento 1</Modal.Title>
          </Modal.Header>
          <Modal.Body>Quem é você?</Modal.Body>
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

         
          
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Finalizar
            </Button>
          </Modal.Footer>
        </Modal>

        
      </>
    );
  }
  
export default ModalEx;
