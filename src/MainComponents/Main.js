import React from 'react'
import { Typography, Container, Grid, Box } from '@material-ui/core';
import Slider from '../SharedComponents/MainSlider'
import bannerImages from '../SharedComponents/sliderImages'
import boardOfDirectorImages from '../SharedComponents/boardOfDirectors'
import Card from '../SharedComponents/Card'

export default function Main() {
    return (
        <div>
            <Slider images={bannerImages} imageHeight={480}/>
            <Container style={{marginTop: 50,marginBottom:60}}>
                <Grid container spacing={5} justifyContent="center" alignItems="center" direction="row">
                
                <Box fontSize={30}justifyContent="center" alignItems="center" direction="row"  style={{marginTop: 30, fontWeight: "bold"}}>What is the student branch of the El Bosque University?</Box>
                    <Typography paragraph style={{marginTop:10,textAlign: "justify"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                        facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                        gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                        donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                        Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                        imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                        arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                        donec massa sapien faucibus et molestie ac.
                    </Typography>
                </Grid>
            </Container>
            <Container style={{marginTop: 60,marginBottom:60}}>
                <Grid container spacing={5}>
                    <Grid item xs style={{marginLeft: 50}}>
                        <Card width={600} imagePath="assets/IeeeMission.jpg" imageTitle="Mission" cardTitle="Mission" cardDescription="The IEEE Branch of Universidad El Bosque, attached to the INSTITUTE OF ELECTRICAL AND ELECTRONICS ENGINEERS (IEEE) integrates students, graduates and academics of the university around research through creativity, ingenuity, motivation and dedication, reflecting in its results the interdisciplinary and impacting society through continuous improvement in health and quality of life, under a bio-psycho-social and cultural approach that achieves the advancement, application and dissemination of knowledge from different areas of study."/>
                    </Grid>
                    <Grid item xs>
                        <Card width={600} imagePath="assets/IeeeVision.jpg" imageTitle="Vision" cardTitle="Vision" cardDescription="By the year 2022 to be a nationally recognized student branch, standing out for the results in the dissemination, application and impact of the activities developed from research."/>
                    </Grid>
                </Grid>
            </Container>
            <Grid container spacing={3}>
            
                <Grid container justifyContent="center" alignItems="center" direction="row">
                    <Typography variant="h4" >
                        Our Counselors
                    </Typography>
                </Grid>
              
                <Grid style={{marginLeft:'5%'}}item xs={12}>
                <Slider  timeTransition={380} width={"95%"} marginRight={1} images={boardOfDirectorImages}  showLegend={true} centerSlidePercentage={25} imageHeight={300}/>
                </Grid>
            </Grid>
        </div>
    )
}
