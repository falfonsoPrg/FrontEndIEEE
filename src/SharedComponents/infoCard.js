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
  const verificationPresident = () => {
    if (!(props.ImgPresident + props.firstNamePresident + props.lastNamePresident + props.emailPresident)) {
      return false
    } 
    return true
  }
  
  const verificationCounselor = () => {
    if (!props.ImgCounselor && !props.firstNameCounselor && !props.lastNameCounselor && !props.emailCounselor) {
      return false
    }
    return true
  }
  const verificationVicePresident = () => {
    if (!props.ImgVicePresident && !props.firstNameVicePresident && !props.lastNameVicePresident && !props.emailVicePresident) {
      return false
    }
    return true
  }
    

    
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <Grid container spacing={3} style={{justifyContent: 'center'}}>
        <Grid item xs={12} >
            <Paper className={classes.paper} style={{textAlign: 'center'}} >
             
              <Typography variant="h2" className={classes.title}>
                
                {props.title ? props.title : "Default Title"}
              </Typography>
              
            </Paper>
          </Grid>
          {
            verificationCounselor() &&
            <Grid item xs={4} >
            <Card imageHeight="230" imagePath={props.ImgCounselor ? props.ImgCounselor : "assets/prueba.png"} imageTitle="Counselor" cardTitle="Counselor" cardDescription={props.firstNameCounselor  + props.firstNameCounselor ? "Name: "+  props.firstNameCounselor  + " "+props.firstNameCounselor : "Name: No name " + props.lastNameCounselor ? props.lastNameCounselor : ""}  cardEmail={props.emailCounselor ? "Email: " + props.emailCounselor : "Email: No email  "} alignTitle={'center'} />
          </Grid>
          }
         {
            verificationPresident() &&
            <Grid item xs={4}>
            <Card imageHeight="230" imagePath={props.ImgPresident ? props.ImgPresident : "assets/prueba.png"} imageTitle="President" cardTitle="President" cardDescription={props.firstNamePresident + props.lastnamePresident ? "Name: "+  props.firstNamePresident +" " + props.lastNamePresident : "Name: No name"} cardEmail={props.emailPresident ? "Email: " +  props.emailPresident : "Email:  No email "} alignTitle={'center'} />
          </Grid>
         }
          {
            verificationVicePresident() &&
            <Grid item xs={4}>
            <Card imageHeight="230" imagePath={props.ImgVicePresident ? props.ImgVicePresident : "assets/prueba.png"} imageTitle="vice-president" cardTitle="Vice President" cardDescription={props.firstNameVicePresident + props.lastNameVicePresident ? "Name: "+  props.firstNameVicePresident + " " + props.lastNameVicePresident : "Name: No name "}  cardEmail={props.emailVicePresident ? "Email: " +  props.emailVicePresident : "Email:  No email "} alignTitle={'center'}/>
          </Grid> 
          }
          
        </Grid>
      </div>
  );

}