import React from "react";
import Video from '../assets/binary-rain.mp4';


const Me = () =>{
    return (
        <section id='me' className='flex bg-gray-700 w-screen h-screen z-10'>
            <div className='flex flex-col relative justify-center items-center pl-9 py-16 w-full h-full z-1'>
                <p className='absolute top-24 text-3xl md:text-5xl text-blue-200'>Who am I?</p>
                <ul className='flex flex-col relative items-center '>
                    <li className='nerd'>Nerd-Extraordinaire</li>
                    <li className='relative left-12 top-2'>
                        <span className='eclectifying'>Eclectifying</span>
                        <span className='resilient'> Resilient </span>
                        <span className='silly'>Silly</span>
                    </li>
                    <li className='tabletop'>Lover of Tabletop Gaming</li>
                    <li className='daydreamer'>Daydreamer</li>
                    <li className='relative -top-4 right-4'>
                        <span className='plant-based'>Plant-based</span>
                        <span className='caps'> Collector of Caps</span>
                    </li>
                    <li className='existence'>Ponderer of existence</li>
                    <li className='nonsense'>Whisperer of Nonsense</li>
                    <li className='relative -top-1 left-12'>
                        <span className='nature'>Wanderer of Nature</span>
                        <span>&ensp;&ensp;&ensp;&ensp;&ensp;</span>
                        <span className='animal'>Animal Lover</span>
                    </li>
                    <li className='relative left-12'>
                        <span className='deep'>Deep Thinker</span>
                        <span className='adaptable'> Adaptable</span>
                    </li>
                    <li className='silence'>Filler of dead silence</li>
                    <li className='stares'>Master of blank stares</li>
                </ul>
                <p className='absolute text-3xl md:text-5xl bottom-24 text-blue-200 mb-8'>I am Johnny</p>
            </div>
        </section>
    );
}
export default Me;
