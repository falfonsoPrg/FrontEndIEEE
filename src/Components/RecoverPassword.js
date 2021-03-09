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
            <div className="login-form">
              <Form noValidate  onSubmit={this.handle}>
                <h4 className="title-login">Recuperar contraseña</h4>
                <Form.Group controlId="formBasicEmail">
                  <p> ingresa tu correo para recuperar la contraseña </p>
                  <div>
                    {/* <img src= '/images/RecoveryPass.png' width= "300"></img> */}
                  </div>
                  <Form.Label className="login-label">
                    Correo Electónico
                  </Form.Label>
                  <Form.Control type="email" placeholder="Ingrese Email" /> 
                </Form.Group>
                <div>
                  
                <Button id="btn-cancel" variant="primary" type="submit">
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