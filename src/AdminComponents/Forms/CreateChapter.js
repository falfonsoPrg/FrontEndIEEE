import {React, useState} from 'react'
import { useHistory } from "react-router-dom";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Paper, Container, Grid, Button, Box, Checkbox, FormControlLabel } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import axios from 'axios'

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

export default function CreateChapter(props) {
    const classes = useStyles();
    const history = useHistory()

    const [chapterName, setChapterName] = useState("")
    const [description, setDescription] = useState("")

    const [photo, setPhoto] = useState()
    const [photoName, setPhotoName] = useState("")

    const [active, setActive] = useState(true)

    const [selectedStartDate, setSelectedStartDate] = useState(new Date());
    const [selectedEndDate, setSelectedEndDate] = useState(new Date());
    
    const { handleLoader, openSnackbarByType } = props

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
        const chapter = {
            chapter_name: chapterName,
            description: description,
            logo_path: photo,
            isActive: active,
            start_date: selectedStartDate,
            end_date: selectedEndDate
        }
        e.preventDefault()
        handleLoader(true)
        axios.post(process.env.REACT_APP_ENDPOINT + "/chapters", chapter).then(() => {
            openSnackbarByType(true, "success", "Chapter created succesfully")
            handleLoader(false)
        }).catch((e)=> {
            openSnackbarByType(true,"error", e.response.data.error !== undefined ? e.response.data.error : "Chapter couldn't be created succesfully")
            handleLoader(false)
        })
    }
    const goBack = () => {
        history.goBack()
    }
    return (
        <Container maxWidth="sm" style={{marginTop: 60}}>
            <Paper elevation={3}>
                <Grid container spacing={3}>
                    <Grid item xs>
                    </Grid>
                    <Grid item xs>
                        <Box fontSize={20} textAlign="center" style={{marginTop: 30}}>Create Chapter</Box>
                        <form className={classes.form} noValidate autoComplete="off" onSubmit={submit}>
                            <TextField id="chapterName" label="Chapter Name *" type="text" variant="outlined" onChange={(e) => setChapterName(e.target.value)}/>
                            <TextField id="description" label="Description *" type="text" variant="outlined" onChange={(e) => setDescription(e.target.value)}/>
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

                        <div className={classes.button}>
                            <Button variant="contained" color="primary" onClick={(e) => submit(e)} style={{marginBottom: 30,marginTop:10}}>
                                Submit
                            </Button>
                            <Button variant="contained" color="primary" onClick={goBack} style={{marginBottom: 30,marginTop:10, marginLeft:10}}>
                                Back
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
