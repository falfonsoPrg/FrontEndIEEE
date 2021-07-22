import 'date-fns';
import React from 'react'
import { Grid, Container, Paper, Typography, TextField,makeStyles,CssBaseline  } from '@material-ui/core/';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

export default function CreateEvents() {
    
    const [selectedDate, setSelectedDate] = React.useState(new Date('2018-08-18T21:11:54'));

    function handleDateChange(date) {
        setSelectedDate(date);
    }
    return (
        <Container component="main" maxWidth="sm" style={{ marginTop: 20 }}>
         <CssBaseline />
            <Paper elevation={3} style={{ borderRadius: 20, boxShadow: 50 }}>
                < Grid style={{ margin: 20 }}>
                    <Typography style={{ textAlign: "center" }} component="h1" variant="h4">
                        New Event
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="eventTitle"
                                name="eventTitle"
                                label="Title of Event"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField
                                required
                                id="eventDescription"
                                name="eventDescription"
                                label="Description of the event"
                                fullWidth
                                autoComplete="shipping address-line1"
                            />
                        </Grid>

                        <MuiPickersUtilsProvider utils={DateFnsUtils} >
                            <Grid xs={12} sm={6}>
                                <KeyboardDatePicker
                                    style={{textAlign:'center', alignItems:'    '}}
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Date picker inline"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}

                                />
                            </Grid>

                            <Grid xs={10} sm={5}>

                                <KeyboardDatePicker
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="Date picker dialog"
                                    format="MM/dd/yyyy"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}