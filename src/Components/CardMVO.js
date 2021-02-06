import React, {Component} from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';


class CardMVO extends Component
{
  constructor(props)
  {
    super(props);
  }

  render (){
    return(
    <div>
      <Card>
        <CardImg top width="100%" height="300px" src={this.props.mvos.image} alt="Card image cap" />
        <CardBody>
          <CardTitle><h4>{this.props.mvos.title}</h4></CardTitle>
          <CardSubtitle>{this.props.mvos.subtitle}</CardSubtitle>
          <CardText>{this.props.mvos.description}</CardText>
        </CardBody>
      </Card>
    </div>
    );
  }
}

export default CardMVO;