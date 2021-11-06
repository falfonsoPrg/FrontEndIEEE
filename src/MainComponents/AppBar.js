import React from "react";
import { useEffect } from "react";
import clsx from "clsx";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  ListItem,
  ListItemText,
  MenuItem,
  Menu,
  Backdrop,
  CircularProgress,
  Snackbar,
} from "@material-ui/core/";

import MuiAlert from "@material-ui/lab/Alert";

//ICONS
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import IconButton from "@material-ui/core/IconButton";
import SecurityIcon from "@material-ui/icons/Security";

import axios from "axios";
import AppRoutes from "./AppRoutes";
import ValidatePermissions from "../ValidatePermissions";
import CustomIcon from "../SharedComponents/CustomIcon";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();

  const [open, setOpen] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);
  const [auth, setAuth] = React.useState(
    localStorage.getItem("auth") ? localStorage.getItem("auth") : false
  );
  const [member, setMember] = React.useState(
    localStorage.getItem("member")
      ? JSON.parse(localStorage.getItem("member"))
      : {
          firstname: "Default",
          phone: "0",
          document: "0",
          lastname: "User",
          email: "na@na.com",
          member_id: -1,
        }
  );

  const [roles, setRoles] = React.useState(
    localStorage.getItem("roles")
      ? JSON.parse(localStorage.getItem("roles"))
      : []
  );

  const [chapters, setChapters] = React.useState([]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openLoader, setOpenLoader] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackBarType, setSnackBarType] = React.useState("error");
  const [snackBarMessage, setSnackBarMessage] =
    React.useState("Default Message!");

  const handleCloseLoader = () => {
    //setOpenLoader(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  const openSnackbarByType = (pBool, pType, pMessage) => {
    setSnackBarType(pType);
    setOpenSnackbar(pBool);
    setSnackBarMessage(pMessage);
  };

  const getChapters = () => {
    setOpenLoader(true);
    axios
      .get(process.env.REACT_APP_ENDPOINT + "/chapters")
      .then((res) => {
        setChapters(res.data.response);
        setOpenLoader(false);
      })
      .catch((err) => {
        setOpenLoader(false);
        openSnackbarByType(true, "error", "Something wrong happen!");
      });
  };

  useEffect(() => {
    getChapters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
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

          <Typography variant="h2" className={classes.title} noWrap>
            <IconButton
              color="inherit"
              fontSize="large"
              component={RouterLink}
              to="/"
            >
              IEEE El Bosque University
            </IconButton>
          </Typography>
          {auth && (
            <div>
              {member.firstname + " " + member.lastname}
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={openMenu}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={handleClose}
                  component={RouterLink}
                  to="/userProfile"
                >
                  Profile
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setAnchorEl(null);
                    setOpenMenu(false);
                    setAuth(false);
                    setRoles([]);
                    localStorage.removeItem("auth");
                    localStorage.removeItem("member");
                    localStorage.removeItem("roles");
                    openSnackbarByType(true, "info", "Logout successfully!");
                    history.push("/");
                  }}
                >
                  Log out
                </MenuItem>
              </Menu>
            </div>
          )}
          {!auth && (
            <div>
              Log in
              <IconButton component={RouterLink} to="/login">
                <VpnKeyIcon style={{ color: "white" }} />
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
          {handleDrawerClose ? (
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              {" "}
              Chapters
            </Typography>
          ) : (
            ""
          )}
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {chapters &&
            chapters.length > 0 &&
            chapters.map((chapter, index) => (
              <ListItem
                button
                key={index}
                component={RouterLink}
                to={"/chapter/" + chapter.chapter_id}
              >
                <ListItemIcon>
                  <CustomIcon name={chapter.icon} />
                </ListItemIcon>
                <ListItemText primary={chapter.acronym} />
              </ListItem>
            ))}
        </List>
        <Divider />
        <List>
          <ListItem
            button
            key={"Contact Us"}
            component={RouterLink}
            to="/contactUs"
          >
            <ListItemIcon>
              <CustomIcon name="fas fa-mail-bulk" />
            </ListItemIcon>
            <ListItemText primary={"Contact Us"} />
          </ListItem>
          {ValidatePermissions.isAdmin(roles) && (
            <ListItem
              button
              key={"Dashboard Admin"}
              component={RouterLink}
              to="/admin"
            >
              <ListItemIcon>
                <CustomIcon name="fas fa-user-shield" />
              </ListItemIcon>
              <ListItemText primary={"Dashboard Admin"} />
            </ListItem>
          )}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Backdrop
          className={classes.backdrop}
          open={openLoader}
          onClick={handleCloseLoader}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackBar}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <div>
            {snackBarType === "success" && (
              <Alert onClose={handleCloseSnackBar} severity="success">
                {snackBarMessage}
              </Alert>
            )}
            {snackBarType === "error" && (
              <Alert onClose={handleCloseSnackBar} severity="error">
                {snackBarMessage}
              </Alert>
            )}
            {snackBarType === "warning" && (
              <Alert onClose={handleCloseSnackBar} severity="warning">
                {snackBarMessage}
              </Alert>
            )}
            {snackBarType === "info" && (
              <Alert onClose={handleCloseSnackBar} severity="info">
                {snackBarMessage}
              </Alert>
            )}
          </div>
        </Snackbar>
        <AppRoutes
          auth={auth}
          handleAuth={setAuth}
          handleLoader={setOpenLoader}
          openSnackbarByType={openSnackbarByType}
          setMember={setMember}
          member={member}
          getChapters={getChapters}
          roles={roles}
          setRoles={setRoles}
        />
      </main>
    </div>
  );
}
