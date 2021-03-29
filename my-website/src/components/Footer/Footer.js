import React from 'react';
import './Footer.css';
import Typography from '@material-ui/core/Typography';
import resumeData from '../../utils/resumeData';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_left'>
                <Typography className='footer_name'>{resumeData.name}</Typography>
            </div>
            <div className='footer_right'>
            <Typography className='footer_copyright'>
                Designed and Developed by <a href="https://www.linkedin.com/in/isabel-claudia-tric%C4%83-9a92b71b5/" target='_blank'>Isabel Trică</a>
                <br />
                Specials Thanks Goes to <a href="https://www.youtube.com/channel/UCSEy8lBnjp42x5W1JPcca0w" taget='_blank'>Salman Fazal's Youtube Tutorials</a>
            </Typography>
            </div>
        </div>
        
    )
}

export default Footer
