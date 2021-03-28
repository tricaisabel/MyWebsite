import React from 'react';
import {Typography} from '@material-ui/core';
import './Profile.css';
import profile from '../../assets/images/picture.jpg';

const Profile = () => {
    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
            <Typography className='name'>Isabel</Typography>
            <Typography className='title'>Title</Typography>
            </div>        
        <figure className='profile_image'>
            <img src={profile} alt="" />
        </figure>

        <div className='profile_information'>
            Insert timeline<br/>
            <button>my button</button>
        </div>
        </div>


    )
}

export default Profile
