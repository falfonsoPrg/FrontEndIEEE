import React,{ useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InfoCard from '../SharedComponents/infoCard'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';

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


export default function ContactUs() {
    const [chapters,setChapter] = React.useState([]);
    
    const getChapters = () => {
        axios.get(process.env.REACT_APP_ENDPOINT +'/chapters/')
        .then(res => {
            setChapter(res.data.response)
            
        })
        .catch(err => {
            console.log(err)
        })
    }
   
    useEffect(() => {
        getChapters();
    }, [])
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
            {
                chapters.map(chapter => {
                    
                    return (
                    <InfoCard title={chapter.chapter_name} 
                    ImgCounselor={chapter.Chapter_Members.filter(member => member.role_id === 3)[0]?.Member.image_path}
                    firstNameCounselor ={chapter.Chapter_Members.filter(member => member.role_id === 3)[0]?.Member.firstname}
                    lastNameCounselor ={chapter.Chapter_Members.filter(member => member.role_id === 3)[0]?.Member.lastname}
                    emailCounselor={chapter.Chapter_Members.filter(member => member.role_id === 3)[0]?.Member.email}
                     
                    ImgPresident={chapter.Chapter_Members.filter(member => member.role_id === 1)[0]?.Member.image_path}
                    firstNamePresident ={chapter.Chapter_Members.filter(member => member.role_id === 1)[0]?.Member.firstname}
                    lastNamePresident ={chapter.Chapter_Members.filter(member => member.role_id === 1)[0]?.Member.lastname}
                    emailPresident={chapter.Chapter_Members.filter(member => member.role_id === 1)[0]?.Member.email}
                    
                    ImgVicePresident={chapter.Chapter_Members.filter(member => member.role_id === 2)[0]?.Member.image_path}
                    firstNameVicePresident ={chapter.Chapter_Members.filter(member => member.role_id === 2)[0]?.Member.firstname}
                    lastNameVicePresident ={chapter.Chapter_Members.filter(member => member.role_id === 2)[0]?.Member.lastname}
                    emailVicePresident={chapter.Chapter_Members.filter(member => member.role_id === 2)[0]?.Member.email}
                    
                    />
                    )
                })

            }
        </div>

    );
}

