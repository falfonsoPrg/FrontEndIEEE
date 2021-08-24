import React, {useEffect, useState}from "react";
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

console.log(moment("2021-08-25T18:03:00.000Z").utc().format('YYYY-MM-DD'));

export default function CalendarArea(props) {
  let { url } = useRouteMatch();
  let { id } = useParams();

  const [chapters, setChapters] = useState([])

  return (
    <Grid container spacing={10}>
      <Grid item xs={3} style={{textAlign: "center"}}>
        <div className="container"style={{width:"480%"}}>
            <br/>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={[
                { title: 'event 1', date: '2021-08-02 01:00:00' },
                { title: 'event 2', date: '2021-08-02' }
              ]}
            />
          </div>
      </Grid>
    </Grid>
  );
}
