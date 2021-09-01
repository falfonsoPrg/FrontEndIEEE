import {React, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Paper, Container, Grid, Button, Link, Box } from '@material-ui/core';
import axios from 'axios'
import { Link as RouterLink, Redirect } from 'react-router-dom';


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

export default function Login(props) {
    const classes = useStyles();
    const [emailError, setEmailError] = useState(false)
    const [emailErrorMessage, setEmailErrorMessage] = useState("")

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
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

    const submit = (e) => {
        e.preventDefault()
        props.handleLoader(true)
        if(!emailError && email!==""){
            axios.post(process.env.REACT_APP_ENDPOINT + "/auth/login",{
                email: email,
                password: password
            })
            .then((response) => {
                localStorage.setItem('auth', true)
                props.setAuth(true)

                localStorage.setItem('member', JSON.stringify(response.data.member))
                props.setMember(response.data.member)

                let roles = []
                if(response.data.member.Chapter_Members && response.data.member.Chapter_Members.length > 0){
                    response.data.member.Chapter_Members.forEach(cm => {
                        roles.push(cm.Role)
                    });
                }
                localStorage.setItem('roles', JSON.stringify(roles))
                props.setRoles(roles)

                props.openSnackbarByType(true,"success","Login successfully!")
                props.handleLoader(false)
            }).catch((e) => {
                console.log(e.response.data.error)
                props.openSnackbarByType(true,"error", e.response.data.error !== undefined ? e.response.data.error : "Error while login!")
                props.handleLoader(false)
            })
        }else{
            props.openSnackbarByType(true, "error", emailError ? "Please set a valid email" : "Fill the data")
            props.handleLoader(false)
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
                        <Box fontSize={20} textAlign="center" style={{marginTop: 30}}>Log in</Box>
                        <form className={classes.form} noValidate autoComplete="off" onSubmit={(e) => {alert("test")}}>
                            <TextField id="email" label="Email" type="email" variant="outlined" error={emailError} onChange={(e) => handleEmailChange(e)} helperText={emailErrorMessage}/>
                            <TextField id="password" label="Password" type="password" variant="outlined" onChange={(e) => setPassword(e.target.value)}/>
                            <div className={classes.button}>
                                <Link component={RouterLink} to="/forgotPassword">
                                    Forgot password?
                                </Link>
                                <Button type="submit" variant="contained" color="primary" onClick={(e) => submit(e)} style={{marginBottom: 30,marginTop:10}}>
                                    Submit
                                </Button>
                            </div>
                        </form>

                    </Grid>
                    
                    <Grid item xs>
                    </Grid>
                </Grid>


            </Paper>
        </Container>
    )
}
