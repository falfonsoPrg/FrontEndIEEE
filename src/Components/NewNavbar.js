import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';



import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CodeIcon from '@material-ui/icons/Code';
import EcoIcon from '@material-ui/icons/Eco';
import MemoryIcon from '@material-ui/icons/Memory';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import MainComponent from '../MainComponent';
import ChapterArea from '../ChapterArea';
import NavBar from './NavBar'
import RecoverPassword from './RecoverPassword';
import ContactUs from './ContactUs';
import Inicio from '../chapterComponent/Inicio';
import Login from '../chapterComponent/login'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{ background: '#0A1B2A' }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            IEEE El Bosque University
          </Typography>
          {auth && (<div style={{ marginLeft: 'auto'}}> Pedro Perez
            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <AccountCircleIcon style={{ color: 'white' }} />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
          )}
          {!auth && (<div style={{ marginLeft: 'auto'}}> Log in
            <IconButton component={Link} to="/Login">
              <VpnKeyIcon style={{ color: 'white' }} />
            </IconButton>
          </div>
          )}
        </Toolbar>
        
      </AppBar>
      
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {/* {['Computer', 'IAS', 'RAS', 'EMB'].map((text, index) => (
            <ListItem button key={text} component={Link} to={"/Chapter/"+index}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}

          <ListItem button key={"Computer"} component={Link} to={"/Chapter/"+0}>
            <ListItemIcon> <CodeIcon /> </ListItemIcon>
            <ListItemText primary={"Computer"} />
          </ListItem>
          <ListItem button key={"RAS"} component={Link} to={"/Chapter/"+1}>
            <ListItemIcon> <MemoryIcon /> </ListItemIcon>
            <ListItemText primary={"RAS"} />
          </ListItem>
          <ListItem button key={"EMB"} component={Link} to={"/Chapter/"+2}>
            <ListItemIcon> <EcoIcon /> </ListItemIcon>
            <ListItemText primary={"EMB"} />
          </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button key={"ContactUs"} component={Link} to="/ContactUs">
              <ListItemIcon><ContactSupportIcon /></ListItemIcon>
              <ListItemText primary={"Contact Us"} />
            </ListItem>
        </List>
      </Drawer>
      
      <main style={{    inlineSize: '-webkit-fill-available'}}>
        <div className={classes.toolbar} />
          <Switch>
            <Route path="/ContactUs" component={ContactUs}/>
            <Route path="/Login" component={Login}/>
            <Route path="/RecoverPassword" component={RecoverPassword}/>
            <Route path="/Chapter/:chapter_id" component={ChapterArea}/>

            <Route default component={MainComponent}/>
          </Switch>
          <footer>
            <h6>© 2021 IEEE - Universidad El Bosque Page All rights reserved.</h6>
          </footer>
      </main>
    </div>
  );
}
