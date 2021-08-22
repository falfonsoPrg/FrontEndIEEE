import React, { useEffect } from "react";
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

export default function CalendarArea(props) {
  let { url } = useRouteMatch();
  let { id } = useParams();
  
  return (
    <Grid container spacing={10}>
      <Grid item xs={3} style={{textAlign: "center"}}>
        <div className="container"style={{width:"500%"}}>
              <br/>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              weekends={false}
              events={[
                { title: "event 1", date: "2021-08-03" },
                { title: "event 2", date: "2021-08-05" },
                { title: "event 3", date: "2021-08-05 00:00:00.000"},
              ]}
            />
          </div>
      </Grid>
    </Grid>
  );
}
