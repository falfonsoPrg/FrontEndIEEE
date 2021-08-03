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

export default function EventArea(props) {
  let { url } = useRouteMatch();
  let { id } = useParams();
  const [theEvents, setTheEvents] = React.useState([]);
  const [title, setTitle] = React.useState("Default");
  const [description, setDescription] = React.useState("Default");

  const [thegallery2, setTheGallery2] = React.useState([
    {
      title: "name",
      path: "https://www.enter.co/wp-content/uploads/2019/05/Astronauta.jpg",
      description: "Había una vez asdsadsa 0",
    },
    {
      title: "name",
      path: "https://www.enter.co/wp-content/uploads/2019/05/Astronauta.jpg",
      description: "Había una vez asdsadsa 3",
    },
  ]);

  const myGallery = thegallery2.map((gallery) => {
    return (
      <Grid item xs={4} key={gallery.description}>
        <Card
          title={gallery.title}
          cardTitle={gallery.title}
          imagePath={gallery.path}
          cardDescription={gallery.description}
        ></Card>
        <br></br>
      </Grid>
    );
  });
  //En caso de usar las peticiones al back para las fotos y los eventos se guardan en constantes
  const [thegallery, setThegallery] = React.useState([]);
  useEffect(() => {
    props.handleLoader(true);
    axios
      .get(process.env.REACT_APP_ENDPOINT + "/chapters/" + id)
      .then((res) => {
        props.handleLoader(false);
        setTheEvents(res.data.response.Events);
        if (res.data.response.Events) {
          setTitle(res.data.response.Events[0].title);
          setDescription(res.data.response.Events[0].description);
        }
      })
      .catch((err) => {
        props.openSnackbarByType(true, "error", "Chapter couldn't be fetched");
        props.handleLoader(false);
      });
  }, []);

  const changeEvent = (nEvent) => {
    setTitle(nEvent.title);
    setDescription(nEvent.description);
  };

  return (
    <Grid container spacing={10}>
      <Grid item xs={3}>
        <Typography
          style={{ fontWeight: "bold", textAlign: "center" }}
          variant="h4"
        >
          Events
        </Typography>
        <br />
        <SharedTimeline
          align={"right"}
          content={theEvents}
          changeFunction={changeEvent}
        />
        <Button variant="contained" color="primary"component={RouterLink}
          to={`${url}/createEvent`}>
          Submit
        </Button>
      </Grid>
      <Grid item xs={9}>
        <Typography
          style={{ fontWeight: "bold", textAlign: "center" }}
          variant="h4"
        >
          {title}
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
          {description}
        </Typography>

        <Typography
          style={{ fontWeight: "bold", marginTop: "5%", marginBottom: "3%" }}
          variant="h5"
        >
          Gallery
        </Typography>
        <Grid container spacing={9}>
          {props.gallery ? props.gallery : myGallery}
        </Grid>

        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to={`${url}/createGallery`}
        >
          subir foto
        </Button>
      </Grid>
    </Grid>
  );
}
