import styled from "styled-components";
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import {Container, Grid, Typography} from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { ToggleButton } from '@material-ui/lab';


function Splash(props){
    function changeTheme(){
        if(props.theme=="light"){
            props.setTheme("dark");
        }
        else{
            props.setTheme("light");
        }
    }
}

const icon=props.theme==="light" ? <Brightness3Icon/> : <Brightness5Icon/>;

return(
    <Paper>
        <Container>
            <ToggleButton onClick={changeTheme}>
                {icon}
            </ToggleButton>
        </Container>
    </Paper>
    

);