import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Calendar from 'react-calendar';
import Integrantes from '../Components/JuntaDirectiva'
import { Button } from 'reactstrap';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import 'react-calendar/dist/Calendar.css';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { NavLink, withRouter, Link } from 'react-router-dom';

const axios = require("axios")

class Inicio extends Component
{
    constructor(props){
        super(props);
        this.state = {
            id_chapter: this.props.match.params.chapter
        };

    }
    getChapter=()=>{

        axios.get(process.env.REACT_APP_ENDPOINT+'/api/Chapters/'+this.state.id_chapter+'/getInfo',{
            headers: {
                'auth-token': localStorage.getItem('token'),
            }
        })
      .then((response)=>{
       console.log("Response")
       console.log(response)
      })
      .catch((err) => {console.log(err)})
    }
    render()
    {
        this.getChapter()
        return(
            <Container fluid>
                <br/>
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <div align="center">
                            <h1>General information</h1>
                            <p>Lorem</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <div align="center">
                            <Link to="/Capitulos/Calendario/:chapter">
                                <Calendar local="en-US"/>
                                <Button outline color="success" >Calendar<DateRangeIcon/></Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <br/><br/>
                <Row>
                    <Col lg="1"></Col>
                    <Col sm={12} md={12} lg={10}>
                        <div align="center">
                            <Row>
                                <Col sm="3">
                                <Link to="/Capitulos/AgregarMiembro/:chapter">
                                    <Button outline color="success" ><AddAPhotoIcon/> Add Member </Button>
                                </Link>
                                </Col>
                                <Col sm="6">
                                    <h1>Members</h1>
                                </Col>
                                <Col sm="3">

                                </Col>
                            </Row>
                            <Integrantes/>
                        </div>
                    </Col>
                    <Col lg="1"></Col>
                </Row>
            </Container>
        );
    }

}

export default Inicio;
