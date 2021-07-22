import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '../SharedComponents/Card'
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  back: {
    borderRadius: 4,
    '& > *': {
      margin: theme.spacing(1)
    },
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  title: {
    fontSize: '4vh',
    color: 'white',
  }


}));

export default function InfiMediaCard(props) {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <Grid container spacing={3}>
        <Grid item xs={12}>
            <Paper className={classes.paper}>
             
              <Typography variant="h2" className={classes.title}>
                
                {props.title ? props.title : "Default Title"}
              </Typography>
              
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Card imageHeight="230" imagePath={props.ImgCounselor ? props.ImgCounselor : "assets/prueba.png"} imageTitle="Counselor" cardTitle="Counselor" cardDescription={props.descriptionCounselor ? props.descriptionCounselor : "Name  :  name of test advisor"} cardEmail={props.emailCounselor ? props.emailCounselor : "Email  : test advisor email "} />
          </Grid>
          <Grid item xs={4}>
            <Card imageHeight="230" imagePath={props.ImgPresident ? props.ImgPresident : "assets/prueba.png"} imageTitle="President" cardTitle="President" cardDescription={props.descriptionPresident ? props.descriptionPresident : "Name  :  name test chairman "} cardEmail={props.emailPresident ? props.emailPresident : "Email  :  president's test email "} />
          </Grid>
          <Grid item xs={4}>
            <Card imageHeight="230" imagePath={props.ImgVicePresident ? props.ImgVicePresident : "assets/prueba.png"} imageTitle="vice-president" cardTitle="Vice President" cardDescription={props.descriptionVicePresident ? props.descriptionVicePresident : "Name  :  name vice president of test "} cardEmail={props.emailVicePresident ? props.emailVicePresident : "Email  :  vice president's test email "} />
          </Grid>  
        </Grid>
      </div>
  );

}