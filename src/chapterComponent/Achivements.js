import React, {Component} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';


class Achivements extends Component
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
                    <CardTitle>{this.props.achive.nombre}</CardTitle>
                    <CardSubtitle>{this.props.achive.description}</CardSubtitle>
                    <Button outline color="success" >Edit <EditIcon/></Button>
                    <Button outline color="danger">Delete <DeleteIcon/></Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
export default Achivements;
