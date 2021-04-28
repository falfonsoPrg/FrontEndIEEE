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
                description: "This day was good shidoris bicos ..."
            },
            {
                image: "/images/banner2.png",
                name: "IEEE PICTURE",
                description: "The IEEE participated in ..."
            },
            {
                image: "/images/banner3.jpg",
                name: "IEEE PICTURE",
                description: "The Mission of the IEEE branch in the university the forest is ..."
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
                                <Button outline color="success" >Add Event <AddAPhotoIcon/></Button>
                            </div>

                        </Col>
                        <Col sm="6">
                            <div align="center">
                                <h1>Events Chapter Computer</h1>
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
