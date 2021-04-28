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
                  <h5>Problems logging in?</h5>
                  <Form.Text className="text-muted">
                    <p className="recover-password-description">
                    Enter the email address associated with your
                     account
                    </p>
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email address" />
                </Form.Group>
                <Button className="btn-recover-password" type="submit">
                  Send link
                </Button>
                <br></br>
                <hr></hr>
                <Form.Group>
                  <p>
                    Not registered? <a href="/">Sign up</a>
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
