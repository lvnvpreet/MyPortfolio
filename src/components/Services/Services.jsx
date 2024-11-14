import React from 'react'

const Services = () => {
    return (
        <div>
            <center>
                <p className='text-sm text-black md:text-sm tracking-tight'>
                    <b>Services</b>
                </p>
                <h4 className='text-white font-bold leading-normal tracking-tighter'>
                    What do i offer

                </h4>
                <p className='text-sm text-white md:text-sm tracking-tight'>
                    It is a long established fact that a reader will be <br /> distracted by the next readable content of a page when looking at its layout. <br /> The point of all a using the best of all the places.
                </p>
            </center>
            <div className='flex justify-between p-2 md:p-2 '>
                <center>
                <div className='w-[13rem] h-[7rem] rounded-[1.125rem]  bg-blue-950 text-white  items-center '>
                     <h4 className='m-2 pt-10'>Fornt End</h4>
                </div>
                </center>
                <center>
                <div className='w-[13rem] h-[7rem] rounded-[1.125rem]  bg-blue-950 text-white  items-center '>
                     <h4 className='m-2 pt-10'>Back End</h4>
                </div>
                </center>
                <center>
                <div className='w-[13rem] h-[7rem] rounded-[1.125rem]  bg-blue-950 text-white  items-center '>
                     <h4 className='m-2 pt-10'>Web-Dev</h4>
                </div>
                </center>
                <center>
                <div className='w-[13rem] h-[7rem] rounded-[1.125rem]  bg-blue-950 text-white  items-center '>
                     <h4 className='m-2 pt-10'>Mobile-Dev</h4>
                </div>
                </center>
                
                
                
            </div>
        </div>

    );
};

export default Services