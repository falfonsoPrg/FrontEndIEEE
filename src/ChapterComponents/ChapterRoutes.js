import { React } from "react";
import {
  Switch,
  useRouteMatch,
  Route,
  Link as RouterLink,
} from "react-router-dom";

import { makeStyles, AppBar, ButtonGroup, Button } from "@material-ui/core/";
import EventArea from "./Members/EventArea";
import MainChapterView from "./MainChapterView";

import CreateEvent from "./Forms/CreateEvent";
import CreateGallery from "./Forms/CreateGallery";
import CreateMissionVision from "./Forms/CreateMissionVision";

import CalendarArea from "./Calendars/CalendarArea";

const useStyles = makeStyles((theme) => ({
  appbar: {
    alignItems: "center",
    paddingLeft: "5%",
  },
  mt: {
    marginRight: 100,
  },
}));

export default function ChapterRoutes(props) {
  let { path, url } = useRouteMatch();
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" color="primary" className={classes.appbar}>
        <ButtonGroup
          size="large"
          disableElevation
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button className={classes.mt} component={RouterLink} to={`${url}`}>
            Main
          </Button>
          <Button
            className={classes.mt}
            component={RouterLink}
            to={`${url}/events`}
          >
            Gallery & Events
          </Button>
          <Button
            className={classes.mt}
            component={RouterLink}
            to={`${url}/calendar`}
          >
            Calendar
          </Button>
        </ButtonGroup>
      </AppBar>
      <Switch>
        <Route path={`${path}/events/createGallery`}>
          <CreateGallery
            handleLoader={props.handleLoader}
            openSnackbarByType={props.openSnackbarByType}
          />
        </Route>
        <Route path={`${path}/events/createEvent`}>
          <CreateEvent
            handleLoader={props.handleLoader}
            openSnackbarByType={props.openSnackbarByType}
          />
        </Route>
        <Route path={`${path}/events`}>
          <EventArea
            handleLoader={props.handleLoader}
            openSnackbarByType={props.openSnackbarByType}
          />
        </Route>
        <Route path={`${path}/calendar`}>
          <CalendarArea
            handleLoader={props.handleLoader}
            openSnackbarByType={props.openSnackbarByType}
          />
        </Route>
        <Route path={`${path}/createMissionAndVision`}>
          <CreateMissionVision
            handleLoader={props.handleLoader}
            openSnackbarByType={props.openSnackbarByType}
          />
        </Route>
        <Route path={path}>
          <MainChapterView
            handleLoader={props.handleLoader}
            openSnackbarByType={props.openSnackbarByType}
          />
        </Route>
      </Switch>
    </div>
  );
}
