import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'Trică Isabel-Claudia',
    title: 'Computer Science Student',
    birthday:'31st August 2000',
    email:'isabel.claudia31@gmail.com',
    address:'Bucharest, Romania',
    phone: '(0741) 474 511',

    socials:{
        Facebook:
        {
            link:'https://www.facebook.com/isabel.trica/',
            text:'My Facebook Page',
            icon: <FacebookIcon/>,
        },
        Linkedin:
        {
            link:'https://www.linkedin.com/in/isabel-claudia-tric%C4%83-9a92b71b5/',
            text:'My LinkedIn',
            icon: <LinkedInIcon/>,
        },
        GitHub:
        {
            link:'https://www.facebook.com/isabel.trica/',
            text:'My GitHub',
            icon: <GitHubIcon/>,
        },
    },
};