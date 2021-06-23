import {React, useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Paper, Container, Grid, Button, Box, Checkbox, FormControlLabel } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

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

export default function CreateMember() {
    const classes = useStyles();

    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [document, setDocument] = useState("")
    const [phone, setPhone] = useState("")
    const [photo, setPhoto] = useState()
    const [photoName, setPhotoName] = useState("")

    const [chapter, setChapter] = useState(null)
    const [inputChapter, setInputChapter] = useState("")

    const [active, setActive] = useState(true)


    const [emailError, setEmailError] = useState(false)
    const [emailErrorMessage, setEmailErrorMessage] = useState("")

    const [selectedStartDate, setSelectedStartDate] = useState(new Date());
    const [selectedEndDate, setSelectedEndDate] = useState(new Date());
    
    const chapters = []

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

    const handleCapture = ({ target }) => {
        const fileReader = new FileReader();
        const name = target.files[0] !== undefined ? target.files[0].name : "";
        setPhotoName(name)
        if(target.files[0] !== undefined ){
            fileReader.readAsDataURL(target.files[0]);
            fileReader.onload = (e) => {
                setPhoto(e.target.result)
            };
        }
    }

    const submit = (e) => {
        
    }

    return (
        <Container maxWidth="sm" style={{marginTop: 60}}>
            <Paper elevation={3}>
                <Grid container spacing={3}>
                    <Grid item xs>
                    </Grid>
                    <Grid item xs>
                        <Box fontSize={20} textAlign="center" style={{marginTop: 30}}>Create Member</Box>
                        <form className={classes.form} noValidate autoComplete="off">
                            <TextField id="firstname" label="First name *" type="text" variant="outlined" onChange={(e) => setFirstName(e.target.value)}/>
                            <TextField id="lastname" label="Last name *" type="text" variant="outlined" onChange={(e) => setLastName(e.target.value)}/>
                            <TextField id="email" label="Email *" type="email" variant="outlined" error={emailError} onChange={(e) => handleEmailChange(e)} helperText={emailErrorMessage}/>
                            <TextField id="document" label="Document *" type="text" variant="outlined" onChange={(e) => setDocument(e.target.value)}/>
                            <TextField id="phone" label="Phone *" type="text" variant="outlined" onChange={(e) => setPhone(e.target.value)}/>
                            <input
                                accept="image/*"
                                id="icon-button-photo"
                                onChange={handleCapture}
                                type="file"
                                hidden
                            />
                            <label htmlFor="icon-button-photo">
                                <IconButton color="primary" component="span">
                                    <PhotoCamera /> *
                                </IconButton> {photoName!=="" && (<>{photoName}</>)}
                            </label>

                            <Autocomplete
                                value={chapter}
                                onChange={(event, newValue) => {
                                    setChapter(newValue);
                                }}
                                inputValue={inputChapter}
                                onInputChange={(event, newInputValue) => {
                                    setInputChapter(newInputValue);
                                }}
                                id="controllable-states"
                                options={chapters}
                                getOptionLabel={(c) => c.chapter_name}
                                renderOption={(c) => (<div> {c.chapter_name}</div>)}
                                renderInput={(params) =>(<TextField {...params} label="Choose a chapter *" variant="outlined" />)}
                            />

                            <Autocomplete
                                value={chapter}
                                onChange={(event, newValue) => {
                                    setChapter(newValue);
                                }}
                                inputValue={inputChapter}
                                onInputChange={(event, newInputValue) => {
                                    setInputChapter(newInputValue);
                                }}
                                id="controllable-states"
                                options={chapters}
                                getOptionLabel={(c) => c.chapter_name}
                                renderOption={(c) => (<div> {c.chapter_name}</div>)}
                                renderInput={(params) =>(<TextField {...params} label="Choose a role *" variant="outlined" />)}
                            />

                            <FormControlLabel
                                value="Active *"
                                control={<Checkbox color="primary" checked={active}
                                onChange={() => {setActive(!active)}}/>}
                                label="Active *"
                                labelPlacement="Active"
                            />

                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Start date *"
                                    value={selectedStartDate}
                                    onChange={(date) => {setSelectedStartDate(date)}}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />

                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="End date"
                                    value={selectedEndDate}
                                    onChange={(date) => setSelectedEndDate(date)}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>

                        </form>
                        <div className={classes.button}>
                            <Button variant="contained" color="primary" onClick={(e) => submit(e)} style={{marginBottom: 30,marginTop:10}}>
                                Submit
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
