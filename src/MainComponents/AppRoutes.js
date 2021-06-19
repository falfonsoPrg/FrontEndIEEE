import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from './Login'
import ForgotPassword from './ForgotPassword'
import Main from './Main'

export default function AppRoutes(props) {
    return (
        <Switch>
            <Route path="/login">
                <Login auth={props.auth} setAuth={props.handleAuth} handleLoader={props.handleLoader} openSnackbarByType={props.openSnackbarByType} setMember={props.setMember}/>
            </Route>
            <Route path="/forgotPassword">
                <ForgotPassword auth={props.auth} setAuth={props.handleAuth} />
            </Route>
            <Route default path="/" component={Main}/>
        </Switch>
    )
}
