import React, {  Component  } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/login.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  NavLink
} from "react-router-dom";

const axios = require("axios");

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      usuario: "",
      contrasena:"",
      redirect: false
    };
    this.handle = (event) => {
      event.preventDefault();
      event.stopPropagation();
      axios.post(process.env.REACT_APP_ENDPOINT+'/api/auth/login',{
        email: this.state.usuario,
        password: this.state.contrasena
      }).then( (response) => {
        localStorage.setItem('usuario',JSON.stringify(response.data.member))
        localStorage.setItem('token',response.data.text)
        this.setState({redirect:true})
      }).catch( (err) => {
        alert(err.response.data.error)
      })
    }
  }
  render() {
    const {redirect} = this.state
    if (redirect){return <Redirect to='/'/>;
    }
    return (
      <Router>
      <Container fluid  >
        <Row>
          <Col >
          <div align="center">
            <div className="login-form">
              <Form noValidate  onSubmit={this.handle}>
                <h4 className="title-login">Login</h4>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="login-label">
                    Email address
                  </Form.Label>
                  <Form.Control type="email" placeholder="Enter Email" onChange = {(nombreDeUsuario) =>this.setState({usuario:nombreDeUsuario.target.value}) } />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label className="login-label">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    onChange = {(agregarContrasena) =>this.setState({contrasena:agregarContrasena.target.value}) }
                  />

                 <a className="nav-link" href="/RecoverPassword">Forgot password?</a>
                 <Redirect to="/Login">
                  </Redirect>

                </Form.Group>

                <Button id="btn-submit" variant="primary" type="submit">
                    Sign In
                </Button>
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

export default Login;
