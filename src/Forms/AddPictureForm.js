import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import { NavLink, withRouter } from 'react-router-dom';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

class AddPictureForm extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            name:'',
            description: '',
            id_chapter: 0,
            acknowledgement: 'n',
            id_associate: 0,
            id_event: 0,
            picture: '' 

        }
    }

    

    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }

    changeHandler = e => 
    {
        this.setState({[e.target.name]: e.target.value})
    } 

    submitHandler = e =>
    {
        e.preventDefault();
        console.log(this.state)
    }

    render()
    {
        const { name, description, id_chapter, acknowledgement, id_associate, id_event, picture } = this.state;
        return(
            <Container fluid>
                <br/>
                <Row>
                    <Col sm="4"></Col>
                    <Col sm="4">
                        <Form onSubmit={this.submitHandler}>
                            <FormGroup>
                                <Label for="exampleEmail">Nombre</Label>
                                <Input type="text" name="text" id="text" value={name} onChange={this.changeHandler} placeholder="Nombre de la Imagen" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText">Descripción</Label>
                                <Input type="textarea" value={description}  name="text" id="exampleText"  onChange={this.changeHandler}/>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleSelect" sm={2}>Evento</Label>
                                <Col sm={10}>
                                <Input type="select" name="select" value={id_event}  id="exampleSelect">
                                    <option value="0">Ninguno</option>
                                    <option value="1">Evento 2</option>
                                    <option value="2">Evento 3</option>
                                    <option value="3">Evento 4</option>
                                    <option value="4">Evento 5</option>
                                </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleFile">Agregar Imagen</Label>
                                <Input type="file" value={picture} name="picture" id="exampleFile" onChange={this.changeHandler} />
                                <FormText color="muted">
                                ¡Agrega la nueva imagen a la galería!
                                </FormText>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                <Input type="checkbox" value={acknowledgement} onChange={this.changeHandler}  />{' '}
                                ¿Esta imagen es un Reconocimiento o Logro?
                                </Label>
                            </FormGroup>
                            <br/>
                            <Button color="success">Agregar imagen <AddIcon/></Button>
                            <br/>
                        </Form>
                            <NavLink to="/Capitulos/Galeria/:chapter">
                            <Button color="danger">Cancelar <HighlightOffIcon/></Button>
                            </NavLink>
                        
                    </Col>
                    <Col sm="4"></Col>
                </Row>
            </Container>
        );
    }
}
 
AddPictureForm = withRouter(AddPictureForm)
export default AddPictureForm;