import React from 'react'
import './Resume.css'
import {Container, Grid, Typography} from '@material-ui/core';
import resumeData from '../../utils/resumeData';
import CustomTimeline, {CustomTimelineSeparator} from '../../components/Timeline/Timeline';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineContent from '@material-ui/lab/TimelineContent';


const Resume = () => {
    return (
        //
        <>
        {/*About me*/}
        <Grid container className='section pb_45'>
            <Grid item className='section_title mb_30'>
                <span></span>
                <h5 className='section_title_text'>About me</h5>
            </Grid> 
            <Grid item xs={12}>
                <Typography variant='body2' className='about_text'>{resumeData.about}</Typography>
            </Grid>
        </Grid>
        {/*Education and Experiences*/}
        <Grid container className='section'>
            <Grid item className='section_title mb_30'>
                <span></span>
                <h5 className='section_title_text'>Resume</h5>
            </Grid> 
            <Grid item xs={12}>
                <Grid container className='resume_timeline'>
                    {/*Experiences*/}
                    <Grid item sm={12} md={6}>
                        <CustomTimeline title='Work Experience' icon={<WorkIcon />}>
                            {resumeData.experiences.map(experience =>  (
                                <TimelineItem>
                                    <TimelineSeparator className='separator_padding'>
                                        <TimelineDot 
                                            varinat='outlined'
                                            className='timeline_dot'
                                        />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent className='timeline_content'>
                                        <Typography varinat='h2' className='timeline_title'>{experience.title}</Typography>
                                        <Typography variant='caption' className='timeline_date'>{experience.date}</Typography>
                                        <Typography variant='body2' className='timeline_description'>{experience.description}</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </CustomTimeline>
                    </Grid>
                    
                    {/*Education*/}
                    <Grid item sm={12} md={6}>
                        <CustomTimeline title='Education' icon={<SchoolIcon />}>
                            {resumeData.educations.map(education =>  (
                                <TimelineItem>
                                    <TimelineSeparator className='separator_padding'>
                                        <TimelineDot 
                                            varinat='outlined'
                                            className='timeline_dot'
                                        />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent className='timeline_content'>
                                        <Typography varinat='h2' className='timeline_title'>{education.title}</Typography>
                                        <Typography variant='caption' className='timeline_date'>{education.date}</Typography>
                                        <Typography variant='body2' className='timeline_description'>{education.description}</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </CustomTimeline>
                    </Grid>
                </Grid>
            </Grid>
        </Grid> 
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
