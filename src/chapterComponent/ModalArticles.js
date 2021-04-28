import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Component } from 'devextreme-react/core/component';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ArticlesArea from './ArticlesArea';


class ModalArticles extends Component{


  state = {
    modalIsOpen: false
  }


  toggleModal = (e) =>
  {
    this.setState({
        modalIsOpen: ! this.state.modalIsOpen
    })
  }

  render(){
    return (
      <div>
        <Modal isOpen={this.state.modalIsOpen} toggle={this.toggleModal.bind(this)}>
          <ModalHeader>Articles Chapter Computer</ModalHeader>
            <ModalBody>
              <ArticlesArea/>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleModal.bind(this)}>Salir<ExitToAppIcon/></Button>
            </ModalFooter>
        </Modal>
      </div>
    );
  }
}


export default ModalArticles;
