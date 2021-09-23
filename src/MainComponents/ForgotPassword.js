import {React, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Paper, Container, Grid, Button, Box } from '@material-ui/core';
import { Redirect } from 'react-router';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    form: {
        '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        },
    },
    button: {
        margin: theme.spacing(1),
    },
}));

export default function ForgotPassword(props) {
    const classes = useStyles();
    const [emailError, setEmailError] = useState(false)
    const [emailErrorMessage, setEmailErrorMessage] = useState("")
    const [email, setEmail] = useState("")
    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    const submit = (e) => {
        e.preventDefault()
        props.handleLoader(true)
        
        if(email!==""){
            axios.post(process.env.REACT_APP_ENDPOINT + "/auth/recoverPassword",{
                email: email,
            })
            .then((response) => {
                props.openSnackbarByType(true,"success", "You password has been changed, please see your email")
                props.handleLoader(false)
            }).catch((e) => {
                props.openSnackbarByType(true,"error", e.response.data.error !== undefined ? e.response.data.error : "The email you supplied is not an active member of the chapter ")
                props.handleLoader(false)
            })
        }else{
            props.openSnackbarByType(true, "error", emailError ? "Please set a valid email" : "Fill the data")
            props.handleLoader(false)
        }
    }
    const handleEmailChange = (e) => {
        setEmailError(!validateEmail(e.target.value))
        setEmail(e.target.value)
        if(emailError === true){
            setEmailErrorMessage("Please set a valid email");
        }else{
            setEmailErrorMessage("")
        }
    }
    
    return (
        <Container maxWidth="sm" style={{marginTop: 60}}>
            {props.auth && (<Redirect to="/" /> )}
            <Paper elevation={3}>
                <Grid container spacing={3}>
                    <Grid item xs>
                    </Grid>
                    <Grid item xs>
                        <Box fontSize={20} textAlign="center">Recover password</Box>
                        <form className={classes.form} noValidate autoComplete="off">
                            <TextField id="email" label="Email" type="email" variant="outlined" error={emailError} onChange={(e) => handleEmailChange(e)} helperText={emailErrorMessage}/>
                        </form>
                        <div className={classes.button}>
                            <Button variant="contained" color="primary" onClick={(e) => submit(e)}>
                                Send email
                            </Button>
                        </div>
                    </Grid>
                    
                    <Grid item xs>
                    </Grid>
                </Grid>


            </Paper>
        </Container>
    )
}
