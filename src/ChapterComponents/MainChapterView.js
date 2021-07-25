import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Typography, Paper, Grid, Box, Container} from '@material-ui/core';
import axios from 'axios'
import Slider from '../SharedComponents/MainSlider'
import bannerImages from '../SharedComponents/sliderImages'

export default function MainChapterView(props) {
    const [chapter, setChapter] = useState({
        chapter_id: -1,
        chapter_name: "Default name",
        description: "Default description",
        logo_path: "default image",
        start_date: new Date(),
        end_date: new Date(),
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        Events: [],
        Chapter_Members: [],
        Chapter_Infos: []
    })
    const [bannerMembers, setBannerMembers] = useState({
        images: []
    })
    const { handleLoader, openSnackbarByType } = props
    let { id } = useParams();
    useEffect(() => {
        handleLoader(true)
        axios.get(process.env.REACT_APP_ENDPOINT + "/chapters/" + id)
        .then(res => {
            setChapter(res.data.response)
            if(res.data.response?.Chapter_Members && res.data.response.Chapter_Members.length > 0){
                let mem = res.data.response.Chapter_Members.map(m => {
                    return {
                        path: m.Member.image_path,
                        legend: m.Member.firstname
                    }
                })
                let images = {
                    images: mem
                }
                setBannerMembers(images)
            }else{
                setBannerMembers({})
            }
            handleLoader(false)
        }).catch(err => {
            openSnackbarByType(true, "error", "Chapter couldn't be fetched")
            handleLoader(false)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])
    return (
        <Paper style={{marginTop: 60}}> 
                <Box fontSize={20} textAlign="center" style={{marginTop: 30}}>
                    <Typography variant="h4">{chapter.chapter_name}</Typography>
                </Box>
            <Grid container spacing={1} style={{marginTop: 30}}>
                <Grid item xs={5} style={{marginLeft: 30}}>
                    <Box fontSize={20} textAlign="center">
                        <Typography variant="h5">General description</Typography>
                    </Box>
                    <Paper elevation={3} variant="outlined" style={{padding: 10}}>
                        <Box fontSize={10} textAlign="center">
                            <Typography>
                                {chapter.description}
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={3} variant="outlined" style={{padding: 10}}>
                        <Container>
                                <img src={chapter.logo_path} alt='logo' width='550'></img>
                        </Container>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Box fontSize={20} textAlign="center">
                        <Typography variant="h5">Members</Typography>
                    </Box>
                    <Slider images={bannerMembers} imageHeight={450} centerSlidePercentage={50} showLegend={true}/>
                </Grid>
            </Grid>
        </Paper>
    )
}
