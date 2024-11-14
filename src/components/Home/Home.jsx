import React from 'react'
import avtarImg from "../../assets/me-removebg.png"

const Home = () => {
    return (
        <div className='text-white flex w-full justify-between p-10 md:p-20'>
            <div className='md:w-2/4 md:pt-40'>
                <h1 className='text-2xl my-2 md:text-5xl font-bold flex leading-normal tracking-tighter'>
                    Hello! I am Web Developer
                </h1>
                <p className='text-sm md:text-xl tracking-tight'>
                    I am a Full-Stack Web Developer with extensive experience of over 2 years. My expertise is in creating & designing websites, Mobile Apps, and Desktop Applications.
                </p>
                <button className='mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105  font-semibold rounded-3xl  bg-black bg-opacity-40'>
                    Contact Me
                </button>
            </div>
            <div className='md:w-2/4 '>
                <img className=' pr-0 w-full px-24' src={avtarImg} alt="Avatar" />
            </div>
        </div>
    );
};



export default Home