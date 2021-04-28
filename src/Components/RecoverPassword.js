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
                <h4 className="title-recoverPass">Recover password</h4>
                <br/>
                <Form.Group controlId="formBasicEmail">
                  <p> We want to help you recover your password <br/>
                  Please write your email address to be able to send you a code
                  </p>
                  <br/>
                  <Form.Label className="Recover-mail">
                    Email address
                    <br/>
                  </Form.Label>
                  <Form.Control type="email" placeholder="Enter Email" width="2"/>
                </Form.Group>
                <div>
                <br/>
                <Button id="btn-cancel" variant="primary" href="/Login">
                  cancel
                </Button>

                <Button id="btn-submit" variant="primary" type="submit">
                  accept
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
