import React from "react";
import Video from '../assets/binary-rain.mp4';


const Me = () =>{
    return (
        <section id='me' className='flex bg-gray-700 w-full h-screen z-10'>
            <div className='flex flex-col relative justify-center items-center px-9 py-16 w-full h-full z-1'>
                <p className='absolute top-24 text-3xl md:text-5xl text-blue-200'>Who am I?</p>
                <ul className='flex flex-col relative items-center '>
                    <li className='text-2xl md:text-4xl text-gray-500 leading-3'>Nerd-Extraordinaire</li>
                    <li className='relative left-12 top-2'>
                        <span className='text-lg md:text-2xl text-pink-200 tracking-tighter'>Eclecticifying</span>
                        <span className='text-lg md:text-2xl text-green-300 tracking-tighter'> Resiliant </span>
                        <span className='text-lg md:text-2xl text-purple-400 tracking-tighter'>Silly</span>
                    </li>
                    <li className='relative left-8 text-xl md:text-3xl text-gray-600 tracking-tighter'>Lover of Tabletop Gaming</li>
                    <li className='relative -top-2 text-2xl md:text-4xl text-gray-900 tracking-widest'>Daydreamer</li>
                    <li className='relative -top-4 right-4'>
                        <span className='text-xl md:text-2xl text-green-100 leading-3'>Plant-based</span>
                        <span className='relative top-2 text-xl md:text-3xl text-indigo-300 leading-3'> Collector of Caps</span>
                    </li>
                    <li className='relative left-24 text-2xl md:text-4xl text-pink-100 tracking-wide'>Ponderer of existence</li>
                    <li className='relative -left-8 text-xl md:text-3xl text-gray-600 tracking-tighter'>Whisperer of Nonsense</li>
                    <li className='relative -top-1 left-12'>
                        <span className='text-lg md:text-xl text-green-100 leading-3'>Wanderer of Nature</span>
                        <span>&ensp;&ensp;&ensp;&ensp;&ensp;</span>
                        <span className='relative top-2 text-xl md:text-2xl text-purple-200 leading-3'>Animal Lover</span>
                    </li>
                    <li className='relative left-12'>
                        <span className='text-lg md:text-2xl text-blue-200 tracking-tighter'>Deep Thinker</span>
                        <span className='text-xl md:text-3xl text-black tracking-widest'> Adaptable </span>
                    </li>
                    <li className='relative -left-12 text-lg md:text-xl text-gray-600'>Filler of dead silence</li>
                    <li className='relative left-24 text-xl md:text-2xl text-yellow-100'>Master of blank stares</li>
                </ul>
                <p className='absolute text-3xl md:text-5xl bottom-24 text-blue-200 mb-8'>I am Johnny</p>
            </div>
        </section>
    );
}
export default Me;
