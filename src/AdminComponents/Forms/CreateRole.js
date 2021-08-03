import {React, useState, useEffect} from 'react'
import { useHistory, useParams} from "react-router-dom";
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Paper, Container, Grid, Button, Box, Checkbox, FormControlLabel } from '@material-ui/core';

import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    form: {
        '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        },
    },
    button: {
        margin: theme.spacing(1),
    },
}));

export default function CreateChapter(props) {
    const classes = useStyles();
    const history = useHistory()
    let { role_id } = useParams();

    const [roleName, setRoleName] = useState("")
    const [description, setDescription] = useState("")

    const [canCreate, setCanCreate] = useState(false)
    const [canDelete, setCanDelete] = useState(false)
    const [canUpdate, setCanUpdate] = useState(false)

    
    const { handleLoader, openSnackbarByType } = props

    const submit = (e) => {
        e.preventDefault()
        if(role_id === "0"){
            const role = {
                role_name: roleName,
                description: description,
                canCreate: canCreate,
                canDelete: canDelete,
                canUpdate: canUpdate,
            }
            handleLoader(true)
            axios.post(process.env.REACT_APP_ENDPOINT + "/roles", role).then(() => {
                openSnackbarByType(true, "success", "Role created succesfully")
                handleLoader(false)
                goBack()
            }).catch((e)=> {
                openSnackbarByType(true,"error", e.response.data.error !== undefined ? e.response.data.error : "Role couldn't be created succesfully")
                handleLoader(false)
            })
        }else{
            const role = {
                role_id: role_id,
                role_name: roleName,
                description: description,
                canCreate: canCreate,
                canDelete: canDelete,
                canUpdate: canUpdate,
            }
            handleLoader(true)
            axios.put(process.env.REACT_APP_ENDPOINT + "/roles", role).then(() => {
                openSnackbarByType(true, "success", "Role updated succesfully")
                handleLoader(false)
                goBack()
            }).catch((e)=> {
                openSnackbarByType(true,"error", e.response.data.error !== undefined ? e.response.data.error : "Role couldn't be updated succesfully")
                handleLoader(false)
            })
        }
        
    }

    useEffect(() => {
        if(role_id !== "0"){
            handleLoader(true)
            axios.get(process.env.REACT_APP_ENDPOINT + "/roles/" + role_id).then((res) => {
                let rol = res.data.response
                setRoleName(rol.role_name)
                setDescription(rol.description)
                setCanCreate(rol.canCreate)
                setCanDelete(rol.canDelete)
                setCanUpdate(rol.canUpdate)
                handleLoader(false)
            }).catch((e)=> {
                openSnackbarByType(true,"error", e.response.data.error !== undefined ? e.response.data.error : "Role couldn't be fetched")
                handleLoader(false)
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const goBack = () => {
        history.goBack()
    }
    return (
        <Container maxWidth="sm" style={{marginTop: 60}}>
            <Paper elevation={3}>
                <Grid container spacing={3}>
                    <Grid item xs>
                    </Grid>
                    <Grid item xs>
                        <Box fontSize={20} textAlign="center" style={{marginTop: 30}}>{role_id === "0" ? "Create":"Edit"} Role </Box>
                        <form className={classes.form} noValidate autoComplete="off" onSubmit={submit}>
                            <TextField id="roleName" label="Role Name *" type="text" variant="outlined" onChange={(e) => setRoleName(e.target.value)} value={roleName}/>
                            <TextField id="description" label="Description *" type="text" variant="outlined" onChange={(e) => setDescription(e.target.value)} value={description}/>

                            <FormControlLabel
                                value="Can create *"
                                control={<Checkbox color="primary" checked={canCreate}
                                onChange={() => {setCanCreate(!canCreate)}}/>}
                                label="Can create *"
                                labelPlacement="Can create"
                            />
                            <FormControlLabel
                                value="Can update *"
                                control={<Checkbox color="primary" checked={canUpdate}
                                onChange={() => {setCanUpdate(!canUpdate)}}/>}
                                label="Can update *"
                                labelPlacement="Can update"
                            />
                            <FormControlLabel
                                value="Can delete *"
                                control={<Checkbox color="primary" checked={canDelete}
                                onChange={() => {setCanDelete(!canDelete)}}/>}
                                label="Can delete *"
                                labelPlacement="Can delete"
                            />

                        <div className={classes.button}>
                            <Button variant="contained" color="primary" onClick={(e) => submit(e)} style={{marginBottom: 30,marginTop:10}}>
                                Submit
                            </Button>
                            <Button variant="contained" color="primary" onClick={goBack} style={{marginBottom: 30,marginTop:10, marginLeft:10}}>
                                Back
                            </Button>
                        </div>
                        </form>
                    </Grid>
                    
                    <Grid item xs>
                    </Grid>
                </Grid>


            </Paper>
        </Container>
    )
}
