import { React, useState } from "react";

import "date-fns";
import { useHistory, useParams } from "react-router-dom";

import {
  TextField,
  Paper,
  Container,
  Grid,
  Button,
  Box,
} from "@material-ui/core";
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import axios from "axios";


export default function UserProfile(props) {
  const history = useHistory();

  const {event_id} = useParams()

  const [photo, setPhoto] = useState();
  const [photoName, setPhotoName] = useState("");
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [photosToUpload, setPhotosToUpload] = useState([])

  const [progress, setProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [summary, setSummary] = useState("")

  const { handleLoader, openSnackbarByType } = props;

  const handleCapture = ({ target }) => {
    const fileReader = new FileReader();
    const name = target.files[0] !== undefined ? target.files[0].name : "";
    setPhotoName(name);
    if (target.files[0] !== undefined) {
      fileReader.readAsDataURL(target.files[0]);
      fileReader.onload = (e) => {
        setPhoto(e.target.result);
      };
    }
    target.value = ""
  };

  const validateForm = () => {
    if(photo === "") {
      openSnackbarByType(true, "error", "Please select a photo")
      return false
    }
    else if(title === "") {
      openSnackbarByType(true, "error", "Please provide a title") 
      return false
    }
    else if(description === ""){
      openSnackbarByType(true, "error", "Please provide a description") 
      return false
    } 
    return true
  }

  const addPhoto = () => {
    if(!validateForm()){
      return
    }
    let newPhoto = {
      title: title,
      description: description,
      name: photoName,
      photo: photo
    }
    setPhotosToUpload([...photosToUpload, newPhoto])
    setTitle("")
    setDescription("")
    setPhotoName("")
    setPhoto("")
  }

  const remove = (index) => {
    photosToUpload.splice(index,1)
    setPhotosToUpload([...photosToUpload])
  }

  const submit = async () => {
    setIsUploading(true)
    handleLoader(true)
    var succeded = 0
    var error = 0
    for (let i = 0; i < photosToUpload.length; i++) {
      const p = photosToUpload[i];
      let gallery = {
        gallery_name: p.title,
        description: p.description,
        path: p.photo,
        event_id: event_id
      }
      await axios.post(process.env.REACT_APP_ENDPOINT + "/galleries/",gallery)
      .then(res => {
        succeded = succeded + 1
      }).catch(err => {
        error = error + 1
      })
      setProgress(parseInt( ((succeded+error) / photosToUpload.length)*100 ))
    }

    handleLoader(false)
    setSummary("Photos Succeded: "+ succeded + "/" + photosToUpload.length + " and Photos not succeded: "+ error+"/"+photosToUpload.length)
    setProgress(0)
    setPhotosToUpload([])
    setIsUploading(false)
  };
  const goBack = () => {
    history.goBack();
  };


  function LinearProgressWithLabel(props) {
    return (
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" color="textSecondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }


  return (
    <Container maxWidth="sm" style={{ marginTop: 60, boxShadow: 6 }}>
      <Paper
        elevation={3}
        style={{ borderRadius: 25, boxShadow: 5, background: "#F9F9F9", marginBottom:30 }}
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
                onChange={handleCapture}
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
                {photoName !== "" && <div>{photoName}</div>}
              </label>

              <p style={{ textAlign: "center", marginTop: 6, fontSize: 20 }}>
                <b>Title</b>
              </p>

              <TextField
                id="gallery_name"
                style={{ marginLeft: 40, marginTop: -3, height: 65 }}
                label="Title"
                variant="outlined"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
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
                value={description}
                maxRows={8}
                aria-label="maximum height"
                placeholder="Maximum 8 rows"
                onChange={(e) => setDescription(e.target.value)}
              />

              <div>
              <Button
                  style={{ marginTop: 35 }}
                  variant="contained"
                  color="primary"
                  onClick={goBack}
                >
                  Back
                </Button>
                <Button
                  style={{ marginTop: 35, marginLeft: 73, marginRight: 20 }}
                  variant="contained"
                  color="primary"
                  onClick={addPhoto}
                >
                  Add
                </Button>
              </div>
            </form>
          </Grid>

          <Grid item xs></Grid>
        </Grid>
      </Paper>

      <Paper
        elevation={3}>

            <Box fontSize={30} textAlign="center" style={{ paddingTop: 30 }}>
              <b>Photos to upload</b>
            </Box>

          <div style={{padding:15}}>
            <ul>
              {photosToUpload && photosToUpload.length > 0 && (
                photosToUpload.map((p, i) => {
                  return (
                    <div key={i}>
                      <li>{p.title} - {p.name}</li>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => remove(i)}>Remove</Button>
                    </div>
                  )
                })
              )}

          {isUploading && photosToUpload.length !== 0 && (<LinearProgressWithLabel style={{marginBottom:10,marginLeft:10, marginTop: 30}} value={progress} />)}
            {summary}<br/>
              {photosToUpload && photosToUpload.length > 0 && (
                <Button
                style={{ marginTop: 35, marginLeft: 73, marginRight: 20 }}
                variant="contained"
                color="primary"
                onClick={async () => await submit()}
              >
                Upload photos
              </Button>
              )}  

              {photosToUpload && photosToUpload.length === 0 && ("There are no photos to upload")}
            </ul>
          </div>
          

        </Paper>
    </Container>
  );
}
