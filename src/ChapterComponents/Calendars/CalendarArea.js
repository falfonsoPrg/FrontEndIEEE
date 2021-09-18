import React, {useEffect, useState} from "react";
import {
  useRouteMatch,
  Link as RouterLink,
  useParams
} from "react-router-dom";
import { Grid, Typography, Button } from "@material-ui/core";
import Card from "../../SharedComponents/Card";
import SharedTimeline from "../../SharedComponents/Timeline";
import axios from "axios";

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

import moment from "moment";

export default function CalendarArea(props) {
  let { url } = useRouteMatch();
  let { id } = useParams();

  const [events, setEvents] = useState([])
  const {handleLoader, openSnackbarByType} = props

  useEffect(() => {
    props.handleLoader(true);
    axios
      .get(process.env.REACT_APP_ENDPOINT + "/chapters/" + id)
      .then((res) => {
        let even = res.data.response.Events
        let aux = []
        even.forEach(e => {
            e.id = e.event_id
            aux.push({ title: e.title, date: moment(e.start_date).utc().format('YYYY-MM-DD') })
          });
        props.handleLoader(false);
        setEvents(aux);
      })
      .catch((err) => {
        props.openSnackbarByType(true, "error", "Chapter couldn't be fetched");
        props.handleLoader(false);
      });
  }, []);

  return (
    <Grid container spacing={10}>
      <Grid item xs={3} style={{textAlign: "center"}}>
        <div className="container"style={{width:"480%"}}>
            <br/>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={events}
            />
          </div>
      </Grid>
    </Grid>
  );
}
