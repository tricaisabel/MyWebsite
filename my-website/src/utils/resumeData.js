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
            link:'https://github.com/tricaisabel',
            text:'My GitHub',
            icon: <GitHubIcon/>,
        },
    },

    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan, orci ac vulputate laoreet, augue risus fringilla tellus, vel laoreet nisl magna eu risus. Nam in ultricies tellus. Etiam vehicula commodo sem. Nullam non suscipit turpis. Nullam mattis mauris vitae leo suscipit tincidunt. Nam porttitor euismod ligula vitae condimentum. Nulla accumsan odio at sapien gravida vestibulum. Ut metus diam, fermentum blandit nulla id, fringilla commodo justo. Quisque nisi nibh, elementum a lobortis et, vulputate et ante.\n\n Aliquam feugiat mi dolor, nec accumsan dolor tristique eget. Suspendisse pellentesque lobortis quam, eu gravida libero suscipit vel. Duis rhoncus orci nec tortor egestas rutrum. Nunc quis ex sit amet ante accumsan vulputate. Nulla in pulvinar justo. Nullam sed facilisis enim. Maecenas hendrerit, augue non placerat blandit, mi risus scelerisque magna, mollis facilisis mi ipsum sed arcu. Morbi lobortis tincidunt enim ac elementum.",
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
 ]
};