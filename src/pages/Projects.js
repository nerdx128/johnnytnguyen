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
            <Carousel className="w-1/2 h-72 flex flex-col justify-center m-6"
                autoPlay={false}
                animation="fade"
                indicators={false}
                duration={200}
                navButtonsAlwaysVisible={false}
                navButtonsAlwaysInvisible={false}
                cycleNavigation={true}
                fullHeightHover={true}
                swipe={true}
            >
                <ProjectCard className="h-60" project={ProjectsData[0]}/>
                <ProjectCard className="h-60" project={ProjectsData[0]}/>
                {/*<div className="w-5/12 h-5/12 overflow-hidden z-1">
                    <h2 className="mb-2">something</h2>
                    <iframe src="https://codesandbox.io/embed/rainfocus-api-test-88u8l?codemirror=1&fontsize=14&hidenavigation=1&theme=dark&view=preview"
                            style={{width:'100%', height:'100%', border:'0', borderRadius: '4px', overflow:'hidden'}}
                            title="rainfocus-api-test"
                            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                    />
                </div>*/}
            </Carousel>
        </section>
    );
}
export default Projects;
