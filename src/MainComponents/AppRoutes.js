import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import Main from "./Main";
import ContactUs from "./ContactUs";
import ChapterRoutes from "../ChapterComponents/ChapterRoutes";
import UserProfile from "./UserProfile";
import CreateGallery from "../ChapterComponents/Forms/CreateGallery"
import CreateEvent from "../ChapterComponents/Forms/CreateEvent"
import AdminRoutes from '../AdminComponents/AdminRoutes'

export default function AppRoutes(props) {
  return (
    <Switch>  
      <Route path="/login">
        <Login
          auth={props.auth}
          setAuth={props.handleAuth}
          handleLoader={props.handleLoader}
          openSnackbarByType={props.openSnackbarByType}
          setMember={props.setMember}
        />
      </Route>
      <Route path="/forgotPassword">
        <ForgotPassword auth={props.auth} setAuth={props.handleAuth} />
      </Route>
      <Route path="/contactUs">
        <ContactUs />
      </Route>
      <Route path="/chapter/:id">
        <ChapterRoutes
          handleLoader={props.handleLoader}
          openSnackbarByType={props.openSnackbarByType}
        />
      </Route>

      <Route path="/userProfile">
        <UserProfile member={props.member} auth={props.auth} />
      </Route>

      <Route path="/admin">
        <AdminRoutes 
          member={props.member} 
          auth={props.auth} 
          handleLoader={props.handleLoader}
          openSnackbarByType={props.openSnackbarByType} 
        />
      </Route>

      <Route path="/creategallery">
        <CreateGallery />
      </Route>
      <Route path="/createEvent">
        <CreateEvent/>
      </Route>

      <Route default path="/" component={Main} />
    </Switch>
  );
}
