import React, { useEffect } from "react";
import "date-fns";
import { Grid, Paper, Typography, Button, TextField } from "@material-ui/core/";
import { useRouteMatch, Link as RouterLink, useParams } from "react-router-dom";
import Autocomplete from "@material-ui/lab/Autocomplete";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import ImgList from "../../SharedComponents/ImgList";
import moment from "moment";

import axios from "axios";

export default function CreateEvent(props) {
  let { id } = useParams();
  let { url } = useRouteMatch();

  const getEventTypes = () => {
    axios
      .get(process.env.REACT_APP_ENDPOINT + "/eventtypes/")
      .then((res) => {
        setEventType(res.data.response);
      })
      .catch((err) => {
        //openSnackbarByType(true, "error", "Chapters couldn't be found");
      });
  };
  useEffect(getEventTypes, []);

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [eventType, setEventType] = React.useState([]);
  const [eventTypeId, setEventTypeId] = React.useState(-1);

  const itemData = [
    {
      img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
      title: "Añadir Imágen",
      author: "",
    },
    {
      img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
      title: "Añadir Imágen",
      author: "",
    },
  ];
  const [selectedDate1, setSelectedDate1] = React.useState(
    new Date("2021-06-20")
  );
  const [selectedDate2, setSelectedDate2] = React.useState(
    new Date("2021-07-20")
  );

  const submit = (e) => {
    e.preventDefault();
    const event = {
      title: title,
      description: description,
      start_date: moment(startDate).format("YYYY-MM-DD"),
      end_date: moment(endDate).format("YYYY-MM-DD"),
      event_type_id: eventTypeId,
      chapter_id: parseInt(id),
    };
    console.log(event);
    props.handleLoader(true);
    axios
      .post(process.env.REACT_APP_ENDPOINT + "/events", event)
      .then(() => {
        props.openSnackbarByType(true, "success", "Event created succesfully");
        props.handleLoader(false);
      })
      .catch((err) => {
        props.openSnackbarByType(
          true,
          "error",
          "Event couldn't be created succesfully"
        );
        props.handleLoader(false);
      });
  };

  function handleDateChange1(date) {
    setSelectedDate1(date);
    setStartDate(date);
  }
  function handleDateChange2(date) {
    setSelectedDate2(date);
    setEndDate(date);
  }
  return (
    <div>
      <Grid
        container
        alignItems="center"
        justifyContent="space-around"
        style={{ height: "500px" }}
      >
        <Grid item xs={6}>
          <Paper xelevation={3}>
            <br />

            <Grid
              item
              xs={12}
              align="center"
              style={{ margin: 10, marginRight: 10 }}
            >
              <Grid item xs={12} justify="center">
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
                  id="eventTitle"
                  name="eventTitle"
                  label="Title of Event"
                  fullWidth
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} style={{ margin: 10 }}>
                <TextField
                  required
                  id="eventDescription"
                  name="eventDescription"
                  label="Description of the event (large)"
                  fullWidth
                  multiline
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} style={{ margin: 10 }}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid
                    item
                    xs={12}
                    container
                    justifyContent="space-between"
                    align="center"
                  >
                    <Grid item xs={5}>
                      <KeyboardDatePicker
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
                      style={{}}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Type of Event"
                          variant="outlined"
                        />
                      )}
                      onInputChange={(event, eventType) => {
                        setEventTypeId(eventType.event_type_id);
                      }}
                      onChange={(event, eventType) => {
                        setEventTypeId(eventType.event_type_id);
                      }}
                    />
                    {eventTypeId}
                  </Grid>
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={12} style={{ margin: 10 }}>
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
        <Grid item xs={5}>
          <ImgList
            items={itemData}
            component={RouterLink}
            to={`${url}/createGallery`}
          />
        </Grid>
      </Grid>
    </div>
  );
}
