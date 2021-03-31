import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import DesktopMacOutlinedIcon from '@material-ui/icons/DesktopMacOutlined';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import React from 'react'


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
            link:'https://github.com/tricaisabel',
            text:'My GitHub',
            icon: <GitHubIcon/>,
        },
    },

    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan, orci ac vulputate laoreet, augue risus fringilla tellus, vel laoreet nisl magna eu risus. Nam in ultricies tellus. Etiam vehicula commodo sem. Nullam non suscipit turpis. Nullam mattis mauris vitae leo suscipit tincidunt. Nam porttitor euismod ligula vitae condimentum. Nulla accumsan odio at sapien gravida vestibulus. \n\n Aliquam feugiat mi dolor, nec accumsan dolor tristique eget. Suspendisse pellentesque lobortis quam, eu gravida libero suscipit vel. Duis rhoncus orci nec tortor egestas rutrum. Nunc quis ex sit amet ante accumsan vulputate. Nulla in pulvinar justo. Nullam sed facilisis enim. Maecenas hendrerit, augue non placerat blandit, mi risus scelerisque magna, mollis facilisis mi ipsum sed arcu. Morbi lobortis tincidunt enim ac elementum.",
    experiences: [
    {
        title:'Work 1',
        date:'2018 - Prezent',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tortor lectus, elementum eget sodales vel, sagittis eget odio. Morbi pretium facilisis enim vitae viverra. Etiam elementum orci vel rutrum fringilla.'

    },
    {
        title:'Work 2',
        date:'2019 - Prezent',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tortor lectus, elementum eget sodales vel, sagittis eget odio. Morbi pretium facilisis enim vitae viverra. Etiam elementum orci vel rutrum fringilla.'

    },
    {
        title:'Work 3',
        date:'2020 - Prezent',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tortor lectus, elementum eget sodales vel, sagittis eget odio. Morbi pretium facilisis enim vitae viverra. Etiam elementum orci vel rutrum fringilla.'

    },
 ],
 educations: [
    {
        title:'Education 1',
        date:'2018 - Prezent',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tortor lectus, elementum eget sodales vel, sagittis eget odio. Morbi pretium facilisis enim vitae viverra.'

    },
    {
        title:'Education 2',
        date:'2019 - Prezent',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tortor lectus, elementum eget sodales vel, sagittis eget odio. Morbi pretium facilisis enim vitae viverra.'

    }
 ],

 services: [
     {
         title:'Web Dev',
         description:'I have been a badass web developer for 10 years',
         icon: <AssignmentIndOutlinedIcon />,
     },
     {
        title:'Graphic Designer',
        description:'I have been a badass Graphic Designer for 9 years',
        icon: <DesktopMacOutlinedIcon />,
    },
    {
        title:'Visual identity',
        description:'I have created badass visual identities for clients',
        icon: <FingerprintIcon />,
    },


 ],

 skills: [
    {
     title: 'FRONT-END', 
     description: [
         'ReactJS',
         'JavaScript',
         'TypeScript',
         'Bootstrap',
         'Material UI',
     ],
    },
    {
        title: 'BACK-END', 
        description: [
            'Java',
            'Python',
            '.NET',
            'C++',
        ],
    },
    {
       title: 'DATABASES', 
        description: [
            'SQL',
            'PL/SQL',
        ],
    },
    {
        title: 'SOURCE-CONTROL', 
        description: [
            'Git',
            'GitHub',
        ],
    },
 ],
};