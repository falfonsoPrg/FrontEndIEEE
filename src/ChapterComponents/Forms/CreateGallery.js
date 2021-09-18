import { React, useState } from "react";

import "date-fns";
import { useHistory } from "react-router-dom";

import {
  TextField,
  Paper,
  Container,
  Grid,
  Button,
  Box,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import axios from "axios";


export default function UserProfile(props) {
  const history = useHistory();

  const [photoNames, setphotoNames] = useState([]);

  const [Photo, setPhoto] = useState();
  const [photoTitle, setPhotoName] = useState("");
  
  const [description, setdescription] = useState("");
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
  };

  const submit = () => {

    
    const gallery = {
      galley_name: photoNames,
      path: Photo,
      description: description,
    };
    localStorage.setItem('gallery',JSON.stringify(gallery))
    console.log(localStorage.getItem('gallery') + "esto es la galeria")
    handleLoader(true);
    axios
      .post(process.env.REACT_APP_ENDPOINT + "/galleries", gallery)
      .then(() => {
        openSnackbarByType(
          true,
          "success",
          "the photo has been uploaded successfully"
        );
        handleLoader(false);
        goBack();
      })
      .catch((e) => {
        openSnackbarByType(
          true,
          "error",
          e.response.data.error !== undefined
            ? e.response.data.error
            : "the photo could not be uploaded successfully"
        );
        handleLoader(false);
      });
    console.log(gallery);

  };
  const goBack = () => {
    history.goBack();
  };

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
                {photoTitle !== "" && <>{photoTitle}</>}
              </label>

              <p style={{ textAlign: "center", marginTop: 6, fontSize: 20 }}>
                <b>Title</b>
              </p>

              <TextField
                id="gallery_name"
                style={{ marginLeft: 40, marginTop: -3, height: 65 }}
                label="Title"
                variant="outlined"
                onChange={(e) => setphotoNames(e.target.value)}
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
                onChange={(e) => setdescription(e.target.value)}
              />

              <div>
                <Button
                  style={{ marginTop: 35, marginLeft: 73, marginRight: 20 }}
                  variant="contained"
                  color="primary"
                  onClick={submit}
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
