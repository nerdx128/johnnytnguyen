import React from "react";
import {isMobile} from "react-device-detect";


const Me = () =>{
    const wordCloudContainerCss = [
        'flex',
        'flex-col',
        'relative',
        ' justify-around',
        'items-center',
        isMobile ? '' : 'pl-9',
        'w-full',
        'h-full',
        'z-1'
    ].join(' ');
    return (
        <section id='me' className='mt-0 flex bg-gray-700 bg-me w-screen h-screen z-10'>
            <div className={wordCloudContainerCss}>
                <p className='text-3xl md:text-5xl text-blue-200'>Who am I?</p>
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
                        {isMobile ? <br/> : '' }
                        <span className='caps'> Collector of Caps</span>
                    </li>
                    <li className='existence'>Ponderer of existence</li>
                    <li className='nonsense'>Whisperer of Nonsense</li>
                    <li className='relative -top-1 left-12'>
                        <span className='nature'>Wanderer of Nature</span>
                        <span>&ensp;&ensp;&ensp;&ensp;&ensp;</span>
                        {isMobile ? <br/> : '' }
                        <span className='animal'>Animal Lover</span>
                    </li>
                    <li className='relative left-12'>
                        <span className='deep'>Deep Thinker</span>
                        <span className='adaptable'> Adaptable</span>
                    </li>
                    <li className='silence'>Filler of dead silence</li>
                    <li className='stares'>Master of blank stares</li>
                </ul>
                <p className='text-3xl md:text-5xl text-blue-200'>I am Johnny</p>
            </div>
        </section>
    );
}
export default Me;
