import React, { useEffect } from "react";

import "date-fns";
import {
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
  Box,
} from "@material-ui/core/";
import { useParams } from "react-router-dom";
import SendTwoToneIcon from "@material-ui/icons/Send";

export default function CreateMission(props) {
  let { chapter_id } = useParams();

  const [title, setTitle] = React.useState({ input: "a", error: false });
  const [description, setDescription] = React.useState({
    input: "",
    error: false,
  });

  const [verification, setVerification] = React.useState(false);

  const submit = (e) => {
    e.preventDefault();

    verificationForm();
    /*  
      axios
        .post(process.env.REACT_APP_ENDPOINT + "/chapters/"+chapter_id)
        .then((res) => {
          console.log(res)
          props.openSnackbarByType(
            true,
            "success",
            "Event created succesfully"
          );
          props.handleLoader(false);
        })
        .catch((err) => {
          console.log(err+"err")
          props.openSnackbarByType(
            true,
            "error",
            "Event couldn't be created succesfully"
          );

          props.handleLoader(false);
        });
    */
  };

  const verificationForm = () => {
    console.log(title.input);
    if (!description.input || description.input.split(" ").length < 80) {
      setVerification(false);
      props.openSnackbarByType(
        true,
        "error",
        "You need to provide a description with almost 80 words"
      );
      setDescription((input) => ({ ...input, error: true }));
    } else {
      setVerification(true);
    }
  };
  return (
    <div>
      <Box fontSize={20} textAlign="center" marginTop={"1%"}>
        <Typography style={{ fontWeight: "bold" }} variant="h4">
          Update the mission and vision
        </Typography>
      </Box>
      <Grid
        container
        alignItems="center"
        justifyContent="space-around"
        style={{ height: "500px", marginTop: "-4%" }}
      >
        <Grid item xs={5}>
          <Paper xelevation={3}>
            <Grid
              item
              xs={12}
              align="center"
              style={{ marginLeft: 10, marginRight: 10 }}
            >
              <br />
              <Grid
                item
                xs={12}
                textAlign="center"
                justifyContent="center"
                style={{
                  width: "100%",
                  height: "120px",
                  backgroundImage: `url("../../assets/IeeeMission.jpg")`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <Typography
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                  }}
                  variant="h4"
                >
                  <br />
                  Mission
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ margin: 10 }}>
                <TextField
                  onClick={() =>
                    setTitle((input) => ({ ...input, error: false }))
                  }
                  multiline
                  error={title.error}
                  label="Mission of the Chapter"
                  rows={8}
                  fullWidth
                  onChange={(e) =>
                    setTitle((error) => ({ ...error, input: e.target.value }))
                  }
                />
              </Grid>
              <br />
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={5}>
          <Paper xelevation={3}>
            <Grid
              item
              xs={12}
              align="center"
              style={{ marginLeft: 10, marginRight: 10 }}
            >
              <br />

              <Grid
                item
                xs={12}
                textAlign="center"
                justifyContent="center"
                style={{
                  width: "100%",
                  height: "130px",
                  backgroundImage: `url("../../assets/IeeeVision.jpg")`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <Typography
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                  }}
                  variant="h4"
                >
                  <br />
                  Vision
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ margin: 10 }}>
                <TextField
                  onClick={() =>
                    setTitle((input) => ({ ...input, error: false }))
                  }
                  multiline
                  error={title.error}
                  label="Vision of the Chapter"
                  rows={8}
                  fullWidth
                  onChange={(e) =>
                    setTitle((error) => ({ ...error, input: e.target.value }))
                  }
                />
              </Grid>

              <br />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Button
          variant="contained"
          endIcon={<SendTwoToneIcon />}
          onClick={submit}
        >
          Update
        </Button>
      </Grid>
    </div>
  );
}
