import React, { Component,useEffect, useState} from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import Timeline from '@material-ui/lab/Timeline';
import Gallery from './NewGallery';
import CronologyArea from './CronologyArea';
import { Button } from 'reactstrap';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';


export default function GalleryArea(props) {
    const [thegallery, setTheGallery] = React.useState([
        {
            name: "name",
            path: "/images/banner1.jpg",
            description: "Había una vez asdsadsa"
        },
        {
            name: "name",
            path: "/images/banner2.jpg",
            description: "Había una vez asdsadsa"
        },
        {
            name: "name",
            path: "/images/banner3.jpg",
            description: "Había una vez asdsadsa"
        },
        {
            name: "name",
            path: "/images/banner2.jpg",
            description: "Había una vez asdsadsa"
        },
        {
            path: "/images/banner3.jpg",
            description: "Había una vez asdsadsa"
        },
        {
            path: "/images/banner2.jpg",
            description: "Había una vez asdsadsa"
        },
        {
            path: "/images/banner3.jpg",
            description: "Había una vez asdsadsa"
        }]);
    const [thegallery2, setThegallery2] =React.useState([]) ;
    useEffect(() => {  
    
        axios.get(process.env.REACT_APP_ENDPOINT+props.chapter+'/Galleries/', {})
          .then(
            (res) => {
                setThegallery2(res.data.response)
            }
          ).catch((err) => {
            console.log(err)
          }
          )
    },[]);
    console.log(thegallery2)
    /*
    const myGallery = thegallery2.map(gallery => {
        return (
            <Col sm="3">
                <Gallery gallery={gallery}></Gallery>
                <br></br>
            </Col>
        )
    })*/
    const myGallery2 = thegallery.map(gallery => {
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
                            <h1>Gallery Chapter {props.chapter}</h1>
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

