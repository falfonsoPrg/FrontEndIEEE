import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/password.css";
import lock from "../img/lock.svg";

class Password extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="login-password-form">
              <Form>
                <Form.Group>
                  <img className="lock-img" alt="lock" src={lock} />
                </Form.Group>

                <Form.Group>
                  <h5>¿Problemas para iniciar sesion?</h5>
                  <Form.Text className="text-muted">
                    <p className="recover-password-description">
                      Escribe la dirección de correo electrónico asociado a tu
                      cuenta
                    </p>
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Correo Eletrónico" />
                </Form.Group>
                <Button className="btn-recover-password" type="submit">
                  Enviar enlace
                </Button>
                <br></br>
                <hr></hr>
                <Form.Group>
                  <p>
                    ¿No estas registrado? <a href="/">Registrate</a>
                  </p>
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Password;
