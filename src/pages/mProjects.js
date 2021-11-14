import React from "react";
import Video from "../assets/Projects/HelloWorld.mp4";
import {isMobile} from "react-device-detect";
import { ProjectsData } from "../components/Projects/Projects-data"
import ProjectCard from "../components/Projects/ProjectCard";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'


const Projects = () =>{
    return (
        <section id="projects" className='bg-projects flex flex-wrap justify-center w-full h-screen'>
            <div className="absolute w-full h-full overflow-hidden opacity-90 z-1">
                <video className="w-full h-full object-cover" autoPlay loop muted src={Video} type='video/mp4'/>
            </div>
            <div>Mobile Projects Page</div>
        </section>
    );
}
export default Projects;
