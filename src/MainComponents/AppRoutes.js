import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from './Login'
import ForgotPassword from './ForgotPassword'
import Main from './Main'
import ContactUs from './ContactUs'
import ChapterRoutes from '../ChapterComponents/ChapterRoutes'
import EventArea from '../ChapterComponents/Members/EventArea'

export default function AppRoutes(props) {
    return (
        <Switch>
            <Route path="/chapter/:id/events">
                <EventArea/>
            </Route>
            <Route path="/login">
                <Login auth={props.auth} setAuth={props.handleAuth} handleLoader={props.handleLoader} openSnackbarByType={props.openSnackbarByType} setMember={props.setMember}/>
            </Route>
            <Route path="/forgotPassword">
                <ForgotPassword auth={props.auth} setAuth={props.handleAuth} />
            </Route>
            <Route path="/contactUs">
                <ContactUs />
            </Route>
            <Route path="/chapter/:id">
                <ChapterRoutes handleLoader={props.handleLoader} openSnackbarByType={props.openSnackbarByType}/>
            </Route>
            
            <Route default path="/" component={Main}/>
        </Switch>
    )
}
