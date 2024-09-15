import React from 'react';
import img from '../assets/pic.avif';

const Hero = () => {
  return (
    <div className='bg-black text-white text-center pt-36' id='home'>
      <img src={img} alt="Profile" className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'/>
      <h1 className='text-4xl font-bold'>
        I'm {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-gray-600'>Lipsarani Moharana</span>
        , Full-Stack Developer
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
        I specialize in building modern and responsive web applications.
      </p>
      <div className='mt-8 space-x-4'>
        <button className='bg-gradient-to-r from-yellow-400 to-black-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full' id='contact'>Contact Me</button>
        <button className='bg-gradient-to-r from-yellow-400 to-black-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
      </div>
    </div>
  );
};

export default Hero;
