import React from "react";

import "date-fns";
import {
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
  Box,
} from "@material-ui/core/";
import { useParams}  from "react-router-dom";
import SendTwoToneIcon from "@material-ui/icons/Send";
import axios from "axios";



export default function CreateMissionVision(props) {
  let   {id}  = useParams();
  //Creating the mission, vision and goals
  const [mission,setMission] = React.useState({input: "",
  error: false});
  const [vision,setVision] = React.useState({input: "", error: false});
  const goals = 'This are the goals of the chapter'

  const submit = (e) => {
    e.preventDefault();

    const MissionandVision = {
      mission: mission.input,
      vission: vision.input,
      objectives: goals,
      chapter_id:parseInt(id)
    };
    if(verificationForm()){
    axios
      .post(process.env.REACT_APP_ENDPOINT+`/chaptersinfo/`, MissionandVision)
      .then(() => {
        props.openSnackbarByType(true, "success", "Mission and vision created successfully.");
      })
      .catch((res) => {
        props.openSnackbarByType(true, "error", "Error creating mission and vision");
      });
    }
  };

  const verificationForm = () => {
    if (vision.input.split(" ").length < 10 || mission.input.split(" ").length < 10) {
      props.openSnackbarByType(
        true,
        "error",
        "The vision and the mission should have at least 50 words"
      );
      setVision((input) => ({ ...input, error: true }));
      setMission((input) => ({ ...input, error: true }));
      return false;
    } else {
      return true;
    }
  };

  return (
    <div>
      <Box fontSize={20}  marginTop={"1%"}  >
        <Typography style={{ fontWeight: "bold", textAlign: "center"  }} variant="h4">
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
                    setMission((input) => ({ ...input, error: false }))
                  }
                  multiline
                  error={mission.error}
                  label="Mission of the Chapter"
                  rows={8}
                  fullWidth
                  onChange={(e) =>
                    setMission((error) => ({ ...error, input: e.target.value }))
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
                    setVision((input) => ({ ...input, error: false }))
                  }
                  multiline
                  error={vision.error}
                  label="Vision of the Chapter"
                  rows={8}
                  fullWidth
                  onChange={(e) =>
                    setVision((error) => ({ ...error, input: e.target.value }))
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
        style={{  alignItems: "center" }}
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
