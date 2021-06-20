import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Timeline from '@material-ui/lab/Timeline';
import Gallery from './NewGallery';
import CronologyArea from './CronologyArea';
import { Button } from 'reactstrap';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';
class GalleryArea extends Component {
    constructor() {
        super();
        this.state = {
            thegallery: [
                {
                    title:"Title",
                    image: "/images/banner1.jpg",
                    description: "Había una vez asdsadsa"
                },
                {
                    title:"Title",
                    image: "/images/banner2.jpg",
                    description: "Había una vez asdsadsa"
                },
                {
                    title:"Title",
                    image: "/images/banner3.jpg",
                    description: "Había una vez asdsadsa"
                },
                {
                    title:"Title",
                    image: "/images/banner2.jpg",
                    description: "Había una vez asdsadsa"
                },
                {
                    image: "/images/banner3.jpg",
                    description: "Había una vez asdsadsa"
                },
                {
                    image: "/images/banner2.jpg",
                    description: "Había una vez asdsadsa"
                },
                {
                    image: "/images/banner3.jpg",
                    description: "Había una vez asdsadsa"
                }
            ],
            thegallery2: [{}]
        }
    }
    componentDidMount() {
        axios.get(process.env.REACT_APP_ENDPOINT + '/galleries/')
            .then((res) => {
                this.setState.thegallery2 = res.data.response;
                console.log(this.state.thegallery2);
                console.log(res.data.response);
            },

            ).catch((err) => {
                console.log(err)
            }
            )
    }


    render() {
        let myGallery = this.state.thegallery.map(gallery => {
            return (
                <Col sm="3">
                    <Gallery gallery={gallery}></Gallery>
                    <br></br>
                </Col>
            )
        })
        return (
            <div>
                <Container fluid>
                    <br />
                    <Row>

                        <Col sm="3">
                            <div align="center">
                                <NavLink to="/Capitulos/Galeria/Agregar/:chapter">
                                    <Button outline color="success" >Add Image <AddAPhotoIcon /></Button>
                                </NavLink>
                            </div>

                        </Col>
                        <Col sm="6">
                            <div align="center">
                                <h1>Gallery Chapter Computer</h1>
                            </div>
                        </Col>
                        <Col sm="3">

                        </Col>
                    </Row>
                    <Row>
                        <Col sm="3">
                            <h2>IEEE timeline</h2>
                            <CronologyArea />
                        </Col>
                        <Col sm="9">
                            <Row>
                                <br />
                                {myGallery}

                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
GalleryArea = withRouter(GalleryArea)
export default GalleryArea;
