import React from 'react'
import Bread from './Bread'
import NavSearch from '../components/NavSearch'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useEffect, useState } from "react";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const About = (props) => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
      }, []);

     // console.log(props)

    return(
        <div className="App-header">
            <NavSearch/><br></br>
            <Bread pathProps = {props.history.location.pathname}/>

            <Container fixed className='Login' style={{backgroundColor:'#f0e4d7',width:'80%'}}>
            <Typography gutterBottom variant="h5" component="h2" style={{textAlign:'center'}}>
            <strong> About Us </strong>
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
               This is a Issue tracking system a software application that keeps track of reported software bugs in software development projects.

                    It is an open-source software project, which allow end-users to enter issue encountered during development directly.

A Issue tracking system is usually a necessary component of a professional software development infrastructure, and consistent use of a issue tracking system is considered one of the "hallmarks of a good software team"
            </Typography> <hr style={{ border: 0, height: '1px',
    backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))',}}></hr>
            
            <Typography gutterBottom variant="h5" component="h2" style={{textAlign:'center'}}>
            <strong > Making </strong>
            </Typography>

            <Typography variant="h6" color="textSecondary" component="p">
            A major component of a issue tracking system is a database that records facts about known issues. 
            Facts may include the date a issue was reported, its severity, its status, 
            and details like issue description and issue resolved date
            </Typography> <hr style={{ border: 0, height: '1px',
    backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))',}}></hr>
            
            <Typography gutterBottom variant="h5" component="h2" style={{textAlign:'center'}}>
            <strong > Usage </strong>
            </Typography>

            <Typography variant="h6" color="textSecondary" component="p">
            This Issue tracking system allows only authenticated and registered users to 
            configure permissions based on status, move the issue to another status, or delete the bug.
            A user registered can make use of the graph provided which visualizes the issues which were
            mostly visited. The application is developed in such a way that only authenticated users can
            perform operations such as DELETE, UPDATE, ADD, VIEW. A non Authenticated user need to register 
            to view more details of any issue and can perform further operations. 
            </Typography>       
            </Container>
            <div className="scroll-to-top media">
            {isVisible && 
                <div onClick={scrollToTop} style={{display:'flex'}}>
                <KeyboardArrowUpIcon style={{ marginTop:'3%'}} /><pre>Back To Top</pre>
                </div>}
            </div>
         
            <footer style={{justifyContent:'center' ,display:'flex',flexDirection:'row'}} >
               <p> Contact Us : 1234567809 </p>
               <FacebookIcon style={{marginLeft:'1%',marginTop:'1%'}}/>
               <TwitterIcon style={{marginLeft:'1%',marginTop:'1%'}}/>
               <LinkedInIcon style={{marginLeft:'1%',marginTop:'1%'}}/>
            </footer>
        </div>
    )
}

export default About