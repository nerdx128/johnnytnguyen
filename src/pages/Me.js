import React from "react";
import Video from '../assets/Code.mp4';


const Me = () =>{
    return (
        <main id='me' className='flex w-full h-screen z-10'>
            <div className="absolute inset-0 w-full h-full overflow-hidden opacity-50 z-1">
                <video className="w-full h-full object-cover" autoPlay loop muted src={Video} type='video/mp4'/>
            </div>
            <div className='flex flex-col relative justify-center items-center w-full h-full z-1'>
                <h1 className='text-3xl md:text-5xl'>Johnny T. Nguyen</h1>
                <h2 className='text-sm'>Senior Software Architect/Developer</h2>
            </div>
        </main>
    );
}
export default Me;
