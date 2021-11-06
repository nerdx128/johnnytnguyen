import React from "react";
import Video from '../assets/binary-rain.mp4';
import {isMobile} from "react-device-detect";


const Home = () =>{
    const homeContainerCss = [
        'flex',
        isMobile ? 'w-screen' : 'w-full',
        'h-screen',
        'z-10',
        isMobile ? '-mt-35' : ''
    ].join(' ');
    return (
        <section id='home' className={homeContainerCss}>
            <div className="absolute inset-0 w-full h-full overflow-hidden opacity-90 z-1">
                <video className="w-full h-full object-cover" autoPlay loop muted src={Video} type='video/mp4'/>
            </div>
            <div className="absolute inset-0 w-full h-full overflow-hidden opacity-60 z-1">
            </div>
            <div className='text-blue-200 flex flex-col relative justify-center pl-9 items-center w-full h-full z-1'>
                <h1 className='text-3xl md:text-5xl'>Johnny T. Nguyen</h1>
                <h2 className='text-sm'>Senior Software Architect/Developer</h2>
            </div>
        </section>
    );
}
export default Home;
