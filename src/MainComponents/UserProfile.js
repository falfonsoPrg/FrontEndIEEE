import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { Redirect,Link as RouterLink  } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(28),
    height: theme.spacing(28),
  },
  small: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

export default function UserProfile(props) {
  const classes = useStyles();

  const [firstname, setFirstName] = useState(props.member.firstname)
  const [lastname, setLastname] = useState(props.member.lastname)
  const [cellphone, setCellphone] = useState(props.member.phone)
  const [email, setEmail] = useState(props.member.email)

  const [disabled, setDisabled] = useState(true)

  const userChapters =  props.member.Chapter_Members.length > 0 ? props.member.Chapter_Members : [] 

  const { handleLoader, openSnackbarByType } = props

  const sendData = (e) => {
    const userToUpdate = {
      member_id: props.member.member_id,
      firstname: firstname,
      lastname: lastname,
      phone: cellphone,
      email: email
    }
    handleLoader(true)
    axios.put(process.env.REACT_APP_ENDPOINT + "/members", userToUpdate).then(res => {
      handleLoader(false)
      props.member.firstname = userToUpdate.firstname
      props.member.lastname = userToUpdate.lastname
      props.member.phone = userToUpdate.phone
      props.member.email = userToUpdate.email
      setFirstName(userToUpdate.firstname)
      setLastname(userToUpdate.lastname)
      setCellphone(userToUpdate.phone)
      setEmail(userToUpdate.email)
      openSnackbarByType(true, "success", "Your data has been uptaded succesfully")
    }).catch(err => {
      handleLoader(false)
      openSnackbarByType(true, "error", "Something wrong happened! Try again")
    })
  }

  return (
    <Grid container style={{marginTop:20}}>
      {!props.auth && <Redirect to="/" />}
      <Grid item xs={4}>
      <Grid container justifyContent="center" alignItems="center" direction="row">
        <Paper elevation={3} >
          <Avatar
              src={props.member.image_path}
              className={classes.large}
            />
        </Paper>
      </Grid>
      </Grid>
      <Grid item xs={8}>

      <Grid container justifyContent="center" alignItems="center" direction="column" >
        <Paper style={{width:"100%"}}>
          <Box fontSize={20} textAlign="center" style={{ marginTop: 30 }}>
            Your data:
          </Box>
          <Grid item xs style={{ marginTop: 30 }}>
            <TextField
              id="firstname"
              label="First name"
              type="text"
              variant="outlined"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstname}
              disabled={disabled}
            />
          </Grid>
          <Grid item xs style={{ marginTop: 30 }}>
            <TextField
              id="lastname"
              label="Last name"
              type="text"
              variant="outlined"
              onChange={(e) => setLastname(e.target.value)}
              value={lastname}
              disabled={disabled}
            />
          </Grid>
          <Grid item xs style={{ marginTop: 30 }}>
            <TextField
              id="cellphone"
              label="Cellphone"
              type="text"
              variant="outlined"
              onChange={(e) => setCellphone(e.target.value)}
              value={cellphone}
              disabled={disabled}
            />
          </Grid>
          <Grid item xs style={{ marginTop: 30 }}>
            <TextField
              id="email"
              label="Email"
              type="text"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              disabled={disabled}
            />
          </Grid>


          <Grid item xs>
            {disabled && <Button onClick={() => setDisabled(false)}>Edit</Button>}
            {!disabled && <Button onClick={() => {
              setDisabled(true)
              sendData()
              }}>Send</Button>}
              <Button component={RouterLink} to={"/resetPassword"}>Reset password</Button>
          </Grid>
          
          <Box fontSize={20} textAlign="center" style={{ marginTop: 30 }}>
            Your chapters:
          </Box>
          <Grid item xs>
          {userChapters && userChapters.length > 0 && userChapters.map(e => (
            <List key={e.chapter_id}>
              <ListItem>
                <ListItemAvatar style={{width:"20%", height:"20%", marginRight:30}}>
                  {/* <Avatar src={e.Chapter.logo_path}
                    className={classes.small}
                    >
                  </Avatar> */}
                  <img alt={e.Chapter.logo_path} src={e.Chapter.logo_path} width="100%" height="100%"></img>
                </ListItemAvatar>
                <ListItemText primary={e.Chapter.chapter_name} secondary={e.Role.role_name} />
              </ListItem>
            </List>
          ))}
          </Grid>

        </Paper>
      </Grid>

      </Grid>
    </Grid>
  );
}
