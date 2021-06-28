import { React } from 'react'
import { useParams, Switch, useRouteMatch, Route, Link as RouterLink  } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CreateMember from './Members/CreateMember'
import AppBar from '@material-ui/core/AppBar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    appbar: {
        alignItems: 'center',
    },
    mt:{
        marginRight: 100,

    }
}));

export default function ChapterRoutes(props) {
    let { id } = useParams();
    let { path, url } = useRouteMatch();
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static" color="primary" className={classes.appbar}>
                <ButtonGroup size="large" disableElevation variant="contained" color="primary" aria-label="contained primary button group">
                    <Button className={classes.mt}>Gallery & Events</Button>
                    <Button className={classes.mt}>Three</Button>
                    <Button className={classes.mt} component={RouterLink} to={`${url}/createMember`}>Create member</Button>
                </ButtonGroup>{id}
            </AppBar>
            <Switch>
                <Route path={`${path}/createMember`}>
                    <CreateMember handleLoader={props.handleLoader} openSnackbarByType={props.openSnackbarByType}/>
                </Route>
                <Route exact path={path}>
                    <h3>Default route</h3>
                </Route>
            </Switch>
        </div>
    )
}
