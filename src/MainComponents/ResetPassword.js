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

export default function ResetPassword(props) {
    const classes = useStyles();
    const [password, setPassword] = useState("")
    const [repeatedPassword, setRepeatedPassword] = useState("")
    const [success, setSuccess] = useState(false)

    const submit = (e) => {
        e.preventDefault()
        if(password && props.member && password !== "" && password === repeatedPassword){
            props.handleLoader(true)
            axios.put(process.env.REACT_APP_ENDPOINT + "/members/"+props.member.member_id+"/changePassword",{
                password: password,
            })
            .then((response) => {
                props.openSnackbarByType(true,"success", "You password has been changed")
                props.handleLoader(false)
                setSuccess(true)
            }).catch((e) => {
                props.openSnackbarByType(true,"error", e.response.data.error !== undefined ? e.response.data.error : "The password couldn't be changed ")
                props.handleLoader(false)
            })
        }
    }
    

    
    return (
        <Container maxWidth="sm" style={{marginTop: 60}}>
            {success && (<Redirect to="/" /> )}
            <Paper elevation={3}>
                <Grid container spacing={3}>
                    <Grid item xs>
                    </Grid>
                    <Grid item xs>
                        <Box fontSize={20} textAlign="center">Please create a new password</Box>
                        <form className={classes.form} noValidate autoComplete="off">
                            <TextField id="password" label="Password *" type="password" variant="outlined" value={password}  onChange={(e) => setPassword(e.target.value)} />
                            <TextField id="repeatPassword" label="Repeat Password *" type="password" variant="outlined" value={repeatedPassword} onChange={(e) => setRepeatedPassword(e.target.value)} />
                        </form>
                        <div className={classes.button}>
                            <Button variant="contained" color="primary" onClick={(e) => submit(e)}>
                                Change password
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
