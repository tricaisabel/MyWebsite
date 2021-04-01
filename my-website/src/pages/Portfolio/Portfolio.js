import React from 'react'
import GitHub from '../../utils/GitHub';
import {Container, Grid, Typography} from '@material-ui/core';


const Portfolio = () => {
    return (
        
        <Grid container className='section'>
            <Grid item className='section_title mb_30'>
                    <span></span>
                    <h5 className='section_title_text'>My GitHub Repositories</h5>
            </Grid>

            <Grid item xs={12} className='section'>
                <GitHub />
            </Grid>
        </Grid>
    )
}

export default Portfolio
