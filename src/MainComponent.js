import React, {Component} from 'react';
import CardMVO from './Components/CardMVO'
import InfoUEB from './Components/InfoUEB'
import GaleriaRama from './Components/GaleriaRama'
import Banner from './Components/Banner';
import JuntaDirectiva from './Components/JuntaDirectiva';
import {Container, Row, Col} from 'reactstrap';


class MainComponent extends Component
{
  constructor()
  {
    super();
    this.state = {
      misvisobj: [
        {
          image: "/images/IeeeMision.jpg",
          title: "Misión",
          subtitle: "IEEE",
          description: "La Misión de la rama IEEE en la universidad el bosque es..."
        },
        {
          image: "/images/IeeeVision.jpg",
          title: "Visión",
          subtitle: "IEEE",
          description: "La visión de la rama IEEE en la universidad el bosque es..."
        },
        {
          image: "/images/IeeeObjetivos.jpg",
          title: "Objetivos",
          subtitle: "IEEE",
          description: "Los objetivos de la rama IEEE en la universidad el bosque son..."
        }
      ]
    }
  }

  render(){
    let cardMVO = this.state.misvisobj.map(mvos=>{
      return(
        <Col sm="4">
          <CardMVO mvos={mvos}></CardMVO>
        </Col>
      )
    })
    return (
      <div>
      
      <Banner></Banner>
      <br></br>
      <Container fluid>
        <Row>
          {cardMVO}
        </Row>
      </Container>
      <br></br>
      <div align="center"><InfoUEB></InfoUEB></div>
      <div align="center"><h1 >Galería Rama IEEE</h1>
      </div>
      <Container fluid>
        <Row>
          <Col lg="3"></Col>
          <Col lg="6"><GaleriaRama></GaleriaRama></Col>
          <Col lg="3"></Col>
        </Row>
        <div align="center"><h1 >Junta Directiva</h1></div>
        <Row>
          <Col lg="1"></Col>
          <Col lg="10"><JuntaDirectiva></JuntaDirectiva></Col>
          <Col lg="1"></Col>
        </Row>
      </Container>
      
      
        </div>
      );
    }
}
export default MainComponent;