import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";


import "../styles/ContactUs.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class ContactUs extends Component {
    render() {
        return (
            <Router>
                <main className="container">
                    <div className = "contactUScontainer">
                    <div className="basicInformation">
                        <div className="order">
                            <h1 className="topTitle">Contact us</h1>
                            <p className="topInformation">Welcome to the contact page of the IEEE Universidad el Bosque group.
                             Next we will introduce you to the presidents of each chapter
                             The most optimal way, contact them by email.
                                 We hope it will be of your help.</p>
                        </div>
                    </div>
                    <div className="cards">
                    <h1 className = "tituloCapitulo">Chapter Computer</h1>
                        <ul className="slider">
                            <li id="presidenteComputer">
                                <div className="card">
                                    <img className="iconos" src="/images/presidents/presidente.png" ></img>
                                    <h5 className="user-name">Andres Galvis</h5>
                                    <h6 className="user-rol">Chair Chapter Computer</h6>
                                    <h6 className="user-mail">lecardenas@unbosque.edu.co</h6>
                                    <br></br>
                                </div>
                            </li>
                            <li id="vice-presidenteComputer">
                                <div className="card">
                                    <img className="iconos" src="/images/presidents/vicepresidente.png" ></img>
                                    <h5 className="user-name">Cristian Sanchez</h5>
                                    <h6 className="user-rol">Vice-Chair Chapter Computer</h6>
                                    <h6 className="user-mail">lecardenas@unbosque.edu.co</h6>
                                    <br></br>
                                </div>
                            </li>
                            <li id="secretarioComputer">
                                <div className="card">
                                    <img className="iconos" src="/images/presidents/secretario.png" ></img>
                                    <h5 className="user-name">Esteban Cardenas</h5>
                                    <h6 className="user-rol">Secretary Chapter Computer</h6>
                                    <h6 className="user-mail">lecardenas@unbosque.edu.co</h6>
                                    <br></br>
                                </div>
                            </li>
                            <li id="tesoreroComputer">
                                <div className="card">
                                    <img className="iconos" src="/images/presidents/tesorero.png" ></img>
                                    <h5 className="user-name">Miguel Mendieta</h5>
                                    <h6 className="user-rol">Treasurer Chapter Computer</h6>
                                    <h6 className="user-mail">lecardenas@unbosque.edu.co</h6>
                                    <br></br>
                                </div>
                            </li>
                        </ul>
                        <ul class="menu">
                            <li>
                                <a href="#presidenteComputer">1</a>
                            </li>
                            <li>
                                <a href="#vice-presidenteComputer">2</a>
                            </li>
                            <li>
                                <a href="#secretarioComputer">3</a>
                            </li>
                            <li>
                                <a href="#tesoreroComputer">4</a>
                            </li>
                        </ul>

                    </div>
                    <div className="cards">
                    <h1 className = "tituloCapitulo">Chapter RAS</h1>
                        <ul className="slider">
                            <li id="presidenteRAS">
                                <div className="card">
                                    <img className="iconos" src="/images/presidents/presidente.png" ></img>
                                    <h5 className="user-name">Andres Galvis</h5>
                                    <h6 className="user-rol">Chair Chapter RAS</h6>
                                    <h6 className="user-mail">lecardenas@unbosque.edu.co</h6>
                                    <br></br>
                                </div>
                            </li>
                            <li id="vice-presidenteRAS">
                                <div className="card">
                                    <img className="iconos" src="/images/presidents/vicepresidente.png" ></img>
                                    <h5 className="user-name">Cristian Sanchez</h5>
                                    <h6 className="user-rol">Vice-Chair Chapter RAS</h6>
                                    <h6 className="user-mail">lecardenas@unbosque.edu.co</h6>
                                    <br></br>
                                </div>
                            </li>
                            <li id="secretarioRAS">
                                <div className="card">
                                    <img className="iconos" src="/images/presidents/secretario.png" ></img>
                                    <h5 className="user-name">Esteban Cardenas</h5>
                                    <h6 className="user-rol">Secretary Chapter RAS</h6>
                                    <h6 className="user-mail">lecardenas@unbosque.edu.co</h6>
                                    <br></br>
                                </div>
                            </li>
                            <li id="tesoreroRAS">
                                <div className="card">
                                    <img className="iconos" src="/images/presidents/tesorero.png" ></img>
                                    <h5 className="user-name">Miguel Mendieta</h5>
                                    <h6 className="user-rol">Treasurer Chapter RAS</h6>
                                    <h6 className="user-mail">lecardenas@unbosque.edu.co</h6>
                                    <br></br>
                                </div>
                            </li>
                        </ul>
                        <ul class="menu">
                            <li>
                                <a href="#presidenteRAS">1</a>
                            </li>
                            <li>
                                <a href="#vice-presidenteRAS">2</a>
                            </li>
                            <li>
                                <a href="#secretarioRAS">3</a>
                            </li>
                            <li>
                                <a href="#tesoreroRAS">4</a>
                            </li>
                        </ul>

                    </div>
                    <div className="cards">
                    <h1 className = "tituloCapitulo">Chapter IAS</h1>
                        <ul className="slider">
                            <li id="presidenteIAS">
                                <div className="card">
                                    <img className="iconos" src="/images/presidents/presidente.png" ></img>
                                    <h5 className="user-name">Andres Galvis</h5>
                                    <h6 className="user-rol">Chair Chapter IAS</h6>
                                    <h6 className="user-mail">lecardenas@unbosque.edu.co</h6>
                                    <br></br>
                                </div>
                            </li>
                            <li id="vice-presidenteIAS">
                                <div className="card">
                                    <img className="iconos" src="/images/presidents/vicepresidente.png" ></img>
                                    <h5 className="user-name">Cristian Sanchez</h5>
                                    <h6 className="user-rol">Vice-chair Chapter IAS</h6>
                                    <h6 className="user-mail">lecardenas@unbosque.edu.co</h6>
                                    <br></br>
                                </div>
                            </li>
                            <li id="secretarioIAS">
                                <div className="card">
                                    <img className="iconos" src="/images/presidents/secretario.png" ></img>
                                    <h5 className="user-name">Esteban Cardenas</h5>
                                    <h6 className="user-rol">Secretary Chapter IAS</h6>
                                    <h6 className="user-mail">lecardenas@unbosque.edu.co</h6>
                                    <br></br>
                                </div>
                            </li>
                            <li id="tesoreroIAS">
                                <div className="card">
                                    <img className="iconos" src="/images/presidents/tesorero.png" ></img>
                                    <h5 className="user-name">Miguel Mendieta</h5>
                                    <h6 className="user-rol">Treasurer Chapter IAS</h6>
                                    <h6 className="user-mail">lecardenas@unbosque.edu.co</h6>
                                    <br></br>
                                </div>
                            </li>
                        </ul>
                        <ul class="menu">
                            <li>
                                <a href="#presidenteIAS">1</a>
                            </li>
                            <li>
                                <a href="#vice-presidenteIAS">2</a>
                            </li>
                            <li>
                                <a href="#secretarioIAS">3</a>
                            </li>
                            <li>
                                <a href="#tesoreroIAS">4</a>
                            </li>
                        </ul>

                    </div>
                    </div>
                </main>
            </Router>
        );
    }
}

export default ContactUs;
