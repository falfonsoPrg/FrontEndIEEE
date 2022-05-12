import React, { useEffect } from "react";
import "date-fns";
import {
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
  MenuItem,
  Select,
} from "@material-ui/core/";
import { useParams, useHistory } from "react-router-dom";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import moment from "moment";
import axios from "axios";

export default function CreateEvent(props) {
  let { id, id_event } = useParams();

  const history = useHistory();
  const [newTypeEvent, setNewTypeEvent] = React.useState({
    input: "",
    error: false,
  });
  const [title, setTitle] = React.useState({ input: "", error: false });
  const [description, setDescription] = React.useState({
    input: "",
    error: false,
  });
  const [verification, setVerification] = React.useState(true);

  const [startDate, setStartDate] = React.useState({ input: "", error: false });
  const [endDate, setEndDate] = React.useState({ input: "", error: false });
  const [eventType, setEventType] = React.useState([]);
  const [eventTypeId, setEventTypeId] = React.useState(null);
  const [selectedDate1, setSelectedDate1] = React.useState(null);
  const [selectedDate2, setSelectedDate2] = React.useState(null);

  const newType = {
    event_type_id: -1,
    event_type: "other",
  };
  const getEvent = () => {
    //si useParams es diferente de undefined, es porque estamos editando un evento
    if (id_event !== undefined) {
      axios
        .get(process.env.REACT_APP_ENDPOINT + `/events/${id_event}`)
        .then((res) => {
          setTitle({ input: res.data.response.title, error: false });
          setDescription({
            input: res.data.response.description,
            error: false,
          });
          setEventTypeId(res.data.response.event_type_id);
          setStartDate({
            input: moment(res.data.response.start_date).format("YYYY-MM-DD"),
            error: false,
          });
          setEndDate({
            input: moment(res.data.response.end_date).format("YYYY-MM-DD"),
            error: false,
          });
          setSelectedDate1(new Date(res.data.response.start_date));
          setSelectedDate2(new Date(res.data.response.end_date));
          setEventTypeId(res.data.response.Event_Type.event_type_id);

          setNewTypeEvent({
            input: res.data.response.Event_Type.event_type,
            error: false,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const getEventTypes = () => {
    axios
      .get(process.env.REACT_APP_ENDPOINT + "/eventtypes/")
      .then((res) => {
        res.data.response.push(newType);
        setEventType(res.data.response);

        getEvent();
      })
      .catch(() => {
        //openSnackbarByType(true, "error", "Chapters couldn't be found");
      });
  };

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
      event_type_id: eventTypeId,
      chapter_id: parseInt(id),
    };

    const event2 = {
      event_id: (id_event = parseInt(id_event)),
      title: title.input,
      description: description.input,
      start_date: moment(startDate).format("YYYY-MM-DD"),
      end_date: moment(endDate).format("YYYY-MM-DD"),
      event_type_id: eventTypeId,
      chapter_id: parseInt(id),
    };

    if (verificationForm() && !id_event) {
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
          goBack();
        })
        .catch((error) => {
          props.openSnackbarByType(
            true,
            "error",
            "Event couldn't be created succesfully"
          );

          props.handleLoader(false);
        });
    } else if (verificationForm() && id_event) {
      props.handleLoader(true);
      axios
        .put(process.env.REACT_APP_ENDPOINT + `/events/`, event2)
        .then(() => {
          props.openSnackbarByType(
            true,
            "success",
            "Event updated succesfully"
          );
          props.handleLoader(false);
          goBack();
        })
        .catch((error) => {
          props.openSnackbarByType(
            true,
            "error",
            "Event couldn't be updated succesfully"
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
  function verificationForm() {
    if (title.input.length < 7) {
      props.openSnackbarByType(
        true,
        "error",
        "You need to provide a title with almost 7 characters"
      );
      setTitle((input) => ({ ...input, error: true }));
      return false;
    } else if (description.input.split(" ").length < 70) {
      props.openSnackbarByType(
        true,
        "error",
        "You need to provide a description with almost 70 words"
      );
      setDescription((input) => ({ ...input, error: true }));
      return false;
    } else if (!startDate.input) {
      props.openSnackbarByType(
        true,
        "error",
        "You need to select a start date"
      );
      setStartDate((input) => ({ ...input, error: true }));
      return false;
    } else if (!endDate.input) {
      props.openSnackbarByType(true, "error", "You need to select a endS date");
      setEndDate((input) => ({ ...input, error: true }));
      return false;
    } else if (!newTypeEvent.input) {
      props.openSnackbarByType(
        true,
        "error",
        "You need to select an event type"
      );
      setNewTypeEvent((input) => ({ ...input, error: true }));
      return false;
    }
    return true;
  }

  useEffect(getEventTypes, []);
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
                  Event
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
                  value={title.input}
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
                  value={description.input}
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
                  <Grid container justifyContent="space-between" align="center">
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
                  <Grid item xs={12} style={{ marginTop: 20 }}>
                    <Select
                      id="typeOfEvent"
                      fullWidth
                      defaultValue={
                        newTypeEvent.input ? newTypeEvent.input : ""
                      }
                      error={newTypeEvent.error}
                      value={newTypeEvent.input ? newTypeEvent.input : ""}
                      onChange={(event, eventType2) => {
                        setEventTypeId(eventType2.props.event_type_id);
                        if (eventType2.event_type_id === -1) {
                          setNewTypeEvent((error) => ({ ...error, input: "" }));
                        } else {
                          setNewTypeEvent((error) => ({
                            ...error,
                            input: eventType2.props.value,
                          }));
                        }
                      }}
                    >
                      {eventType.map((eventType2) => (
                        <MenuItem
                          key={eventType2.event_type_id}
                          value={eventType2.event_type}
                          event_type_id={eventType2.event_type_id}
                        >
                          {eventType2?.event_type}
                        </MenuItem>
                      ))}
                    </Select>
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
