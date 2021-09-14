import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import EditIcon from "@material-ui/icons/Edit";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Redirect } from "react-router-dom";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
</style>;

const useStyles = makeStyles((theme) => ({
  first_box: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    marginLeft: "20%",
    height: 300,
    width: "55%",
    borderRadius: 10,
  },

  second_box: {
    alignContent: "center",
    marginLeft: "25%",
    marginTop: "3%",
    borderRadius: 15,
    height: 815,
    width: "45%",
  },

  third_box: {
    marginLeft: "31%",
    marginTop: "30%",
    width: "33%",
    height: 320,
  },

  Title: {
    fontFamily: ["Quicksand", "sans-serif"],
    textAlign: "center",
    fontSize: 28,
  },

  Sub_Title: {
    marginTop: "4%",
    textAlign: "center",
    fontSize: 20,
  },
  input: {
    display: "none",
  },

  large: {
    position: "absolute",
    top: "2%",
    left: "34%",
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
  const [hidden, sethidden] = useState(true);
  return (
    <Box Container m={5}>
      {!props.auth && <Redirect to="/" />}

      <Box className={classes.first_box} position="absolute">
        <div className={classes.btn_edit}>
          <input
            className={classes.input}
            id="icon-button-edit"
            type="button"
          />
        </div>
        <label htmlFor="icon-button-edit">
          <IconButton
            color="primary"
            aria-label="Edit"
            style={{ marginLeft: "93%" }}
            component="span"
            onClick={() => {
              setvisibility(false);
              sethidden(false);
            }}
          >
            <EditIcon />
          </IconButton>
        </label>
      </Box>

      <Box
        className={classes.second_box}
        boxShadow={8}
        bgcolor="white"
        color="BLACK"
        position="absolute"
      >
        <Avatar
          src="https://cutewallpaper.org/21/kobe-bryant-cartoon-wallpaper/Kobe-Bryant-24-Sports-Nba-basketball-Kobe-bryant-nba-.jpg"
          className={classes.large}
        />
        <input
          accept="image/*"
          className={classes.input}
          id="icon-button-file"
          type="file"
        />
        {!hidden && (
          <label htmlFor="icon-button-file">
            <IconButton
              position="absolute"
              left={"41%"}
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
        )}
       
        <p className={classes.Title} style={{ marginTop: 240 }}>
          <b>{props.member.firstname}</b>
        </p>
        <p className={classes.Title} style={{ marginTop: -25 }}>
          <b>{props.member.lastname}</b>
        </p>
        
      </Box>

      <Box className={classes.third_box} boxShadow={10} position="absolute">
        <p className={classes.Sub_Title}>
          <b>Cellphone</b>
        </p>
        <TextField
          style={{ marginLeft: "40.2%", marginTop: "-2%", width: "21%" }}
          disabled={visibility}
          id="standard-number"
          type="number"
          defaultValue={props.member.phone}
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
          style={{ marginLeft: "32%", marginTop: "-4%", width: "42%" }}
          defaultValue={props.member.email}
        />

        <p className={classes.Sub_Title}>
          <b>Document</b>
        </p>

        <TextField
          id="standard"
          disabled={visibility}
          style={{ marginLeft: "41.5% ", marginTop: "-4%", width: "18%" }}
          defaultValue={props.member.document}
        />

        <p
          className={classes.Sub_Title}
          style={{ marginTop: "12%" }}
        >
          <b>Chapter</b>
        </p>
      </Box>

      {!hidden && (
        <Button
          style={{ marginLeft: "50.5%", marginTop: "62%" }}
          hidden={true}
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<CloudUploadIcon />}
        >
          Upload
        </Button>
      )}
    </Box>
  );
}
