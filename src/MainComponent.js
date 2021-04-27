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
          title: "Mission",
          subtitle: "IEEE",
          description: "The Mission of the IEEE branch in the university the forest is ..."
        },
        {
          image: "/images/IeeeVision.jpg",
          title: "Vision",
          subtitle: "IEEE",
          description: "The vision of the IEEE branch at the university el bosque is ..."
        },
        {
          image: "/images/IeeeObjetivos.jpg",
          title: "Objectives",
          subtitle: "IEEE",
          description: "The objectives of the IEEE branch at El Bosque University are ..."
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
      <div align="center"><h1>IEEE Branch Gallery</h1>
      </div>
      <Container fluid>
        <Row>
          <Col lg="3"></Col>
          <Col lg="6"><GaleriaRama></GaleriaRama></Col>
          <Col lg="3"></Col>
        </Row>
        <div align="center"><h1>Board of Directors</h1></div>
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
