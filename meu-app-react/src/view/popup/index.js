import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './popup.css';

const ModalComponent = (props) => {
    const {show, handleClose, title, children} = props
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>Finalizar</Button>

            </Modal.Footer>
        </Modal>
        

    )
}
      

export default ModalComponent;