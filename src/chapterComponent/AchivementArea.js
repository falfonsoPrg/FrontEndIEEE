import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Achivements from './Achivements';
import { Button } from 'reactstrap';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link } from 'react-router-dom';
import ModalArticles from './ModalArticles';

class AchivementArea extends Component
{
    constructor()
    {
        super();
        this.state = {
        achivements: [
            {
                image: "/images/banner1.jpg",
                name: "IEEE PICTURE",
                description: "Este día fue bien chidoris bicos..."
            },
            {
                image: "/images/banner2.png",
                name: "IEEE PICTURE",
                description: "El IEEE participó en..."
            },
            {
                image: "/images/banner3.jpg",
                name: "IEEE PICTURE",
                description: "La Misión de la rama IEEE en la universidad el bosque es..."
            }
        ]
        }
    }


    render()
    {
        const { toggleModal } = this.props
        let myAchive = this.state.achivements.map(achive=>{
            return(
              <Col sm="6">
                <Achivements achive={achive}></Achivements>
              </Col>
            )
        })
        return(
            <div>
                <Container fluid>
                    <br/>
                    <Row>
                        
                        <Col sm="3">
                            <div align="center">
                                <Button outline color="success" >Agregar Logros <AddAPhotoIcon/></Button>
                            </div>
                            
                        </Col>
                        <Col sm="6">
                            <div align="center">
                                <h1>Logros Capítulo Computer</h1>
                            </div>
                        </Col>
                        <Col sm="3">
                            <div align="center">
                                <Button outline color="primary" onClick={toggleModal} >¡Mira nuestros artículos! <VisibilityIcon/></Button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <br/>
                    {myAchive}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AchivementArea;