import { React, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Paper,
  Container,
  Grid,
  Button,
  Box,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  form: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      boxShadow:5,
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function UserProfile(props) {
  return (
    <Container maxWidth="sm" style={{ marginTop: 60,boxShadow:6 }}>
      <Paper elevation={3} style={{borderRadius:25, boxShadow:5}}>
        <Grid container spacing={3} >
          <Grid item xs></Grid>
          <Grid item xs >
            <Box fontSize={30} textAlign="center" style={{ marginTop: 30}}>
              <b>Create Gallery</b>
            </Box>
            <form noValidate autoComplete="off">
              <p style={{textAlign:"center", marginTop: 30, fontSize: 20 }}>
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
                  style={{ marginLeft: 104, marginTop: -14 }}
                  color="primary"
                  component="span"
                >
                  <PhotoCamera /> *
                </IconButton>
              </label>

              <p style={{textAlign:"center", marginTop: 6, fontSize: 20 }}>
                <b>Title</b>
              </p>

              <TextField
                id="outlined-basic"
                style={{marginLeft:25, marginTop: -3, height: 65 }}
                label="Title"
                variant="outlined"
              />

              <p style={{ textAlign:"center", marginTop: 6, fontSize: 20 }}>
                <b>Description</b>
              </p>

              <TextareaAutosize
              style={{marginLeft: 8, marginTop: -5, height:100, width:250}}
                maxRows={8}
                aria-label="maximum height"
                placeholder="Maximum 8 rows"
                
              />

              <div>
                <Button style={{marginTop:35, marginLeft:40, marginRight:20}} variant="contained" color="primary">
                  Create
                </Button>
                <Button style={{marginTop:35}} variant="contained" color="primary">
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
