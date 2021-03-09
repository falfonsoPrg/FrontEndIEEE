import React, {  Component  } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/RecoverPassword.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



class RecoverPassword extends Component {

  render() {
   
    return (
      <Router>
      <Container fluid  >
        <Row>
          <Col >
          <div align="center">
            <div className="recover-form">
              <Form noValidate  onSubmit={this.handle}>
                <h4 className="title-recoverPass">Recuperar contraseña</h4>
                <br/>
                <Form.Group controlId="formBasicEmail">
                  <p> Queremos ayudarte a recuperar tu contraseña <br/>
                  Por favor escribe tu correo electronico para poder enviarte un codigo
                  </p>
                  <br/>
                  <Form.Label className="Recover-mail">
                    Correo Electónico
                    <br/>
                  </Form.Label>
                  <Form.Control type="email" placeholder="Ingrese Email" width="2"/> 
                </Form.Group>
                <div>
                <br/>
                <Button id="btn-cancel" variant="primary" href="/Login">
                  cancelar
                </Button>

                <Button id="btn-submit" variant="primary" type="submit">
                  Aceptar
                </Button>
              
                </div>
               
                <br></br>
              </Form>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
      </Router>
    );
  }
}

export default RecoverPassword;