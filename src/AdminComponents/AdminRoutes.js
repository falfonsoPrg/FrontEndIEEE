import React from 'react'
import { Switch, Route } from "react-router-dom";

import MainAdminView from './MainAdminView'
import CreateRole from './Forms/CreateRole'
import CreateMember from './Forms/CreateMember'
import CreateChapter from './Forms/CreateChapter';
import AddMemberToChapter from './Forms/AddMemberToChapter'
export default function AdminRoutes(props) {
    return (
        <Switch>
            <Route path="/admin/create/member/:member_id">
                <CreateMember handleLoader={props.handleLoader} openSnackbarByType={props.openSnackbarByType}/>
            </Route>
            <Route path="/admin/create/chapter/:chapter_id">
                <CreateChapter handleLoader={props.handleLoader} openSnackbarByType={props.openSnackbarByType} getChapters={props.getChapters}/>
            </Route>
            <Route path="/admin/add/chapter/:chapter_id">
                <AddMemberToChapter handleLoader={props.handleLoader} openSnackbarByType={props.openSnackbarByType}/>
            </Route>
            <Route path="/admin/create/role/:role_id">
                <CreateRole handleLoader ={props.handleLoader} openSnackbarByType={props.openSnackbarByType}/>
            </Route>
            <Route default path="/admin">
                <MainAdminView handleLoader={props.handleLoader} openSnackbarByType={props.openSnackbarByType}/>
            </Route>
        </Switch>
    )
}
