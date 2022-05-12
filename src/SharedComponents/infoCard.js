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
 
  //verificar los props de counselor presidente y vice presidente
  const verification = () => {
    if (!props.ImgPresident && !props.descriptionPresident && !props.emailPresident) {
      return false
    } else if (!props.ImgCounselor && !props.descriptionCounselor && !props.emailCounselor) {
      return false
    } else if (!props.ImgVicePresident && !props.descriptionVicePresident && !props.emailVicePresident) {
      return false
    } else {
      return true
    }
  }
  console.log(props.descriptionVicePresident)
    

    
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
            <Card imageHeight="230" imagePath={props.ImgCounselor ? props.ImgCounselor : "assets/prueba.png"} imageTitle="Counselor" cardTitle="Counselor" cardDescription={props.firstNameCounselor  + props.firstNameCounselor ? "Name: "+  props.firstNameCounselor  + " "+props.firstNameCounselor : "Name: No name " + props.lastNameCounselor ? props.lastNameCounselor : ""}  cardEmail={props.emailCounselor ? "Email: " + props.emailCounselor : "Email: No email  "} />
          </Grid>
          <Grid item xs={4}>
            <Card imageHeight="230" imagePath={props.ImgPresident ? props.ImgPresident : "assets/prueba.png"} imageTitle="President" cardTitle="President" cardDescription={props.firstNamePresident + props.lastnamePresident ? "Name: "+  props.firstNamePresident +" " + props.lastNamePresident : "Name: No name"} cardEmail={props.emailPresident ? "Email: " +  props.emailPresident : "Email:  No email "} />
          </Grid>
          <Grid item xs={4}>
            <Card imageHeight="230" imagePath={props.ImgVicePresident ? props.ImgVicePresident : "assets/prueba.png"} imageTitle="vice-president" cardTitle="Vice President" cardDescription={props.firstNameVicePresident + props.lastNameVicePresident ? "Name: "+  props.firstNameVicePresident + " " + props.lastNameVicePresident : "Name: No name "}  cardEmail={props.emailVicePresident ? "Email: " +  props.emailVicePresident : "Email  :  No email "} />
          </Grid>  
        </Grid>
      </div>
  );

}