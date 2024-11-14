import React from 'react'

const Skils = () => {
    return (
        <div className='bg-[#778be6] text-white flex w-full justify-between p-10 md:p-20'>
            <div>
                <div class="grid grid-cols-3 gap-4 justify-items-stretch ">
                    <div className='m-5 p-5 bg-[#0e173f] rounded-full'>ReactJS</div>
                    <div className='m-5 p-5 bg-[#0e173f] rounded-full'>NextJS</div>
                    <div className='m-5 p-5 bg-[#0e173f] rounded-full'>Mysql</div>
                    <div className='m-5 p-5 bg-[#0e173f] rounded-full'>NodeJS</div>
                    <div className='m-5 p-5 bg-[#0e173f] rounded-full'>Tailwind</div>
                    <div className='m-5 p-5 bg-[#0e173f] rounded-full'>PHP</div>
                    
                </div>
            </div>
            <div className='md:w-2/4  p-8 pl-2'>
                    <p className='text-sm text-black md:text-sm tracking-tight'>
                        <b>My Skils</b>
                    </p>
                    <h3 className=' my-2 md:text-2xl font-bold flex leading-normal tracking-tighter'>
                    I am expert in
                    </h3>
                    <p className='text-sm md:text-sm tracking-tight'>
                    I've created and updated websites for many different clients. I worked with multiple CMS including WordPress, Joomla, and Drupal, as well as created my own custom website management system in Node.js.
                    </p>
                    


                </div>
            
        </div>
    )
}

export default Skils