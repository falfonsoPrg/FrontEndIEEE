import React, {Component} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
  

class Events extends Component
{
    constructor(props)
    {
        super(props);
    }

    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }

    render()
    {
        return(
            <div>
                <Card>
                    <CardImg top width="100%" src="/images/banner1.jpg" />
                    <CardBody>
                    <CardTitle>{this.props.event.nombre}</CardTitle>
                    <CardSubtitle>{this.props.event.description}</CardSubtitle>
                    <Button outline color="success" >Editar <EditIcon/></Button>
                    <Button outline color="danger">Eliminar <DeleteIcon/></Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
export default Events;