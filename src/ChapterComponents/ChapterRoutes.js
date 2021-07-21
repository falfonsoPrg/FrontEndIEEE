import { React } from 'react'
import { Switch, useRouteMatch, Route, Link as RouterLink  } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import CreateMember from './Forms/CreateMember'
import CreateChapter from './Forms/CreateChapter'
import MainChapterView from './MainChapterView'

const useStyles = makeStyles((theme) => ({
    appbar: {
        alignItems: 'center',
    },
    mt:{
        marginRight: 100,

    }
}));

export default function ChapterRoutes(props) {
    let { path, url } = useRouteMatch();
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static" color="primary" className={classes.appbar}>
                <ButtonGroup size="large" disableElevation variant="contained" color="primary" aria-label="contained primary button group">
                    <Button className={classes.mt} component={RouterLink} to={`${url}`}>Main</Button>
                    <Button className={classes.mt} component={RouterLink} to={`${url}/events`}>Gallery & Events</Button>
                    <Button className={classes.mt} component={RouterLink} to={`${url}/createMember`}>Create member</Button>
                    <Button className={classes.mt} component={RouterLink} to={`${url}/createChapter`}>Create Chapter</Button>
                </ButtonGroup>
            </AppBar>
            <Switch>
                <Route path={`${path}/createMember`}>
                    <CreateMember handleLoader={props.handleLoader} openSnackbarByType={props.openSnackbarByType}/>
                </Route>
                <Route path={`${path}/createChapter`}>
                    <CreateChapter handleLoader={props.handleLoader} openSnackbarByType={props.openSnackbarByType}/>
                </Route>
                <Route path={path}>
                    <MainChapterView handleLoader={props.handleLoader} openSnackbarByType={props.openSnackbarByType}/>
                </Route>
            </Switch>
        </div>
    )
}
