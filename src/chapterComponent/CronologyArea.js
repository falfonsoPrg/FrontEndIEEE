import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Achivements from './Achivements';
import Cronology from './Cronology';
import Timeline from '@material-ui/lab/Timeline';

class CronologyArea extends Component
{
    constructor()
    {
        super();
        this.state = {
        cronology: [
            {
                time: "11/12/2020",
                activity: "IEEE PICTURE1",
            },
            {
                time: "11/12/2020",
                activity: "IEEE PICTURE2",
            },
            {
                time: "11/12/2020",
                activity: "IEEE PICTURE3",
            }
        ]
        }
    }


    render()
    {
        let myCronology = this.state.cronology.map(crono=>{
            return(
              <Col sm="12">
                <Cronology crono={crono}></Cronology>
              </Col>
            )
        })
        return(
            <div>
                <Container fluid>
                    <Row>
                        <br/>
                        <React.Fragment>
                        <Timeline align="alternate">
                            {myCronology}
                        </Timeline>
                        </React.Fragment>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default CronologyArea;