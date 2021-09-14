import React,{ useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Paper,
  Container,
  Grid,
  Button,
  Box,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { DataGrid } from '@material-ui/data-grid';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import AutorenewIcon from '@material-ui/icons/Autorenew';

import axios from "axios";

const useStyles = makeStyles((theme) => ({
    form: {
        "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
        },
    },
    button: {
        margin: theme.spacing(1),
    },
}));

export default function AddMemberToChapter(props) {

    const classes = useStyles();
    const history = useHistory();
    
    const [members, setMembers] = useState([])
    const [selectedMember, setSelectedMember] = useState(null)

    const [roles, setRoles] = useState([])
    const [selectedRole, setSelectedRole] = useState(null)

    const [selectedStartDate, setSelectedStartDate] = useState(new Date());
    const [active, setActive] = useState(true);


    const [chapter, setChapter] = useState({})
    const [memberList, setMemberList] = useState([])

    const goBack = () => {
        history.goBack();
    };

    let { chapter_id } = useParams();
    const { handleLoader, openSnackbarByType } = props;

    const updateMember = (p) => {
        const body = {
            member_id: p.row.member_id,
            chapter_id: p.row.chapter_id,
            role_id: p.row.role_id,
            isActive: !p.row.isActive
        }
        handleLoader(true)
        axios.put(process.env.REACT_APP_ENDPOINT + "/chaptersmembers",body).then(res => {
            handleLoader(false)
            openSnackbarByType(true,"success", "Member updated successfully")
            getActualChapter()
        }).catch(e => {
            openSnackbarByType(true,"error", e.response.data.error !== undefined ? e.response.data.error : "Couldn't add the member to the chapter")
            handleLoader(false)
        })
    }

    const deleteMember = (p) => {
        handleLoader(true)
        axios.delete(process.env.REACT_APP_ENDPOINT + "/chaptersmembers/"+chapter_id+"/"+p).then(res => {
            handleLoader(false)
            openSnackbarByType(true,"success", "Member deleted successfully")
            getActualChapter()
        }).catch(e => {
            openSnackbarByType(true,"error", e.response.data.error !== undefined ? e.response.data.error : "Couldn't add the member to the chapter")
            handleLoader(false)
        })
    }

    const getActualChapter = () => {
        handleLoader(true)
        axios.get(process.env.REACT_APP_ENDPOINT + "/chapters/" + chapter_id).then(res => {
            setChapter(res.data.response)
            let memberListAux = res.data.response.Chapter_Members
            memberListAux.forEach(ml => {
                ml.id = ml.chapter_id+"-"+ml.member_id
                ml.firstname = ml.Member.firstname
                ml.lastname = ml.Member.lastname
                ml.role = ml.Role.role_name
            })
            setMemberList(memberListAux)
            handleLoader(false)
        }).catch(err => {
            handleLoader(false)
        })
    }

    useEffect(() => {
        handleLoader(true)
        axios.get(process.env.REACT_APP_ENDPOINT + "/members").then(res => {
            setMembers(res.data.response)
            handleLoader(false)
        }).catch(err => {
            handleLoader(false)
        })
        handleLoader(true)
        axios.get(process.env.REACT_APP_ENDPOINT + "/roles").then(res => {
            setRoles(res.data.response)
            handleLoader(false)
        }).catch(err => {
            handleLoader(false)
        })
        getActualChapter()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const submit = (e) => {
        e.preventDefault()

        if(!selectedRole || !selectedMember){
            openSnackbarByType(true,"error", "Please fill all the fields")
            return;
        }

        handleLoader(true)
        const body = {
            role_id: selectedRole.role_id,
            chapter_id: chapter_id,
            member_id: selectedMember.member_id,
            isActive: active,
            start_date: selectedStartDate,
            end_date: new Date()
        }

        axios.post(process.env.REACT_APP_ENDPOINT +"/chaptersmembers",body).then(res => {
            openSnackbarByType(true, "success", "Member added succesfully");
            handleLoader(false)
            getActualChapter()
        }).catch(e => {
            openSnackbarByType(true,"error", e.response.data.error !== undefined ? e.response.data.error : "Couldn't add the member to the chapter")
            handleLoader(false)
        })
    }

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
            field: 'role',
            headerName: 'Role',
            flex: 1,
        },
        {
            field: 'start_date',
            headerName: 'Started date',
            flex: 1,
            type: 'dateTime'
        },
        {
            field: 'isActive',
            headerName: 'Active',
            flex: 1,
            type: 'boolean',
        },
        {
            field: 'member_id',
            headerName: 'Actions',
            flex: 0.5,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
              <strong>
                  <IconButton aria-label="edit" onClick={() => deleteMember(params.value)}>
                      <DeleteIcon/>
                  </IconButton>
                  <IconButton aria-label="edit" onClick={() => updateMember(params)}>
                      <AutorenewIcon/>
                  </IconButton>
              </strong>
            ),
          },
    ]


    return (
        <div>
        <Container maxWidth="sm" style={{ marginTop: 60 }}>
            <Paper elevation={3}>
                <Grid container spacing={3}>
                <Grid item xs></Grid>
                <Grid item xs>
                <Box fontSize={18} textAlign="center" style={{ marginTop: 20, marginBottom:20 }}>
                    Add a member to {chapter.chapter_name}
                </Box>
                <form
                    className={classes.form}
                    noValidate
                    autoComplete="off"
                    onSubmit={submit}
                >
                    <Autocomplete
                        id="memberSelect"
                        options={members}
                        getOptionLabel={(m) => m.firstname + " " + m.lastname}
                        renderInput={(params) =>(<TextField {...params} label="Choose a member*" variant="outlined" />)}
                        onChange={(event, newValue) => {
                            setSelectedMember(newValue)
                        }}
                    />
                    <Autocomplete
                        id="roleSelect"
                        options={roles}
                        getOptionLabel={(r) => r.role_name}
                        renderInput={(params) =>(<TextField {...params} label="Choose a role*" variant="outlined" />)}
                        onChange={(event, newValue) => {
                            setSelectedRole(newValue)
                        }}
                    />

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Start date *"
                    value={selectedStartDate}
                    onChange={(date) => {
                        setSelectedStartDate(date);
                    }}
                    KeyboardButtonProps={{
                        "aria-label": "change date",
                    }}
                    />
                </MuiPickersUtilsProvider>
                <FormControlLabel
                value={active}
                control={
                  <Checkbox
                    color="primary"
                    checked={active}
                    onChange={() => {
                      setActive(!active);
                    }}
                  />
                }
                label="Active *"
                labelPlacement="Active"
              />
                <div className={classes.button}>
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={(e) => submit(e)}
                    style={{ marginBottom: 30, marginTop: 10 }}
                    >
                    Submit
                    </Button>
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={goBack}
                    style={{ marginBottom: 30, marginTop: 10, marginLeft: 10 }}
                    >
                    Back
                    </Button>
              </div>
            </form>
            </Grid>

                <Grid item xs></Grid>
                </Grid>
            </Paper>
        </Container>

        <Paper elevation={3} style={{marginTop:50, marginBottom:20}}>
            <Box fontSize={18} textAlign="center">
                List of members
            </Box>
            <Grid container spacing={3}>
                <Grid item xs style={{height: 300, width: '95%', margin:20}}>
                    <DataGrid
                        loading={memberList.length === 0}
                        rows={memberList}
                        columns={memberColumns}
                        pageSize={5}
                        disableSelectionOnClick
                    /></Grid>
            </Grid>
        </Paper>
        </div>
    )
}
