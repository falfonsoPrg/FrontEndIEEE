import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import {
  TextField,
  Paper,
  Container,
  Grid,
  Button,
  Link,
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import { positions } from "@material-ui/system";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink, Redirect } from "react-router-dom";
import { CenterFocusStrong } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import EditIcon from "@material-ui/icons/Edit";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { getElementById } from "domutils";

const useStyles = makeStyles((theme) => ({
  first_box: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    marginLeft: '20%',
    height: 300,
    width: '55%',
    borderRadius: 10,
  },

  second_box: {
    alignContent: "center",
    marginLeft: '25%',
    marginTop: '-20%',
    borderRadius: 15,
    height: 820,
    width: '45%',
  },

  third_box: {

    marginLeft: '31%',
    marginTop: '-40%',
    width: '33%',
    minHeight:'20%',
    maxHeight:'20%'
    
  },

  Title: {
    fontfamily: "Otomanopee One",
    textAlign: "center",
    fontSize: 28,
  },

  Sub_Title: {
    marginTop:'2%',
    textAlign: "center",
    fontSize: 20,
  },
  input: {
    display: "none",
  },

  large: {
    top: '2%',
    left: '30%',
    width: theme.spacing(28),
    height: theme.spacing(28),
  },
}));

export default function UserProfile(props) {
  const classes = useStyles();
  const [name, setname] = useState("Cristian David");
  const [lastname, setlastname] = useState("Sanchez Malagon");
  const [email, setemail] = useState("cdsanchezm@unbosque.edu.co");
  const [cellphone, setcellphone] = useState("3216985412");
  const [document, setdocument] = useState("1245789635");
  const [visibility, setvisibility] = useState(true);
  const [hidden, sethidden] = useState("hidden");
  return (
    <Box Container m={5}  >
      <Box className={classes.first_box}>
        <div className={classes.btn_edit}>
          <input
            className={classes.input}
            id="icon-button-edit"
            type="button"
          />
        </div>
        <label htmlFor="icon-button-edit">
          <IconButton color="primary" aria-label="Edit" component="span" onClick={() => setvisibility(false)}>
            <EditIcon />
          </IconButton>
        </label>

      </Box>

      <Box
        className={classes.second_box}
        boxShadow={8}
        bgcolor="white"
        color="BLACK"
      >
        <Avatar
          src="https://cutewallpaper.org/21/kobe-bryant-cartoon-wallpaper/Kobe-Bryant-24-Sports-Nba-basketball-Kobe-bryant-nba-.jpg"
          className={classes.large}
        />

        <div className={classes.div} style={{ visibility: "hidden" }} id="photo">

          <input

            accept="image/*"
            className={classes.input}
            id="icon-button-file"
            type="file"
          />
          <label htmlFor="icon-button-file"  >
            <IconButton

              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
        </div>

        <p className={classes.Title} style={{ marginTop: -30 }}>
          <b>{name}</b>
        </p>
        <p className={classes.Title} style={{ marginTop: -25 }}>
          <b>{lastname}</b>
        </p>
      </Box>

      <Box
        className={classes.third_box}
        boxShadow={10}
      >
        <p className={classes.Sub_Title}>
          <b>Cellphone</b>
        </p>
        <TextField
          style={{ marginLeft: "38%", marginTop: '-4%', width: "30%" }}
          disabled={visibility}
          id="standard-number"
          type="number"
          defaultValue={cellphone}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <p className={classes.Sub_Title}>
          <b>Email</b>
        </p>

        <TextField
          id="standard"
          disabled={visibility}
          style={{ marginLeft: '24%', marginTop: '-4%', width: '59%' }}
          defaultValue={email}
        />

        <p className={classes.Sub_Title}>
          <b>Document</b>
        </p>

        <TextField
          id="standard"
          disabled={visibility}
          style={{ marginLeft: '39% ', marginTop: '-4%', width: '24 %' }}
          defaultValue={document}
        />
      </Box>
      <p className={classes.Sub_Title} style={{ marginTop: 50 }}>
        <b>Chapter</b>
      </p>
      <Button style={{ left: 140, top: -20, alignSelf:'center' }}
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        Upload
      </Button>
    </Box>
  );
}
