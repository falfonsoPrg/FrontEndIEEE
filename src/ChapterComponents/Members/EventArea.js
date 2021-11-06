import React, { useEffect, useState } from "react";
import {
  useRouteMatch,
  Link as RouterLink,
  useParams
} from "react-router-dom";
import { Grid, Typography, Button } from "@material-ui/core";
import Card from "../../SharedComponents/Card";
import SharedTimeline from "../../SharedComponents/Timeline";
import axios from "axios";
import ValidatePermissions from '../../ValidatePermissions'

export default function EventArea(props) {
  let { url } = useRouteMatch();
  let { id } = useParams();
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState({
    event_id: -1,
    chapter_id: id,
    title: "Default title",
    description: "Default description",
    Galleries: []
  })


  useEffect(() => {
    props.handleLoader(true);
    axios.get(process.env.REACT_APP_ENDPOINT + "/events/byChapter/" + id)
    .then((res) => {
      props.handleLoader(false);
      setEvents(res.data.response);
      console.log(res.data.response)
      if (res.data.response) {
        setSelectedEvent(res.data.response[0])
      }
    })
    .catch((err) => {
      props.openSnackbarByType(true, "error", "Chapter couldn't be fetched");
      props.handleLoader(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSelectedEvent]);

  const changeEvent = (nEvent) => {
    setSelectedEvent(nEvent)
  };

  return (
    <Grid container spacing={10} style={{marginTop: "-1%"}}>



      <Grid item xs={3} style={{textAlign: "center"}}>
        <Typography
          style={{ fontWeight: "bold", textAlign: "center" }}
          variant="h4"
        >
          Events
        </Typography>
        <br />
        {ValidatePermissions.canCreate(props.roles) && (<Button variant="contained" color="primary"component={RouterLink}
          to={`${url}/createEvent`}>
          Create Event
        </Button>)}
        <SharedTimeline
          align={"right"}
          content={events}
          changeFunction={changeEvent}
        />
        
      </Grid>
      {!selectedEvent && (
        <Grid item xs={9}>
        <Typography
          style={{ fontWeight: "bold", textAlign: "center" }}
          variant="h5"
        >
          This chapter has no events!
        </Typography>
        </Grid>)}
      {selectedEvent && <Grid item xs={9} >
        <Typography
          style={{ fontWeight: "bold", textAlign: "center" }}
          variant="h4"
        >
          {selectedEvent && (selectedEvent.title+"")}
        </Typography>
        <br />
        <Typography style={{ fontWeight: "bold" }} variant="h5">
          Description
        </Typography>
        <br />
        <Typography
          paragraph
          style={{ textAlign: "justify", alignContent: "left" }}
        >
          {selectedEvent && (<div>{selectedEvent.description}</div>)}
        </Typography>

        <Typography
          style={{ fontWeight: "bold", marginTop: "5%", marginBottom: "3%"}}
          variant="h5"
        >
          Gallery
          {ValidatePermissions.canCreate(props.roles) &&<Button
                  variant="contained"
                  color="primary"
                  component={RouterLink}
                  style={{marginLeft: 25}}
                  to={`${url}/createGallery/${selectedEvent.event_id}`}
                >
              Upload photos
            </Button>}
        </Typography>
        <Grid container>
            {selectedEvent && selectedEvent.Galleries && selectedEvent.Galleries.length > 0 && selectedEvent.Galleries.map(g => {
              return(

                  <Grid item xs={4} style={{margin:5}} key={g.gallery_id}>
                    <Card
                      title={g.gallery_name}
                      cardTitle={g.gallery_name}
                      imagePath={g.path}
                      cardDescription={g.description}
                      width={1000}
                    ></Card>
                    <br></br>
                  </Grid>
              )
            })}
            {selectedEvent && selectedEvent.Galleries && selectedEvent.Galleries.length == 0 && ("This event has no images")}


        </Grid>

      </Grid>}
    </Grid>
  );
}
