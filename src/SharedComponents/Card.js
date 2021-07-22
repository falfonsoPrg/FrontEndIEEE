import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,CardActionArea,CardContent,CardMedia,Typography} from '@material-ui/core/';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.imageAlt ? props.imageAlt : "Default alt"}
          height={props.imageHeight ? props.imageHeight : "140"}
          image={props.imagePath ? props.imagePath : "assets/defaultImage.jpg"}
          title={props.imageTitle ? props.imageTitle : "Default title"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.cardTitle ? props.cardTitle : "Default title"}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{textAlign: "justify"}}>
            {props.cardDescription ? props.cardDescription : "Default description"}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.cardEmail ? props.cardEmail : ""}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}
