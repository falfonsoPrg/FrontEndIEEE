import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Timeline from '@material-ui/lab/Timeline';
import Galery from './Galery';
import CronologyArea from './CronologyArea';
import { Button } from 'reactstrap';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { NavLink, withRouter } from 'react-router-dom';

class GaleryArea extends Component
{
    constructor()
    {
        super();
        this.state = {
        thegalery: [
            {
                image: "/images/banner1.jpg"
            },
            {
                image: "/images/banner2.jpg"
            },
            {
                image: "/images/banner3.jpg"
            },
            {
                image: "/images/banner2.jpg"
            },
            {
                image: "/images/banner3.jpg"
            },
            {
                image: "/images/banner2.jpg"
            },
            {
                image: "/images/banner3.jpg"
            }
        ]
        }
    }

    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }

    render()
    {
        let myGalery = this.state.thegalery.map(galery=>{
            return(
              <Col sm="3">
                <Galery galery={galery}></Galery>
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
                            <NavLink to="/Capitulos/Galeria/Agregar/:chapter">
                                <Button outline color="success" >Agregar Imagen <AddAPhotoIcon/></Button>
                            </NavLink>
                            </div>
                            
                        </Col>
                        <Col sm="6">
                            <div align="center">
                                <h1>Galería Capítulo Computer</h1>
                            </div>
                        </Col>
                        <Col sm="3">
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="3">
                            <h2>Linea de tiempo IEEE</h2>
                        <CronologyArea/>
                        </Col>
                        <Col sm="9">
                            <Row>
                                <br/>
                                {myGalery}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
GaleryArea = withRouter(GaleryArea)
export default GaleryArea;