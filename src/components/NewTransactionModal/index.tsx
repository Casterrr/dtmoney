import React from "react";

import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';

import { Container } from "./styles";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function NewTransactionModal(props: NewTransactionModalProps) {
    return (
        <Modal 
          isOpen={props.isOpen}
          onRequestClose={props.onRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
            <button 
                type="button" 
                onClick={props.onRequestClose} 
                className="react-modal-close"
            >

                <img src={closeImg} alt="Fechar modal" />
            
            </button>

            <Container >
                <h2>Cadastrar transação</h2>

                <input
                    placeholder="Título"
                />

                <input
                    type="number"
                    placeholder="Valor"
                />

                <input
                    placeholder="submit"
                />

                <button type="submit">
                    Cadastrar
                </button>

            </Container>


        </Modal>
    )
}