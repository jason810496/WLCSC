// basic react package
import React from 'react';
import ReactDOM from 'react-dom/client';
// routing package
import {
    // StaticRouter as Router,
    // BrowserRouter as Router,
    HashRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

/*-- css ---*/
import './index.css';

/*-- HomePage Images --*/
// 3 images of [ About ]  
import GroupImage from './images/Group.jpg'
import BackImage from './images/Back.jpg' 
import LocationImage from './images/Location.png'

// images of [ Advantage ]
import ComputerImage from './images/computer.gif';
import HackerImage from './images/hacker.gif';
import SocialcareImage from './images/social-care.gif'
import RocketImage from './images/rocket.gif';

// icon of [ Couse ]
import AlgoImage from './images/algorithm.png';
import AIImage from './images/artificial-intelligence.png';
import WebdevImage from './images/data.png';
import CyberImage from './images/encrypted.png';
import LinuxImage from './images/linux.png';

/*-- MembersPage Images --*/
// 25th
import member25_Jason from './images/Members/25th-Jason.jpg';
import member25_YoYo from './images/Members/25th-YoYo.png';
import member25_CBC from './images/Members/25th-CBC.png';
import member25_Comet from './images/Members/25th-Comet.png';
import member25_SF from './images/Members/25th-SF.png';
import member25_Carl from './images/Members/25th-Carl.jpg';

//26th


//27th
import member27_Gary from './images/Members/27th-Gary.png';


/*-- component --*/
import Header from './components/Header/Header';
import Home from './components/Main/Home';
import Footer from './components/Footer/Footer';

import SideBar from './components/Trigger/SideBar'
import Language from './components/Trigger/Language'

import MemberCard from './components/Main/Members';

// predefine theme variables ( added to App className )
const DARK = 'Dark ';
const LIGHT = 'Light ';

// Typing effect in the beginning
const typingSequence = ['WLCSC', 3000, 'Wu Ling',3000,'Computer Science',3000,'Algorithm',3000,'Cyber Security',3000,'Web Development',3000,''];

// content[0]:English , content[1]:Mandarin
const content = [
    {
        navigation:[
            {text:'About' ,id:'About'},
            {text:'Advantage' ,id:'Advantage'},
            {text:'Course' ,id:'Course'},
            {text:'Members' ,id:'Members'},
        ],
        about:{
            title:'About us',
            subtitle:'A group of student love computer science , coding and sharing experience in Wuling senior high school.',
        },
        IntroImages:[
            {
                url:GroupImage,
                txt:'discuss obstacle with senior clubmates',
            },
            {
                url:BackImage,
                txt:'equipped RTX??? 2080 Ti on every computer',
            },
            {
                url:LocationImage,
                txt:'www',
            },
        ],
        advantage:{
            title:'Advantages',
            card:[
                { 
                    title:'Meet talented members',
                    icon:HackerImage,
                    subtitle:'In our club, there are plenty of talented members hiding behind monitors. Making friends with them not only improves your programming skills, but also helps you learn more about the amazing IT field.',
                },
                { 
                    title:'Start coding from senior high',
                    icon:RocketImage,
                    subtitle:'Start your journey of of becoming an expert in computer science at the age of 16! While your friends are still playing Brawl Stars, you are already building your own AI model to play that garbage game.',
                },
                { 
                    title:'Get experience from seniors',
                    icon:SocialcareImage,
                    subtitle:'Our friendly seniors have plenty of experience in the IT world, you can learn from their experience. Such as, how to get a 5/4 in APCS, how to meet girls while the only girls you met are Vtubers, why this year???s YTP still don???t provide free fried chicken.',
                },
                { 
                    title:'Good academic atmosphere',
                    icon:ComputerImage,
                    subtitle:'The nice and comfy atmosphere in the club can increase your productivity in learning.',
                },
            ],
        },
        course:{
            title:'Course',
            card:[
                { 
                    title:'Algorithm',
                    icon:AlgoImage,
                    subtitle:'From C++ syntax to data structures and algorithm , learn competitive programming through online judges problems and contests.',
                },
                { 
                    title:'Web Devlopment',
                    icon:WebdevImage,
                    subtitle:'Learn Front-end fundamental tech , including HTML CSS Javascript . Design your own personal website step by step.',
                },
                { 
                    title:'Cyber Security',
                    icon:CyberImage,
                    subtitle:'Learn Web Application Exploitation by solving CTF and look into common web attacks .',
                },
                { 
                    title:'Mechine Learing',
                    icon:AIImage,
                    subtitle:'The most trend tech nowadays , learn AI stack from Keras , PyTorch to Tensenflow and all sorts of Neural Network',
                },
                { 
                    title:'Linux',
                    icon:LinuxImage,
                    subtitle:'Instead of GUI tools , programmers tend to use terminal as their weapons , it\'s essential to get used to linux commands.',
                },
            ],
        },
        members:"see all club members",
    },
    {
        navigation:[
            {text:'??????' ,id:'About'},
            {text:'??????' ,id:'Advantage'},
            {text:'??????' ,id:'Course'},
            {text:'??????' ,id:'Members'},
        ],
        about:{
            title:'????????????',
            subtitle:'?????????????????????????????????????????? coding ??????????????????????????????????????????',
        },
        IntroImages:[
            {
                url:GroupImage,
                txt:'?????????????????????',
            },
            {
                url:BackImage,
                txt:'?????????????????? RTX??? 2080 Ti',
            },
            {
                url:LocationImage,
                txt:'www',
            },
        ],
        advantage:{
            title:'??????',
            card:[
                { 
                    title:'?????????????????????',
                    icon:HackerImage,
                    subtitle:'????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
                },
                { 
                    title:'???????????????????????????',
                    icon:RocketImage,
                    subtitle:'????????????????????????????????????????????????????????????????????????????????????????????????',
                },
                { 
                    title:'????????????????????????',
                    icon:SocialcareImage,
                    subtitle:'????????? APCS 3/2 ?????? 5/4 ??? ??????????????????????????????????????????????????? ????????? YTP ???????????????',
                },
                { 
                    title:'?????????????????????',
                    icon:ComputerImage,
                    subtitle:'?????????????????????????????????????????????????????????????????? Programming ASMR',
                },
            ],
        },
        course:{
            title:'??????',
            card:[
                { 
                    title:'???????????????',
                    icon:AlgoImage,
                    subtitle:'?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
                },
                { 
                    title:'????????????',
                    icon:WebdevImage,
                    subtitle:'?????????????????? HTML CSS Javascript ??????????????????????????????',
                },
                { 
                    title:'????????????',
                    icon:CyberImage,
                    subtitle:'???????????????????????????FB ???????????????????????????????????????????????? bugs hunter ???',
                },
                { 
                    title:'????????????',
                    icon:AIImage,
                    subtitle:'???????????????????????????????????????????????????????????????',
                },
                { 
                    title:'Linux',
                    icon:LinuxImage,
                    subtitle:'????????????????????????????????????????????? terminal ??? linux command',
                },
            ],
        },
        members:"????????????",
    },
]

// Social links at [ Footer ]
const SocialLinksList = [
    
    {
        icon:'fa-envelope',
        link: 'wlcsc1995@gmail.com',
    },
    {
        icon:'fa-github',
        link: 'https://github.com/orgs/Wu-Ling-CSC',
    },
    {
        icon:'fa-instagram',
        link:'https://www.instagram.com/wlcsc_27/',
    },
    {
        icon:'fa-facebook',
        link:'https://www.facebook.com/WLCSC/',
    },
]; 



/*  MembersContent 

    English Max : 90 char 
    Mandarin Max : 60 char 

*/

const MembersNavigation = [
    [
        {text:'25th' ,id:'25th'},
        {text:'26th' ,id:'26th'},
        {text:'27th' ,id:'27th'},
    ],
    [
        {text:'25???' ,id:'25th'},
        {text:'26???' ,id:'26th'},
        {text:'27???' ,id:'27th'},
    ],
];

const MembersContent = [
    [
        {
            year:'25',
            members:[
                {
                    name:"Jason Liu",
                    position:"Director",
                    content:"NCKU CSIE / Algorithm / Full stack / I'm weak > < / Still learing ...",
                    img:member25_Jason,
                    contact:{
                        facebook:"https://www.facebook.com/profile.php?id=100010981865378",
                        github:"https://github.com/jason810496",
                        instagram:"https://www.instagram.com/jason2004424/",
                        blog:"https://jason810496.github.io/blog",
                    }
                },
                {
                    name:"Yoyo Lee",
                    position:"Education",
                    content:"NTU IM/ learning machine learning????/ Pro brawl star player",
                    img:member25_YoYo,
                    contact:{
                        facebook:"https://m.facebook.com/100004081721208/",
                        github:"https://github.com/leeyoyo49",
                        instagram:"https://instagram.com/yl.__49",
                        blog:null,
                    }
                },
                {
                    name:"Bing Cheng Chuang",
                    position:"Education",
                    content:"NTHU EECS / vim / sprout 2020 & 2021/ CS50w",
                    img:member25_CBC,
                    contact:{
                        facebook: null,
                        github:"https://github.com/tars3017",
                        instagram:null,
                        blog:null,
                    }
                },
                {
                    name:"SF",
                    position:"Education",
                    content:"NTNU CSIE / AI / App Designer / learning Java",
                    img:member25_SF,
                    contact:{
                        facebook: "https://www.facebook.com/snowflake111192",
                        github:"https://github.com/snowflake1111",
                        instagram:"https://www.instagram.com/snowflake111192",
                        blog:null,
                    }
                },
                {
                    name:"Comet ??????",
                    position:"PR",
                    content:" NTHU PME / Basketball player / sports lover / always have problem debugging ",
                    img:member25_Comet,
                    contact:{
                        facebook: "https://www.facebook.com/gnein",
                        github:null,
                        instagram:null,
                        blog:"https://deaer92.students.media",
                    }
                },
                {
                    name:"Wardaddy",
                    position:"Art Designing",
                    content:"PKU AM / The Man Who Sold the World ",
                    img:member25_Carl,
                    contact:{
                        facebook: "https://www.facebook.com/profile.php?id=100011166154971",
                        github:null,
                        instagram:"https://instagram.com/carl_vladimir_colier",
                        blog:null,
                    }
                },
            ],
        },
        {
            year:'26',
            members:[
                {
                    name:"123",
                    position:"123",
                    content:"123",
                    img:"",
                    contact:{
                        facebook:"123",
                        github:"123",
                        instagram:"123",
                    }
                },
            ],
        },
        {
            year:'27',
            members:[
                {
                    name:"Gary Tsai",
                    position:"Vice Director",
                    content:"ethical hacker/basic algorithm/volley ball/anime(?????????????????)/I love Mayday",
                    img:member27_Gary,
                    contact:{
                        facebook: null,
                        github:null,
                        instagram:"https://www.instagram.com/garytsai1130",
                        blog:null,
                    }
                },
                {
                    name:"12345",
                    position:"12345",
                    content:"12345",
                    img:"",
                    contact:{
                        facebook:"12345",
                        github:"12345",
                        instagram:"12345",
                    }
                },
            ],
        },
    ],
    [
        {
            year:'25',
            members:[
                {
                    name:"??????",
                    position:"??????",
                    content:"NCKU CSIE / ?????? / ?????? / ????????? /????????????/?????????????????????????????????",
                    img:member25_Jason,
                    contact:{
                        facebook:"https://www.facebook.com/profile.php?id=100010981865378",
                        github:"https://github.com/jason810496",
                        instagram:"https://www.instagram.com/jason2004424/",
                        blog:"https://jason810496.github.io/blog",
                    },
                },
                {
                    name:"?????????",
                    position:"??????",
                    content:"NTU IM / ????????????????/ ??????????????????AI / ??????????????????",
                    img:member25_YoYo,
                    contact:{
                        facebook:"https://m.facebook.com/100004081721208/",
                        github:"https://github.com/leeyoyo49",
                        instagram:"https://instagram.com/yl.__49",
                        blog:null,
                    }
                },
                {
                    name:"?????????",
                    position:"??????",
                    content:" NTHU EECS  / vim??????  / ????????????????????????????????? / ????????????",
                    img:member25_CBC,
                    contact:{
                        facebook: null,
                        github:"https://github.com/tars3017",
                        instagram:null,
                        blog:null,
                    }
                },
                {
                    name:"??????",
                    position:"??????",
                    content:"NTNU CSIE / ???????????? / APP????????? / ?????????Java",
                    img:member25_SF,
                    contact:{
                        facebook: "https://www.facebook.com/snowflake111192",
                        github:"https://github.com/snowflake1111",
                        instagram:"https://www.instagram.com/snowflake111192",
                        blog:null,
                    }
                },
                {
                    name:"??????",
                    position:"??????",
                    content:"NTHU PME / ?????????/ ????????????????????????????????????/ ?????????coding ??????",
                    img:member25_Comet,
                    contact:{
                        facebook: "https://www.facebook.com/gnein",
                        github:null,
                        instagram:null,
                        blog:"https://deaer92.students.media",
                    }
                },
                {
                    name:"??????",
                    position:"??????",
                    content:"PKU AM / MC 10???????????? / ?????? / ???????????? /  ?????????",
                    img:member25_Carl,
                    contact:{
                        facebook: "https://www.facebook.com/profile.php?id=100011166154971",
                        github:null,
                        instagram:"https://instagram.com/carl_vladimir_colier",
                        blog:null,
                    }
                },
                
            ],
        },
        {
            year:'26',
            members:[
                {
                    name:"123",
                    position:"123",
                    content:"123",
                    img:"",
                    contact:{
                        facebook:"123",
                        github:"123",
                        instagram:"123",
                    }
                },
            ],
        },
        {
            year:'27',
            members:[
                {
                    name:"??????",
                    position:"?????????",
                    content:"?????????????????????/???????????????/APEX?????????/???????????????????????????????????????????????????",
                    img:member27_Gary,
                    contact:{
                        facebook: null,
                        github:null,
                        instagram:"https://www.instagram.com/garytsai1130",
                        blog:null,
                    }
                },
                {
                    name:"12345",
                    position:"12345",
                    content:"12345",
                    img:"",
                    contact:{
                        facebook:"12345",
                        github:"12345",
                        instagram:"12345",
                    }
                },
            ],
        }
    ]
];

class App extends React.Component {
    constructor ( props ){
        super( props );
        this.state = {
            IsDark : 1,
            Lang :0,
        };
    }

    handleTheme(){
        // console.log( "change" , this.state.IsDark );
        if( this.state.IsDark===1 ){
            this.setState( {IsDark : 0} );
        }
        else this.setState( {IsDark : 1} );
    }

    handleLang(){
        // console.log( "Lang" , this.state.Lang );
        if( this.state.Lang===1 ){
            this.setState( {Lang : 0} );
        }
        else this.setState( {Lang : 1} );
    }

    HomePage =() =>{
        return (
            <div>
                <Header callback={ ()=>this.handleTheme() } navigation={ content[this.state.Lang].navigation } />
                <SideBar navigation={ content[this.state.Lang].navigation }/>
                <Home  
                    // TextBackground
                    typingSequence={ typingSequence }
                    // About
                    about={ content[this.state.Lang].about } 
                    IntroImages={ content[this.state.Lang].IntroImages }
                    // Advantage
                    advantage={ content[this.state.Lang].advantage }
                    // Course
                    course={ content[this.state.Lang].course }
                    // LinkedListBackround
                    members={ content[this.state.Lang].members }  
                />
            </div>
        );
    }

    MembersPage = ()=>{
        return (
            <div >
                <Header callback={ ()=>this.handleTheme() } navigation={ MembersNavigation[this.state.Lang] } />
                <SideBar navigation={ MembersNavigation[this.state.Lang] }/>
                <div className='Members'>
                    { MembersContent[this.state.Lang].map( ( club )=>( 
                        <div className={ club.year+(this.state.Lang===0 ? 'th':'???') } id={ club.year+'th' }>
                            <h1>{ club.year+(this.state.Lang===0 ? 'th':'???')  }</h1>
                            { club.members.map( ( ele )=>( < MemberCard person={ ele }/> ))}
                        </div>
                    )) }
                </div>
            </div>
        );
    }

    NotFoundPage = ()=>{

    }

    render(){

        return (
            <div className={ ( this.state.IsDark===1? DARK:LIGHT )+'App'}>
                <Language callback={ ()=>this.handleLang() } />

                <Router>
                    <Routes>
                        <Route path='*' element={ < this.NotFoundPage/>}/>

                        <Route path="/">
                            <Route index element={ <this.HomePage/> } />
                            <Route path="members" element={ <this.MembersPage/> } />
                        </Route>
                        
                    </Routes>
                </Router>

                <Footer SocialLinksList={ SocialLinksList }/>
            </div>
            
        );
    }
}

const Root = ReactDOM.createRoot( document.getElementById( 'root' ) );
Root.render( <App/> );

/*****************
    App :
        Header :
        Main :
            Card:
                User :
                    Image
                Techs :
                Details:
                    checkIcon
        Footer :

*****************/