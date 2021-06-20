import React, { Component } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import {
    Card, CardImg, CardTitle, CardBody, Button } from 'reactstrap';


class Gallery extends Component
 {
    constructor(props)
    {
        super(props);
    }

    state = {
        modalIsOpen: false
    }


    toggleModal()
    {
        this.setState({
            modalIsOpen: ! this.state.modalIsOpen
        })
    }
    render()
    {



        return(
            <div>
                <Card>
                    <a onClick={this.toggleModal.bind(this)}>
                        <CardImg top width="100%" height="150px" src={this.props.gallery.image} />
                    </a>
                    <CardBody >
                    <CardTitle ><Button outline color="danger"><DeleteIcon/> Delete image </Button></CardTitle>
                    </CardBody>
                </Card>
                <Modal isOpen={this.state.modalIsOpen} toggle={this.toggleModal.bind(this)}>
                    <ModalHeader>Image title</ModalHeader>
                    <ModalBody>
                        <img src={this.props.gallery.image} width="100%" height="300px"/>
                        <h5>Image description</h5>
                    </ModalBody>
                    <ModalFooter>

                    <Button color="secondary" onClick={this.toggleModal.bind(this)}>Exit<ExitToAppIcon/></Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
export default Gallery ;
