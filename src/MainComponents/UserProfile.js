import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { flexbox } from "@material-ui/system";
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
    borderRadius: 15,
    height: 250,
    width: 550,
    marginTop: "15px",
  },

  second_box: {
    background: "white",
    borderRadius: 15,
    height: 780,
    width: 500,
    marginLeft: "4%",
  },

  third_box: {
    width: "390px",
    height: "270px",
    background: "white",
    top: "-400px",
    left: "78px",
  },

  Title: {
    fontFamily: ["Quicksand", "sans-serif"],
    textAlign: "center",
    position:"relative",
    top:"28%" , 
    left:"-33%",
    fontSize: 30,
  },

  Sub_Title: {
    fontFamily: ["Quicksand", "sans-serif"],
    position:"relative", 
    top: "32%",
    left: "-56%",
    fontSize: 28,
  },
  input: {
    display: "none",
  },

  large: {
    display: "flex",
    justifyContent: "center",
    position:"relative",
    marginLeft:"230px",
    marginTop: "12px",
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
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      {!props.auth && <Redirect to="/" />}
      <Box></Box>
      <Box className={classes.first_box}>
        <div>
          <input
            className={classes.input}
            id="icon-button-edit"
            type="button"
          />
          <label htmlFor="icon-button-edit">
            <IconButton
              color="primary"
              aria-label="Edit"
              display="flex"
              justify-content="flex-end"
              component="span"
              onClick={() => {
                setvisibility(false);
                sethidden(false);
              }}
            >
              <EditIcon />
            </IconButton>
          </label>
        </div>
        <Box></Box>
        <Box
          className={classes.second_box}
          display="flex"
          justifyContent="center"
          boxShadow={8}
          bgcolor="white"
          color="BLACK"
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
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
          )}
          
        <p className={classes.Title}>
          <b>{props.member.firstname}</b>
        </p>
        <p className={classes.Sub_Title} style={{width:"200"}}>
          <b>{props.member.lastname}</b>
        </p>
        </Box>
        <Box  className={classes.third_box}
        boxShadow={10}
        position="relative">
           <p style={{position:"relative", left:"136px",top:"13px",fontSize: 24}}>
          <b>Cellphone</b>
          <TextField
          style={{ position:"relative",left: "-106px", top: "40px", width: "27%" }}
          disabled={visibility}
          id="standard-number"
          type="number"
          defaultValue={props.member.phone}
          InputLabelProps={{
            shrink: true,
          }}
        />
         <p style={{position:"relative",alignItems:"center", left:"22.5px",top:"22px",fontSize: 24}}>
          <b>Email</b>
        </p>

        <TextField
          id="standard"
          disabled={visibility}
          style={{  position:"relative",left: "-55px", top: "2px", width: "61%" }}
          defaultValue={props.member.email}
        />
        
        <p style={{position:"relative", left:"2px",top:"-13px",fontSize: 24}}>
          <b>Document</b>
        </p>

        <TextField
          id="standard"
          disabled={visibility}
          style={{  position:"relative",left: "13px", top: "-30px", width: "24%" }}
          defaultValue={props.member.document}
        />


        </p>
       </Box>
      </Box>
      <Box></Box>
    </Box>
  );
}
