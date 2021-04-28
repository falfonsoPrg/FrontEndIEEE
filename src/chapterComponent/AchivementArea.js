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
                                <Button outline color="success" >Add Achievements <AddAPhotoIcon/></Button>
                            </div>

                        </Col>
                        <Col sm="6">
                            <div align="center">
                                <h1>Computer Chapter Achievements</h1>
                            </div>
                        </Col>
                        <Col sm="3">
                            <div align="center">
                                <Button outline color="primary" onClick={toggleModal} >Check out our articles! <VisibilityIcon/></Button>
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
