import React from 'react';
import {Grid,Typography} from '@material-ui/core';
import Card from '../../SharedComponents/Card'
import Timeline from '../../SharedComponents/Timeline';


export default function EventArea() {
    const [thegallery2, setTheGallery2] = React.useState([
        {
            title: "name",
            path: 'https://www.enter.co/wp-content/uploads/2019/05/Astronauta.jpg',
            description: "Había una vez asdsadsa 0"
        },
        {
            title: "name",
            path: "https://www.enter.co/wp-content/uploads/2019/05/Astronauta.jpg",
            description: "Había una vez asdsadsa 1"
        },
        {
            title: "name",
            path: "https://www.enter.co/wp-content/uploads/2019/05/Astronauta.jpg",
            description: "Había una vez asdsadsa 2"
        },
        {
            title: "name",
            path: "https://www.enter.co/wp-content/uploads/2019/05/Astronauta.jpg",
            description: "Había una vez asdsadsa 3"
        }]);
    const [theEvents2, setTheEvents2] = React.useState(
        [
            {
                title: "This is the title of an event 0",
                description: "0 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                title: "This is the title of an event 1",
                description: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            },
            {
                title: "This is the title of an event 2",
                description: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }, {
                title: "This is the title of an event 3",
                description: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }, {
                title: "This is the title of an event 4",
                description: "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        ]);
    const myGallery = thegallery2.map(gallery => {
        return (
            <Grid item xs={4}>
                <Card title={gallery.title} cardTitle={gallery.title} imagePath={gallery.path} cardDescription={gallery.description}></Card>
                <br></br>
            </Grid>
        )
    })
    //En caso de usar las peticiones al back para las fotos y los eventos se guardan en constantes
     /*  const [thegallery, setThegallery] = React.useState([]);
        const [theEvents, setTheEvents] = React.useState([]);
        useEffect(() => {
    
            axios.get(process.env.REACT_APP_ENDPOINT + props.chapter + '/Galleries/', {})
                .then(
                    (res) => {
                        setThegallery(res.data.response)
                    }
                ).catch((err) => {
                    console.log(err)
                }
                ),
        axios.get(process.env.REACT_APP_ENDPOINT+props.chapter+'/Events/', {})
                .then(
                    (res) => {
                        setTheEvents(res.data.response)
                    }
                ).catch((err) => {
                    console.log(err)
                }
         )
    }, []);
    */
    return (
        < Grid container spacing={12}>
            <Grid item xs={3}>
            <Typography style={{fontWeight: "bold", textAlign:"center"}} variant="h4" >Events</Typography>
                    <br />
                <Timeline align={"right"} content={theEvents2} />
            </Grid>
            <Grid item xs={9}>          
            <Typography style={{fontWeight: "bold", textAlign:"center"}} variant="h4" >This is the title of an event</Typography>
            <br/>
            <Typography style={{fontWeight: "bold"}}variant="h5" >Description</Typography>
            <br/>
                <Typography paragraph style={{textAlign: 'justify', alignContent:'left'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                
                <Typography style={{fontWeight: "bold", marginTop:"5%",marginBottom:"3%"}}variant="h5" >Gallery</Typography>
                <Grid container spacing={9}>
                    {myGallery}
                </Grid>
            </Grid>
        </Grid>
    )
}
