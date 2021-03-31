import React from 'react'
import {Button} from '@material-ui/core';
import './Button.css';

const CustomButton = ({text, icon}) => {
    return (
        <Button className='custom_btn' endIcon=
        {icon ?(<div className='btn_icon_container'>{icon}</div>) : null}
        >
            <span className='btn_text'>{text}</span>
            <a href="https://drive.google.com/drive/u/0/my-drive" target="_blank"></a>
        </Button>
    )
}

export default CustomButton
