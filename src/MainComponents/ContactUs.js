import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InfoCard from '../SharedComponents/infoCard'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    control: {
        padding: theme.spacing(2),
    },
    title: {
        color: "black",
        marginBottom: '0'
    },
    divider: {
        backgroundColor: theme.palette.primary.main,
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(3),

    }
}));

const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
};

export default function ContactUs() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.title} variant="h3" component="h2" gutterBottom >
                            Contact us
                      </Typography>
                        <Divider className={classes.divider} />
                        <Typography variant="body1" gutterBottom >
                            Welcome to the contact page of the IEEE Universidad el Bosque group.
                            Next we will introduce you to the presidents of each chapter
                            The most optimal way, contact them by email.
                            We hope it will be of your help.
                      </Typography>
                    </Paper>
                </Grid>
            </Grid>
            <InfoCard title="Chapter Computer"
                ImgCounselor="assets/ClaraComputer.jpg"
                descriptionCounselor="Name  :  Clara Nensthiel Zorro"
                emailCounselor="Email  :  eventos.ingenierias@unbosque.edu.co "
                ImgPresident="assets/AndresComputer.jpg"
                descriptionPresident="Name  :  Andres Galvis Bolivar"
                emailPresident="Email  :  agalvisb@unbosque.edu.co "
                ImgVicePresident="assets/CristianComputer.jpg"
                descriptionVicePresident="Name  :  Cristian David Sanchez "
                emailVicePresident="Email  :  cdsanchezm@unbosque.edu.co "
            />

<InfoCard title="Chapter SSIT"
                ImgCounselor="assets/IsabelSSIT.jpg"
                descriptionCounselor="Name  :  Clara Nensthiel Zorro"
                emailCounselor="Email  :  eventos.ingenierias@unbosque.edu.co "
                ImgPresident="assets/YinedSSIT.jpg"
                descriptionPresident="Name  :  Yined Carolina Caicedo"
                emailPresident="Email  :  ycaicedov@unbosque.edu.co "
                ImgVicePresident="assets/CristianComputer.jpg"
                descriptionVicePresident="Name  :  Cristian David Sanchez "
                emailVicePresident="Email  :  cdsanchezm@unbosque.edu.co "
            />
          <InfoCard></InfoCard>
        </div>

    );
}

