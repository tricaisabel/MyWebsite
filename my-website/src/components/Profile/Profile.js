import React from 'react';
import {Typography} from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import CustomTimeline, {CustomTimelineSeparator} from '../Timeline/Timeline';
import './Profile.css';
import profile from '../../assets/images/picture.jpg';
import resumeData from '../../utils/resumeData';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';


const CustomTimelineItem=({title, text, link}) =>
(
    <TimelineItem>
        <CustomTimelineSeparator/>
        <TimelineContent className="timeline_content">
            { link ? (
            <Typography className='timeline_item_text'>
                <span>{title}</span>
                <a href={link} target='_blank'>{text}</a>
            </Typography>) : 
            (
                <Typography className='timeline_item_text'><span>{title}</span>{text}</Typography>
            )}
        </TimelineContent>
    </TimelineItem>)

const Profile = () => {
    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
            <Typography className='name'>{resumeData.name}</Typography>
            <Typography className='title'>{resumeData.title}</Typography>
            </div>        
        <figure className='profile_image'>
            <img src={profile} alt="" />
        </figure>

        <div className='profile_information'>
            <CustomTimeline icon={<PersonOutlineIcon/>} title={'Welcome to my profile!'}>
                <CustomTimelineItem title='Name: ' text={resumeData.name}/>
                <CustomTimelineItem title='Title: ' text={resumeData.title}/>
                <CustomTimelineItem title='Email: ' text={resumeData.email}/>

                {Object.keys(resumeData.socials).map(key =>
                (
                    <CustomTimelineItem title={key+': '} text={resumeData.socials[key].text} link={resumeData.socials[key].link}/>
                ))}
                
            </CustomTimeline>
            <br/>
            <button>my button</button>
        </div>
        </div>


    )
}

export default Profile
