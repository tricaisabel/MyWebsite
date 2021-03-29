import React from 'react'
import './Resume.css'
import {Container, Grid, Typography} from '@material-ui/core';
import resumeData from '../../utils/resumeData';
const Resume = () => {
    return (
        //
        <>
        {/*About me*/}
        <Grid container className='section'>
            <Grid item className='section_title'>
                <span></span>
                <h5 className='section_title_text'>About me</h5>
            </Grid> 
            <Grid item>
                <Typography className='about_text'>{resumeData.about}</Typography>
            </Grid>
        </Grid>
        {/*Education and Experiences*/}
        <Grid container className='section'></Grid> 
        {/*Services*/}
        <Grid container className='section'></Grid> 
        {/*Skills*/}
        <Grid container className='section'></Grid> 
        {/*Contact*/}
        <Grid container className='section'></Grid> 
        </>
        
    )
}

export default Resume
