import React from "react";
import { useEffect, useState } from "react";
import { useParams,useRouteMatch, Link as RouterLink} from "react-router-dom";
import {
  Typography,
  Paper,
  Grid,
  Box,
  Container,
  Button,
} from "@material-ui/core";

import Card from "../SharedComponents/Card";
import axios from "axios";
import Slider from "../SharedComponents/MainSlider";
import ValidatePermissions from "../ValidatePermissions";

export default function MainChapterView(props) {
  const [chapter, setChapter] = useState({
    chapter_id: -1,
    chapter_name: "Default name",
    description: "Default description",
    logo_path: "default image",
    start_date: new Date(),
    end_date: new Date(),
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    Events: [],
    Chapter_Members: [],
    Chapter_Infos: [],
  });
  const [chapterInfo, setChapterInfo] = useState({
    mission: "",
    vission: "",
    objectives: "",
  });
  const [bannerMembers, setBannerMembers] = useState({
    images: [],
  });
  const { handleLoader, openSnackbarByType } = props;
  let { id } = useParams();
  let { url } = useRouteMatch();

  useEffect(() => {
    handleLoader(true);
    axios
      .get(process.env.REACT_APP_ENDPOINT + `/chaptersinfo/`)
      .then((response) => {
        let info = response.data.response;
        for (const i in info) {
          if (response.data.response[i].chapter_id == id) {
            setChapterInfo(response.data.response[i]);
            break;
          } else {
            setChapterInfo({
              mission: "",
              vission: "",
              objectives: "",
            });
          }
        }
      });
    axios
      .get(process.env.REACT_APP_ENDPOINT + "/chapters/" + id)
      .then((res) => {
        setChapter(res.data.response);
        if (
          res.data.response?.Chapter_Members &&
          res.data.response.Chapter_Members.length > 0
        ) {
          let mem = res.data.response.Chapter_Members.map((m) => {
            return {
              path: m.Member.image_path,
              legend:
                m.Role.role_name +
                " - " +
                m.Member.firstname +
                " " +
                m.Member.lastname,
            };
          });
          let images = {
            images: mem,
          };
          setBannerMembers(images);
        } else {
          setBannerMembers({});
        }
        if (
          res.data.response?.Chapter_Infos &&
          res.data.response.Chapter_Infos.length > 0
        ) {
          let filtered = res.data.response.Chapter_Infos.filter(
            (ci) => ci.chapter_id === id
          );
          if (filtered.length > 0) {
            setChapterInfo(filtered[0]);
          }
        }
        handleLoader(false);
      })
      .catch((err) => {
        openSnackbarByType(true, "error", "Chapter couldn't be fetched");
        handleLoader(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <Paper style={{ marginTop: 20, padding: 20 }}>
      <Box fontSize={20} textAlign="center">
        <Typography style={{ fontWeight: "bold" }} variant="h4">
          {chapter.chapter_name}
        </Typography>
      </Box>
      <Grid container spacing={1} style={{ marginTop: 20 }}>
        <Grid item xs={6}>
          <Box fontSize={20} textAlign="center">
            <Typography style={{ fontWeight: "bold" }} variant="h5">
              General description
            </Typography>
          </Box>
          <Paper elevation={0} style={{ padding: 10 }}>
            <Box fontSize={10} textAlign="center">
              <Typography style={{ textAlign: "justify" }}>
                {chapter.description}
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={2} style={{ padding: 10 }}>
            <Container>
              <img src={chapter.logo_path} alt="logo" width="100%"></img>
            </Container>
          </Paper>
        </Grid>

        <Grid item xs style={{ marginTop: 50, marginBottom: 10 }}>
          <Card
            width={600}
            imagePath="../assets/IeeeMission.jpg"
            imageTitle="Mission"
            cardTitle="Mission"
            cardDescription={chapterInfo.mission}
          />
        </Grid>
        <Grid item xs style={{ marginTop: 50, marginBottom: 10 }}>
          <Card
            width={600}
            imagePath="../assets/IeeeVision.jpg"
            imageTitle="Vision"
            cardTitle="Vision"
            cardDescription={chapterInfo.vission}
          />
        </Grid>
        <Grid item xs={12} style={{ marginTop: 50 }}>
          {ValidatePermissions.canUpdate(props.roles) && (
            <Button
              variant="contained"
              color="primary"
              component={RouterLink}
              to={`${url}/createMissionandVision`}
            >
              Edit mission and vission
            </Button>
          )}
        </Grid>
        <Grid item xs={12} style={{ marginTop: 50 }}>
          <Box fontSize={20} textAlign="center">
            <Typography style={{ fontWeight: "bold" }} variant="h4">
              Members of {chapter.chapter_name}
            </Typography>
          </Box>
          <Grid style={{ marginTop: 20 }}>
            <Slider
              selectedItem={1}
              timeTransition={500}
              images={bannerMembers}
              marginRight={10}
              imageHeight={290}
              centerSlidePercentage={25}
              showLegend={true}
            />
          </Grid>
          <br />
        </Grid>
      </Grid>
    </Paper>
  );
}
