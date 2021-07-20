import { React } from "react";
import "date-fns";
import { makeStyles } from "@material-ui/core/styles";

import {
  TextField,
  Paper,
  Container,
  Grid,
  Button,
  Box,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles((theme) => ({
  form: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function UserProfile(props) {
  return (
    <Container maxWidth="sm" style={{ marginTop: 60, boxShadow: 6 }}>
      <Paper
        elevation={3}
        style={{ borderRadius: 25, boxShadow: 5, background: "#F9F9F9" }}
      >
        <Grid container spacing={3}>
          <Grid item xs></Grid>
          <Grid item xs>
            <Box fontSize={30} textAlign="center" style={{ marginTop: 30 }}>
              <b>Create Gallery</b>
            </Box>
            <form noValidate autoComplete="off">
              <p style={{ textAlign: "center", marginTop: 30, fontSize: 20 }}>
                <b>Picture</b>
              </p>

              <input
                accept="image/*"
                id="icon-button-photo"
                type="file"
                hidden
              />
              <label htmlFor="icon-button-photo">
                <IconButton
                  style={{ marginLeft: 126, marginTop: -14 }}
                  color="primary"
                  component="span"
                >
                  <PhotoCamera /> *
                </IconButton>
              </label>

              <p style={{ textAlign: "center", marginTop: 6, fontSize: 20 }}>
                <b>Title</b>
              </p>

              <TextField
                id="outlined-basic"
                style={{ marginLeft: 40, marginTop: -3, height: 65 }}
                label="Title"
                variant="outlined"
              />

              <p style={{ textAlign: "center", marginTop: 6, fontSize: 20 }}>
                <b>Description</b>
              </p>

              <TextareaAutosize
                style={{
                  marginLeft: 30,
                  marginTop: -5,
                  height: 100,
                  width: 250,
                }}
                maxRows={8}
                aria-label="maximum height"
                placeholder="Maximum 8 rows"
              />

              <p style={{ textAlign: "center", marginTop: 6, fontSize: 20 }}>
                <b>Event</b>
              </p>

              <Autocomplete
                id="combo-box-demo"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                style={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    style={{ width: 250, marginLeft: 35 }}
                    {...params}
                    label="Events"
                    variant="outlined"
                  />
                )}
              />

              <div>
                <Button
                  style={{ marginTop: 35, marginLeft: 73, marginRight: 20 }}
                  variant="contained"
                  color="primary"
                >
                  Create
                </Button>
                <Button
                  style={{ marginTop: 35 }}
                  variant="contained"
                  color="primary"
                >
                  Back
                </Button>
              </div>
            </form>
          </Grid>

          <Grid item xs></Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
];
