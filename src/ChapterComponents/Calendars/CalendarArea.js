import React, {useEffect, useState} from "react";
import {
  useParams
} from "react-router-dom";
import { Grid } from "@material-ui/core";
import axios from "axios";

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

import moment from "moment";

export default function CalendarArea({handleLoader, openSnackbarByType}) {
  let { id } = useParams();

  const [events, setEvents] = useState([])

  useEffect(() => {
    handleLoader(true);
    axios
      .get(process.env.REACT_APP_ENDPOINT + "/chapters/" + id)
      .then((res) => {
        let even = res.data.response.Events
        let aux = []
        even.forEach(e => {
            e.id = e.event_id
            aux.push({ title: e.title, date: moment(e.start_date).utc().format('YYYY-MM-DD') })
          });
        handleLoader(false);
        setEvents(aux);
      })
      .catch((err) => {
        openSnackbarByType(true, "error", "Chapter couldn't be fetched");
        handleLoader(false);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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
