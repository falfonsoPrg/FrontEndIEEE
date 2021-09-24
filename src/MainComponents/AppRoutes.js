import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./Login";
import ResetPassword from "./ResetPassword";
import ForgotPassword from "./ForgotPassword";
import Main from "./Main";
import ContactUs from "./ContactUs";
import ChapterRoutes from "../ChapterComponents/ChapterRoutes";
import UserProfile from "./UserProfile";
import AdminRoutes from "../AdminComponents/AdminRoutes";
import ImgList from "../SharedComponents/ImgList";
import ValidatePermissions from "../ValidatePermissions";

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
          setRoles={props.setRoles}
        />
      </Route>
      <Route path="/resetPassword">
        <ResetPassword
          auth={props.auth}
          handleLoader={props.handleLoader}
          openSnackbarByType={props.openSnackbarByType}
          member={props.member}
        />
      </Route>
      <Route path="/forgotPassword">
        <ForgotPassword
          auth={props.auth}
          setAuth={props.handleAuth}
          handleLoader={props.handleLoader}
          openSnackbarByType={props.openSnackbarByType}
        />
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
      <Route path="/imageList">
        <ImgList
          handleLoader={props.handleLoader}
          openSnackbarByType={props.openSnackbarByType}
        />
      </Route>
      <Route path="/userProfile">
        <UserProfile 
        member={props.member} 
        auth={props.auth} 
        chapters={props.chapters}
        handleLoader={props.handleLoader}
        openSnackbarByType={props.openSnackbarByType} />
      </Route>
      {ValidatePermissions.isAdmin(props.roles) && (
        <Route path="/admin">
          <AdminRoutes
            member={props.member}
            auth={props.auth}
            handleLoader={props.handleLoader}
            openSnackbarByType={props.openSnackbarByType}
            getChapters={props.getChapters}
          />
        </Route>
      )}

      <Route default path="/" component={Main} />
    </Switch>
  );
}
