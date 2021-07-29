import React, {useEffect, useState} from 'react'

import { Link as RouterLink } from 'react-router-dom';

import { Grid, Box, Paper, IconButton } from '@material-ui/core'

import { DataGrid } from '@material-ui/data-grid';

import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import axios from 'axios'

export default function MainAdminView(props) {

    const [chapters, setChapters] = useState([])
    const [members, setMembers] = useState([])
    const [roles, setRoles] = useState([])

    const chapterColumns = [
        {
            field: 'chapter_name',
            headerName: 'Name',
            flex: 1,
        },
        {
            field: 'description',
            headerName: 'Description',
            flex: 1,
        },
        {
            field: 'start_date',
            headerName: 'Start date',
            flex: 1,
            type: 'dateTime'
        },
        {
            field: 'end_date',
            headerName: 'End date',
            flex: 1,
            type: 'dateTime'
        },
        {
            field: 'isActive',
            headerName: 'Is active',
            flex: 1,
            type: 'boolean',
        },
        {
          field: 'chapter_id',
          headerName: 'Actions',
          flex: 1,
          sortable: false,
          filterable: false,
          renderCell: (params) => (
            <strong>
                <IconButton aria-label="view">
                    <VisibilityIcon />
                </IconButton>
                <IconButton aria-label="edit">
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="add">
                    <PersonAddIcon />
                </IconButton>
            </strong>
          ),
        },
    ];
    
    const memberColumns = [
        {
            field: 'firstname',
            headerName: 'First Name',
            flex: 1,
        },
        {
            field: 'lastname',
            headerName: 'Last Name',
            flex: 1,
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 1,
        },
        {
            field: 'document',
            headerName: 'Document',
            flex: 1,
        },
        {
            field: 'phone',
            headerName: 'Phone',
            flex: 1,
        },
        {
            field: 'member_id',
            headerName: 'Actions',
            flex: 0.5,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
              <strong>
                  <IconButton aria-label="edit">
                      <EditIcon />
                  </IconButton>
              </strong>
            ),
          },
    ]

    const roleColumns = [
        {
            field: 'role_name',
            headerName: 'Role Name',
            flex: 1,
        },
        {
            field: 'description',
            headerName: 'Description',
            flex: 1,
        },
        {
            field: 'canCreate',
            headerName: 'Can create',
            flex: 1,
            type: 'boolean',
        },
        {
            field: 'canUpdate',
            headerName: 'Can update',
            flex: 1,
            type: 'boolean',
        },
        {
            field: 'canDelete',
            headerName: 'Can delete',
            flex: 1,
            type: 'boolean',
        },
        {
            field: 'role_id',
            headerName: 'Actions',
            flex: 0.5,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
              <strong>
                  <IconButton aria-label="edit" component={RouterLink} to={"/admin/create/role/"+params.value}>
                      <EditIcon />
                  </IconButton>
              </strong>
            ),
          },
    ]

    const {handleLoader, openSnackbarByType} = props

    useEffect(() => {
        handleLoader(true)
        axios.get(process.env.REACT_APP_ENDPOINT + "/chapters").then((res) => {
            let chap = res.data.response
            chap.forEach(c => {
                c.id = c.chapter_id
            });
            setChapters(chap)
            handleLoader(false)
        }).catch((err) => {
            openSnackbarByType(true, "error", "Chapters couldn't be found")
            handleLoader(false)
        })
        handleLoader(true)
        axios.get(process.env.REACT_APP_ENDPOINT + "/members").then((res) => {
            let mem = res.data.response
            mem.forEach(m => {
                m.id = m.member_id
            });
            setMembers(mem)
            handleLoader(false)
        }).catch((err) => {
            openSnackbarByType(true, "error", "Members couldn't be found")
            handleLoader(false)
        })

        handleLoader(true)
        axios.get(process.env.REACT_APP_ENDPOINT + "/roles").then((res) => {
            let rol = res.data.response
            rol.forEach(r => {
                r.id = r.role_id
            });
            setRoles(rol)
            handleLoader(false)
        }).catch((err) => {
            openSnackbarByType(true, "error", "Roles couldn't be found")
            handleLoader(false)
        })
    }, [])
      
    return (
        <div>
            <Grid container>
                <Grid item xs></Grid>
                <Grid item xs>
                    <Box fontSize={20} textAlign="center" style={{marginTop: 30}}>Dashboard admin</Box>
                </Grid>
                <Grid item xs></Grid>
            </Grid>
            <Paper elevation={3} style={{marginTop: 30}}> 
                <Grid container>
                    <Grid item xs></Grid>
                    <Grid item xs>
                        <Box fontSize={20} textAlign="center" style={{marginTop: 30}}>Chapters</Box>
                    </Grid>
                    <Grid item xs>
                        <IconButton aria-label="add chapter" style={{marginTop: 30}}>
                            New <AddCircleIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item style={{height: 300, width: '95%', margin:20}}>
                        <DataGrid
                            loading={chapters.length === 0}
                            rows={chapters}
                            columns={chapterColumns}
                            pageSize={5}
                            disableSelectionOnClick
                        />
                    </Grid>
                </Grid>
            </Paper>

            <Paper elevation={3} style={{marginTop: 30}}> 
                <Grid container>
                    <Grid item xs></Grid>
                    <Grid item xs>
                        <Box fontSize={20} textAlign="center" style={{marginTop: 30}}>Members</Box>
                    </Grid>
                    <Grid item xs>
                        <IconButton aria-label="add member" style={{marginTop: 30}}  component={RouterLink} to="/admin/create/member/0">
                            New <AddCircleIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item style={{height: 300, width: '95%', margin:20}}>
                        <DataGrid
                            loading={members.length === 0}
                            rows={members}
                            columns={memberColumns}
                            pageSize={5}
                            disableSelectionOnClick
                        />
                    </Grid>
                </Grid>
            </Paper>


            <Paper elevation={3} style={{marginTop: 30}}> 
                <Grid container>
                    <Grid item xs></Grid>
                    <Grid item xs>
                        <Box fontSize={20} textAlign="center" style={{marginTop: 30}}>Roles</Box>
                    </Grid>
                    <Grid item xs>
                        <IconButton aria-label="add role" style={{marginTop: 30}} component={RouterLink} to="/admin/create/role/0">
                            New <AddCircleIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item style={{height: 300, width: '95%', margin:20}}>
                        <DataGrid
                            loading={roles.length === 0}
                            rows={roles}
                            columns={roleColumns}
                            pageSize={10}
                            disableSelectionOnClick
                        />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}