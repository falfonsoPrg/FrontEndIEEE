import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import EditIcon from "@material-ui/icons/Edit";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Redirect,Link as RouterLink  } from "react-router-dom";

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
    position: "relative",
    width: 250,
    top: "28%",
    left: "-95%",
    fontSize: 29,
  },

  Sub_Title: {
    fontFamily: ["Quicksand", "sans-serif"],
    textAlign: "center",
    position: "relative",
    top: "25%",
    left: "-92%",
    width: 250,
    fontSize: 28,
  },
  input: {
    display: "none",
    left: 100,
  },

  large: {
    position: "relative",
    marginLeft: "245px",
    marginTop: "12px",
    width: theme.spacing(28),
    height: theme.spacing(28),
  },
}));

export default function UserProfile(props) {
  const classes = useStyles();

  const [visibility, setvisibility] = useState(true);
  const [hidden, sethidden] = useState(true);

  const userChapters =  props.member.Chapter_Members.length > 0 ? props.member.Chapter_Members : [] 

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
          <div display="flex" flexDirection="column" alignItems="center">
            <p className={classes.Title}>
              <b>{props.member.firstname}</b>
            
            </p>
            <p className={classes.Sub_Title}>
              <b>{props.member.lastname}</b>
            </p>
          </div>
        </Box>
        <Box className={classes.third_box} boxShadow={10} position="relative">
          <p
            style={{
              position: "relative",
              left: "136px",
              top: "13px",
              fontSize: 24,
            }}
          >
            <b>Cellphone</b>
          </p>

          <TextField
            style={{ posistion: "relative",left: "105px", width: "auto"}}
            disabled={visibility}
            id="standard-number"
            type="number"
            defaultValue={props.member.phone} 
            InputLabelProps={{
              shrink: true,
            }}

            inputProps={{min: 0, style: { textAlign: 'center' }}}
           
          />
          <p
            style={{
              position: "relative",
              left: "160px",
              top: "-5px",
              fontSize: 24,
            }}
          >
            <b>Email</b>
          </p>

          <TextField
            id="standard"
            disabled={visibility}
            style={{
              position: "relative",
              left: "75px",
              top: "-25px",
              width: "260px",
            }}
            defaultValue={props.member.email}

            inputProps={{min: 0, style: { textAlign: 'center' }}}
          />
            
          <p
            style={{
              position: "relative",
              left: "136px",
              top: "-40px",
              fontSize: 24,
            }}
          >
            <b>Document</b>
          </p>

          <TextField
            id="standard"
            disabled={visibility}
            style={{
              position: "relative",
              left: "105px",
              top: "-60px",
              width: "auto",
              textAlign: "center",
            }}
            defaultValue={props.member.document}

            inputProps={{min: 0, style: { textAlign: 'center' }}}
          />
          {hidden && (
            <div>
              <p
                style={{
                  position: "relative",
                  left: "152px",
                  top: "-70px",
                  fontSize: 24,
                }}
              >
                <b>Chapter: </b>
              </p>
                <ul style={{
                  position: "relative",
                  left: "0px",
                  top: "-70px",
                  fontSize: 24,
                }}>
                {userChapters.length > 0 && userChapters.map(e => (<li>{e.Chapter.chapter_name}</li>))}
              </ul>
            </div>
          )}

          {!hidden && (
            <Button
              style={{ position: "relative", left: "-85px", top: "20px" }}
              hidden={true}
              variant="contained"
              color="default"
              className={classes.button}
              startIcon={<CloudUploadIcon />}
            >
              Upload
            </Button>
          )}
          <Button component={RouterLink} to={"/resetPassword"}>Reset password</Button>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
}
