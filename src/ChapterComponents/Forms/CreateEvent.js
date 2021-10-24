import React, { useEffect } from "react";
import "date-fns";
import {
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
} from "@material-ui/core/";
import { useParams,useHistory } from "react-router-dom";
import Autocomplete from "@material-ui/lab/Autocomplete";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import moment from "moment";
import axios from "axios";

export default function CreateEvent(props) {
  let { id } = useParams();
  const history = useHistory();

  const [title, setTitle] = React.useState({ input: "", error: false });
  const [description, setDescription] = React.useState({
    input: "",
    error: false,
  });
  const [startDate, setStartDate] = React.useState({ input: "", error: false });
  const [endDate, setEndDate] = React.useState({ input: "", error: false });
  const [eventType, setEventType] = React.useState([]);
  const [eventTypeId, setEventTypeId] = React.useState(null);
  const [verification, setVerification] = React.useState(false);
  const [selectedDate1, setSelectedDate1] = React.useState(null);
  const [selectedDate2, setSelectedDate2] = React.useState(null);

  const getEventTypes = () => {
    axios
      .get(process.env.REACT_APP_ENDPOINT + "/eventtypes/")
      .then((res) => {
        setEventType(res.data.response);
      })
      .catch(() => {
        //openSnackbarByType(true, "error", "Chapters couldn't be found");
      });
  };
  useEffect(getEventTypes, []);

  const goBack = () => {
    history.goBack();
  };

  const submit = (e) => {
    e.preventDefault();
    const event = {
      title: title.input,
      description: description.input,
      start_date: moment(startDate).format("YYYY-MM-DD"),
      end_date: moment(endDate).format("YYYY-MM-DD"),
      event_type_id: eventTypeId.event_type_id,
      chapter_id: parseInt(id),
    };
    verificationForm();
    if (verification) {
      props.handleLoader(true);
      axios
        .post(process.env.REACT_APP_ENDPOINT + "/events", event)
        .then(() => {
          props.openSnackbarByType(
            true,
            "success",
            "Event created succesfully"
          );
          props.handleLoader(false);
          goBack()
        })
        .catch(() => {
          props.openSnackbarByType(
            true,
            "error",
            "Event couldn't be created succesfully"
          );

          props.handleLoader(false);
        });
    }
  };

  function handleDateChange1(date) {
    setSelectedDate1(date);
    setStartDate((error) => ({ ...error, input: date }));
  }
  function handleDateChange2(date) {
    setSelectedDate2(date);
    setEndDate((error) => ({ ...error, input: date }));
  }
  const verificationForm = () => {
    if (!title.input || title.input.length < 7) {
      setVerification(false);
      props.openSnackbarByType(
        true,
        "error",
        "You need to provide a title with almost 7 characters"
      );
      setTitle((input) => ({ ...input, error: true }));
    } else if (!description.input || description.input.split(" ").length < 80) {
      setVerification(false);
      props.openSnackbarByType(
        true,
        "error",
        "You need to provide a description with almost 80 words"
      );
      setDescription((input) => ({ ...input, error: true }));
    } else if (!startDate.input) {
      setVerification(false);
      props.openSnackbarByType(
        true,
        "error",
        "You need to select a start date"
      );
      setStartDate((input) => ({ ...input, error: true }));
    } else {
      setVerification(true);
    }
  };
  return (
    <div>
      <Grid
        container
        alignItems="center"
        justifyContent="space-around"
        style={{ height: "500px", marginTop: "5%" }}
      >
        <Grid item xs={5}>
          <Paper elevation={3}>
            <br />

            <Grid
              item
              xs={12}
              align="center"
              style={{ margin: 10, marginRight: 10 }}
            >
              <Grid item xs={12}>
                <Typography
                  style={{ fontWeight: "bold", textAlign: "center" }}
                  variant="h4"
                >
                  New Event
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ margin: 10 }}>
                <TextField
                  required
                  onClick={() =>
                    setTitle((input) => ({ ...input, error: false }))
                  }
                  error={title.error}
                  id="eventTitle"
                  name="eventTitle"
                  label="Title of Event"
                  style={{ borderColor: "yellow" }}
                  fullWidth
                  onChange={(e) =>
                    setTitle((error) => ({ ...error, input: e.target.value }))
                  }
                />
              </Grid>
              <Grid item xs={12} style={{ margin: 10 }}>
                <TextField
                  required
                  onClick={() =>
                    setDescription((input) => ({ ...input, error: false }))
                  }
                  error={description.error}
                  id="eventDescription"
                  name="eventDescription"
                  label="Description of the event (large)"
                  fullWidth
                  multiline
                  onChange={(e) =>
                    setDescription((error) => ({
                      ...error,
                      input: e.target.value,
                    }))
                  }
                />
              </Grid>
              <Grid item xs={12} style={{ margin: 10 }}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid
                    container
                    justifyContent="space-between"
                    align="center"
                  >
                    <Grid item xs={5}>
                      <KeyboardDatePicker
                        onClick={() =>
                          setStartDate((input) => ({ ...input, error: false }))
                        }
                        error={startDate.error}
                        margin="normal"
                        id="start-date"
                        label="Start Date"
                        format="yyyy/MM/dd"
                        value={selectedDate1}
                        onChange={handleDateChange1}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                    </Grid>

                    <Grid item xs={5}>
                      <KeyboardDatePicker
                        onClick={() =>
                          setEndDate((input) => ({ ...input, error: false }))
                        }
                        error={endDate.error}
                        margin="normal"
                        id="end-date"
                        label="End Date"
                        format="yyyy/MM/dd"
                        value={selectedDate2}
                        onChange={handleDateChange2}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Autocomplete
                      id="typeOfEvent"
                      options={eventType}
                      getOptionLabel={(option) => option.event_type}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Type of Event"
                          variant="outlined"
                        />
                      )}
                
                      onChange={(event, eventType) => {
                          console.log(eventType)
                          setEventTypeId(eventType);
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={12} style={{ margin: 10 }}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginBottom: 30, marginTop: 10, marginRight: 30 }}
                  onClick={goBack}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={(e) => submit(e)}
                  style={{ marginBottom: 30, marginTop: 10 }}
                >
                  Submit
                </Button>
              </Grid>
              <br />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
