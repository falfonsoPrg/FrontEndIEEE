import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Events from './Events';
import { Button } from 'reactstrap';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

class EventsArea extends Component
{
    constructor()
    {
        super();
        this.state = {
        events: [
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
        let myEvent = this.state.events.map(event=>{
            return(
              <Col sm="6">
                <Events event={event}></Events>
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
                                <Button outline color="success" >Agregar Evento <AddAPhotoIcon/></Button>
                            </div>
                            
                        </Col>
                        <Col sm="6">
                            <div align="center">
                                <h1>Eventos Capítulo Computer</h1>
                            </div>
                        </Col>
                        <Col sm="3">
                            
                        </Col>
                    </Row>
                    <Row>
                        <br/>
                    {myEvent}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default EventsArea;